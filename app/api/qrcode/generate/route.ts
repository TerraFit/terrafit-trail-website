import { NextRequest, NextResponse } from 'next/server';
import QRCode from 'qrcode';

export async function POST(request: NextRequest) {
  try {
    const { data, type = 'location' } = await request.json();

    if (!data) {
      return NextResponse.json({ error: 'Data required for QR code generation' }, { status: 400 });
    }

    let qrData = '';
    
    if (type === 'location') {
      // Generate QR code for TerraFit Trail location
      qrData = `https://terrafit-trail.com/checkin?location=${encodeURIComponent(data)}`;
    } else if (type === 'member') {
      // Generate QR code for member (if needed in future)
      qrData = `terrafit://member/${data}`;
    }

    try {
      const qrCodeDataURL = await QRCode.toDataURL(qrData);
      
      return NextResponse.json({
        success: true,
        qrCode: qrCodeDataURL,
        data: qrData,
        type: type
      });

    } catch (qrError) {
      console.error('QR code generation error:', qrError);
      return NextResponse.json({ error: 'Failed to generate QR code' }, { status: 500 });
    }

  } catch (error) {
    console.error('QR code API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const data = searchParams.get('data');
    const type = searchParams.get('type') || 'location';

    if (!data) {
      return NextResponse.json({ error: 'Data parameter required' }, { status: 400 });
    }

    let qrData = '';
    
    if (type === 'location') {
      qrData = `https://terrafit-trail.com/checkin?location=${encodeURIComponent(data)}`;
    }

    const qrCodeDataURL = await QRCode.toDataURL(qrData);
    
    return NextResponse.json({
      success: true,
      qrCode: qrCodeDataURL,
      data: qrData
    });

  } catch (error) {
    console.error('QR code generation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

