import React from 'react';

export default function WishListMoudle() {
  return (
    <div >
      <h2 className="text-2xl font-bold mb-6">Wish List</h2>

      <form className="space-y-6">
        {/* Personal Info */}
        <div>
          <p className="font-semibold mb-2">Personal Info</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
            <div>
              <label className="block text-sm mb-1">Zip Code</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
          </div>
        </div>

        {/* Car Info */}
        <div>
          <p className="font-semibold mb-2">Car Info</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Make</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
            <div>
              <label className="block text-sm mb-1">Model</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
            <div>
              <label className="block text-sm mb-1">Trim</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
            <div>
              <label className="block text-sm mb-1">Color</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
            <div>
              <label className="block text-sm mb-1">Body Type</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
            <div>
              <label className="block text-sm mb-1">Transmission</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2"/>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-sm mb-1">Radius Within</p>
            <p className="text-xs text-gray-500 mb-1">427 k miles or less</p>
            <input type="range" className="w-full"/>
          </div>
          <div>
            <p className="text-sm mb-1">Price Range</p>
            <p className="text-xs text-gray-500 mb-1">$3353</p>
            <input type="range" className="w-full"/>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" id="terms" className="w-4 h-4"/>
          <label htmlFor="terms" className="text-sm">I Agree To The Terms & Conditions</label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition">
          Send
        </button>
      </form>
    </div>
  );
}
