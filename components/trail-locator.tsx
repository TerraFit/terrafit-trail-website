import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = {
  height: '300px',
  width: '100%'
};

const defaultCenter = {
  lat: -33.9082336,
  lng: 25.5000752
};

export function TrailLocator() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Find Your Trail</h2>
      <p className="mb-4">Experience the TerraFit Trail at our featured location</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Location Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">J-Bay Zebra Lodge</h3>
          <p className="text-gray-600 mb-4">Eastern Cape, South Africa</p>

          {/* Google Map */}
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
          >
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-gray-700">10 minutes from Jeffreys Bay, 30 minutes from Gqeberha</p>
            <p className="text-gray-700">Coordinates: -33.9082336, 25.5000752</p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Hours</h4>
            <p className="text-gray-700">Sunrise to Sunset (7 days a week)</p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-gray-700">+27 (0) 78 925 6812</p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-gray-700">info@jbayzebralodge.co.za</p>
          </div>

          <div className="mt-6 flex justify-between">
            <a href="https://www.google.com/maps/dir//J-Bay+Zebra+Lodge,+Jeffreys+Bay/@-33.9082336,25.5000752,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e774c69a3c0a5d9:0x90a9c1ca6c319c7!2m2!1d25.5000752!2d-33.9082336" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors">Get Directions</a>
            <a href="https://www.google.com/maps/place/J-Bay+Zebra+Lodge/@-33.9082336,25.5000752,13z/data=!4m6!3m5!1s0x1e774c69a3c0a5d9:0x90a9c1ca6c319c7!8m2!3d-33.9082336!4d25.5000752!16s%2Fg%2F11c6j3x268?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">View TerraFit Trail Zebra Lodge Map</a>
          </div>

          {/* QR Code Display */}
          <div className="mt-6">
            <p className="text-gray-700">Scan to Check-In at J-Bay Zebra Lodge TerraFit Trail</p>
            {/* Replace with actual QR code image */}
            <img src="/qr-placeholder.png" alt="QR Code" className="w-48 h-48" />
          </div>
        </div>

        {/* Request Installation Quote */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Want a Trail at Your Location?</h3>
          <p className="text-gray-600 mb-4">Perfect for private estates, corporate campuses, and resort properties.</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors">Request Installation Quote</button>
        </div>
      </div>
    </div>
  );
}
