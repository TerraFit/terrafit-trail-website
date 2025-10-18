import { NextRequest, NextResponse } from 'next/server';
import QRCode from 'qrcode';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { location = 'J-Bay Zebra Lodge', memberId } = body;

    // Create QR code data - this will link to the check-in page
    const qrData = {
      location,
      memberId,
      timestamp: new Date().toISOString(),
    };

    const qrString = JSON.stringify(qrData);

    // Generate QR code as data URL
    const qrCodeDataUrl = await QRCode.toDataURL(qrString, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 0.95,
      margin: 1,
      width: 300,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    });

    return NextResponse.json(
      {
        success: true,
        qrCode: qrCodeDataUrl,
        data: qrData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('QR code generation error:', error);
    return NextResponse.json(
      { error: 'QR code generation failed' },
      { status: 500 }
    );
  }
}
