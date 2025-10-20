import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// WhatsApp notification
async function sendWhatsAppNotification(phone: string, message: string) {
  console.log(`WHATSAPP to ${phone}: ${message}`);
  return true;
}

// Email notification
async function sendEmailNotification(email: string, subject: string, html: string) {
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: subject,
    html: html
  });
}

export async function POST(request: NextRequest) {
  try {
    const { memberId, locationQrCode } = await request.json();

    if (!memberId || !locationQrCode) {
      return NextResponse.json({ error: 'Member ID and Location QR code required' }, { status: 400 });
    }

    const client = await pool.connect();
    
    try {
      // Verify member exists
      const memberResult = await client.query(
        `SELECT id, full_name, id_number, phone, emergency_contact, postal_address, physical_address, date_of_birth
         FROM members WHERE id = $1`, [memberId]
      );

      if (memberResult.rows.length === 0) {
        return NextResponse.json({ error: 'Member not found. Please register first.' }, { status: 404 });
      }

      const member = memberResult.rows[0];

      // Verify location QR code
      const locationResult = await client.query(
        'SELECT id, name, address, operator_email, operator_phone FROM locations WHERE qr_code = $1',
        [locationQrCode]
      );

      if (locationResult.rows.length === 0) {
        return NextResponse.json({ error: 'Invalid TerraFit Trail QR code' }, { status: 400 });
      }

      const location = locationResult.rows[0];
      const checkInTime = new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' });

      // Record check-in
      const checkInId = uuidv4();
      await client.query(
        'INSERT INTO check_ins (id, member_id, location_id) VALUES ($1, $2, $3)',
        [checkInId, member.id, location.id]
      );

      // Send notifications
      const whatsappMessage = `🚴‍♂️ TERRAFIT TRAIL CHECK-IN\n\nMember: ${member.full_name}\nID: ${member.id_number}\nPhone: ${member.phone}\nEmergency: ${member.emergency_contact}\n\nLocation: ${location.name}\nTime: ${checkInTime}\n\nPlease collect payment at front desk.`;
      await sendWhatsAppNotification(location.operator_phone, whatsappMessage);

      const emailHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #059669;">🚴‍♂️ TerraFit Trail Check-in Notification</h2>
  
  <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #1f2937; margin-bottom: 15px;">Member Details</h3>
    <p><strong>Full Name:</strong> ${member.full_name}</p>
    <p><strong>ID Number:</strong> ${member.id_number}</p>
    <p><strong>Date of Birth:</strong> ${new Date(member.date_of_birth).toLocaleDateString('en-ZA')}</p>
    <p><strong>Phone:</strong> ${member.phone}</p>
    <p><strong>Emergency Contact:</strong> ${member.emergency_contact}</p>
    <p><strong>Postal Address:</strong> ${member.postal_address}</p>
    <p><strong>Physical Address:</strong> ${member.physical_address}</p>
  </div>

  <div style="background: #ecfdf5; padding: 15px; border-radius: 8px;">
    <h3 style="color: #1f2937; margin-bottom: 10px;">Check-in Information</h3>
    <p><strong>Location:</strong> ${location.name}</p>
    <p><strong>Address:</strong> ${location.address}</p>
    <p><strong>Check-in Time:</strong> ${checkInTime}</p>
  </div>

  <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
    <p style="margin: 0;"><strong>Action Required:</strong> Please collect payment at the front desk.</p>
  </div>
</div>`;

      await sendEmailNotification(location.operator_email, `TerraFit Check-in: ${member.full_name}`, emailHtml);

      return NextResponse.json({
        success: true,
        message: 'Check-in recorded successfully',
        checkIn: {
          id: checkInId,
          memberName: member.full_name,
          location: location.name,
          locationAddress: location.address,
          checkInTime: checkInTime
        }
      });

    } finally {
      client.release();
    }

  } catch (error) {
    console.error('Check-in error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const qrCode = searchParams.get('qrcode');
    
    if (!qrCode) {
      return NextResponse.json({ error: 'QR code required' }, { status: 400 });
    }

    const client = await pool.connect();
    
    try {
      const locationResult = await client.query(
        'SELECT name, address FROM locations WHERE qr_code = $1', [qrCode]
      );

      if (locationResult.rows.length === 0) {
        return NextResponse.json({ valid: false, error: 'Invalid TerraFit Trail QR code' }, { status: 400 });
      }

      const location = locationResult.rows[0];
      
      return NextResponse.json({
        valid: true,
        location: {
          name: location.name,
          address: location.address
        }
      });

    } finally {
      client.release();
    }

  } catch (error) {
    console.error('QR verification error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
