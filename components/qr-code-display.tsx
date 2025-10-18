'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Loader } from 'lucide-react';

interface QRCodeDisplayProps {
  location?: string;
  memberId?: number;
}

export function QRCodeDisplay({ location = 'J-Bay Zebra Lodge', memberId }: QRCodeDisplayProps) {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/qrcode/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location,
            memberId,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to generate QR code');
        }

        setQrCode(data.qrCode);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    generateQRCode();
  }, [location, memberId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg">
        <Loader className="w-8 h-8 text-green-600 animate-spin mb-2" />
        <p className="text-gray-600">Generating QR Code...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-center">
        <p className="text-red-700 font-semibold">Error generating QR code</p>
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg border-2 border-green-200">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-center mb-2">Scan to Check-In</h3>
        <p className="text-gray-600 text-center text-sm">
          Scan this QR code when you arrive to check in as a member
        </p>
      </div>

      {qrCode && (
        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
          <img
            src={qrCode}
            alt="TerraFit Trail Check-in QR Code"
            className="w-64 h-64"
          />
        </div>
      )}

      <div className="text-center text-sm text-gray-600">
        <p className="font-semibold mb-1">📍 {location}</p>
        <p>TerraFit Trail Member Check-in</p>
      </div>

      {qrCode && (
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = qrCode;
            link.download = `terrafit-trail-qr-${location.replace(/\s+/g, '-')}.png`;
            link.click();
          }}
          className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Download QR Code
        </button>
      )}
    </div>
  );
}
