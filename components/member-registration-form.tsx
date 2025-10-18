'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  full_name: string;
  id_number: string;
  date_of_birth: string;
  address: string;
  phone_number: string;
  medical_aid?: string;
  emergency_contact_person?: string;
  emergency_contact_phone?: string;
}

export function MemberRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    id_number: '',
    date_of_birth: '',
    address: '',
    phone_number: '',
    medical_aid: '',
    emergency_contact_person: '',
    emergency_contact_phone: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [memberId, setMemberId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/members/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setSuccess(true);
      setMemberId(data.member.id);
      setFormData({
        full_name: '',
        id_number: '',
        date_of_birth: '',
        address: '',
        phone_number: '',
        medical_aid: '',
        emergency_contact_person: '',
        emergency_contact_phone: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-2">Member Registration</h2>
      <p className="text-gray-600 mb-6">Join TerraFit Trail and start your fitness journey</p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900">Registration Error</h3>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-green-900">Registration Successful!</h3>
            <p className="text-green-700 text-sm">
              Welcome to TerraFit Trail! Your Member ID is: <strong>#{memberId}</strong>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Required Fields Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Required Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <Input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID Number *
              </label>
              <Input
                type="text"
                name="id_number"
                value={formData.id_number}
                onChange={handleChange}
                placeholder="Enter your ID number"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth *
              </label>
              <Input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address *
              </label>
              <Textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address"
                required
                className="w-full"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <Input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Optional Fields Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Optional Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medical Aid Provider
              </label>
              <Input
                type="text"
                name="medical_aid"
                value={formData.medical_aid}
                onChange={handleChange}
                placeholder="Enter your medical aid provider (optional)"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Emergency Contact Person
              </label>
              <Input
                type="text"
                name="emergency_contact_person"
                value={formData.emergency_contact_person}
                onChange={handleChange}
                placeholder="Enter emergency contact name (optional)"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Emergency Contact Phone
              </label>
              <Input
                type="tel"
                name="emergency_contact_phone"
                value={formData.emergency_contact_phone}
                onChange={handleChange}
                placeholder="Enter emergency contact phone (optional)"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
        >
          {loading ? 'Registering...' : 'Register as Member'}
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Your information is secure and will only be used for TerraFit Trail membership purposes.
      </p>
    </div>
  );
}
