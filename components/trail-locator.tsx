'use client';

import Image from 'next/image';

export function TrailLocator() {
  const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.2999999999995!2d18.423220999999998!3d-33.92487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8a24c6f7ea676b%3A0x42f0cb594df9f1f2!2sTable%20Mountain!5e0!3m2!1sen!2sus!4v1700000000000'; // Replace with your actual Google Maps embed URL

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Find Our Trail</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Google Maps Embed */}
        <div className="shadow-md rounded-lg overflow-hidden">
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TerraFit Trail Location"
          ></iframe>
        </div>

        {/* Location Details and QR Code */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Location Details</h2>
          <p className="text-gray-700 mb-4">
            Table Mountain National Park, Cape Town, South Africa
          </p>
          <p className="text-gray-700 mb-4">
            Specific coordinates: 33.9249° S, 18.4241° E
          </p>

          {/* QR Code Placeholder */}
          <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg">
            <span className="text-gray-500">QR Code Placeholder</span>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">Scan to Check-In</p>
        </div>
      </div>
    </div>
  );
}
