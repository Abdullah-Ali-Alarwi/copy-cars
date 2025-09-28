import React from "react";

export default function AccountForm() {
  return (
    <div className="w-full p-6">
      {/* العنوان */}
      <div className="mb-4 text-sm text-gray-500">
        <span>Account</span> / My Account
      </div>
      <p className="text-2xl font-bold mb-6">Account settings</p>

      {/* الفورم */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded shadow p-3 w-full">
        {/* First Name */}
        <div>
          <label className="block text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            placeholder="First name"
            className="w-full bg-[#f4f5f5] rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            className="w-full bg-[#f4f5f5] rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-[#f4f5f5] rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#f4f5f5] rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#f4f5f5] rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-[#f4f5f5] rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/* زر الحفظ يأخذ صف كامل */}
        <div className="md:col-span-2 flex justify-start">
          <button
            type="submit"
            className="w-[235px] bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
