'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

interface CheckInData {
  member_id?: number;
  location?: string;
}

export function QRCheckInPage() {
  const searchParams = useSearchParams();
  const [checkInData, setCheckInData] = useState<CheckInData | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [memberName, setMemberName] = useState('');

  useEffect(() => {
    // Parse QR code data from URL params
    const memberId = searchParams?.get('member_id') || null;
  const location = searchParams?.get('location') || 'J-Bay Zebra Lodge';

    if (memberId) {
      setCheckInData({
        member_id: parseInt(memberId),
        location,
      });
    }
  }, [searchParams]);

  const handleCheckIn = async () => {
    if (!checkInData?.member_id) {
      setError('Invalid QR code data');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/members/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          member_id: checkInData.member_id,
          location: checkInData.location,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Check-in failed');
      }

      setMemberName(data.checkIn.member_name);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!checkInData?.member_id) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Invalid QR Code</h1>
          <p className="text-gray-600">
            Please scan a valid TerraFit Trail QR code to check in.
          </p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2 text-green-600">Thank You!</h1>
          <p className="text-gray-700 mb-2">
            Welcome, <strong>{memberName}</strong>
          </p>
          <p className="text-gray-600 mb-6">
            You have successfully checked in at {checkInData.location}
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 font-semibold mb-2">
              📋 Payment Instruction
            </p>
            <p className="text-sm text-gray-600">
              Please proceed to payment at the front desk before starting your exercises.
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <strong>Location:</strong> {checkInData.location}
            </p>
            <p>
              <strong>Check-in Time:</strong> {new Date().toLocaleTimeString()}
            </p>
          </div>

          <Button
            onClick={() => window.location.href = '/'}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
          >
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-center">Check In to TerraFit Trail</h1>
        <p className="text-gray-600 text-center mb-6">
          {checkInData.location}
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900">Check-in Error</h3>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
          <p className="text-gray-700 mb-4">
            Member ID: <strong className="text-lg">#{checkInData.member_id}</strong>
          </p>
          <p className="text-sm text-gray-600">
            Click the button below to complete your check-in
          </p>
        </div>

        <Button
          onClick={handleCheckIn}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Checking In...
            </>
          ) : (
            'Check In Now'
          )}
        </Button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Your check-in will be recorded and the lodge will be notified.
        </p>
      </div>
    </div>
  );
}
