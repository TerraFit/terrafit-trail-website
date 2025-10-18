import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: 'terrafit_trail',
});

// Initialize Twilio client for WhatsApp
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID || '',
  process.env.TWILIO_AUTH_TOKEN || ''
);

// Initialize email transporter
const emailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'localhost',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: process.env.SMTP_USER ? {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  } : undefined,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { member_id, location = 'J-Bay Zebra Lodge' } = body;

    if (!member_id) {
      return NextResponse.json(
        { error: 'Member ID is required' },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    try {
      // Get member details
      const memberResult = await client.query(
        'SELECT * FROM members WHERE id = $1',
        [member_id]
      );

      if (memberResult.rows.length === 0) {
        return NextResponse.json(
          { error: 'Member not found' },
          { status: 404 }
        );
      }

      const member = memberResult.rows[0];

      // Record check-in
      const checkInResult = await client.query(
        `INSERT INTO check_ins (member_id, location, check_in_time, payment_status)
         VALUES ($1, $2, CURRENT_TIMESTAMP, 'pending')
         RETURNING id, check_in_time`,
        [member_id, location]
      );

      const checkIn = checkInResult.rows[0];

      // Send notifications to J-Bay Zebra Lodge
      const notificationMessage = `New member check-in: ${member.full_name} at ${location} - ${new Date().toLocaleString()}`;

      // Send email notification
      try {
        await emailTransporter.sendMail({
          from: process.env.SMTP_FROM || 'noreply@terrafit.co.za',
          to: 'info@jbayzebralodge.co.za',
          subject: 'TerraFit Trail - New Member Check-in',
          html: `
            <h2>New Member Check-in</h2>
            <p><strong>Member Name:</strong> ${member.full_name}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Check-in Time:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Phone:</strong> ${member.phone_number}</p>
            <p><strong>Payment Status:</strong> Pending - Please collect payment at front desk</p>
          `,
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      // Send WhatsApp notification
      try {
        if (process.env.TWILIO_PHONE_NUMBER && process.env.TWILIO_WHATSAPP_NUMBER) {
          await twilioClient.messages.create({
            from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
            to: `whatsapp:+27789256812`,
            body: notificationMessage,
          });
        }
      } catch (whatsappError) {
        console.error('WhatsApp notification failed:', whatsappError);
      }

      return NextResponse.json(
        {
          success: true,
          message: 'Check-in successful',
          checkIn: {
            id: checkIn.id,
            member_name: member.full_name,
            check_in_time: checkIn.check_in_time,
            location,
          },
        },
        { status: 201 }
      );
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error('Check-in error:', error);
    return NextResponse.json(
      { error: 'Check-in failed' },
      { status: 500 }
    );
  }
}
