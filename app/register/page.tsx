import { MemberRegistrationForm } from '@/components/member-registration-form';

export const metadata = {
  title: 'Member Registration - TerraFit Trail',
  description: 'Register as a TerraFit Trail member to access our outdoor fitness trails',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <MemberRegistrationForm />
      </div>
    </div>
  );
}
