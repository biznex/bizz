"use client";
import { useState } from "react";

export default function CompleteProfile({ userType, authMethod }) {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    console.log("OTP Verified:", otp);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-transparent">
      {/* Bento Box Container with Fixed Width */}
      <div className="relative w-96 md:w-[450px] lg:w-[500px] p-4">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold text-white text-center mb-4">Complete Business Profile</h1>

        {/* Form Container with White Border */}
        <div className="p-3 border border-white rounded-lg">
          <form className="space-y-2">
            {/* Owner Name */}
            <input
              type="text"
              className="w-full px-3 py-2 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none"
              placeholder="Owner Name"
            />

            {/* Business Name */}
            <input
              type="text"
              className="w-full px-3 py-2 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none"
              placeholder="Business Name"
            />

{/* Business Category Dropdown with Custom Arrow */}
<div className="relative">
  <select
    className="w-full px-3 py-2 border border-white bg-transparent text-white rounded-md focus:outline-none appearance-none pr-10"
    value={businessCategory}
    onChange={(e) => setBusinessCategory(e.target.value)}
  >
    <option value="" disabled hidden>
      Select Business Category
    </option>
    <option value="Retail & Ecommerce" className="bg-black text-white">
      Retail & Ecommerce
    </option>
    <option value="Education" className="bg-black text-white">Education</option>
    <option value="Consultation" className="bg-black text-white">
      Consultation
    </option>
    <option value="Services" className="bg-black text-white">Services</option>
    <option value="Food" className="bg-black text-white">Food</option>
    <option value="Other" className="bg-black text-white">Other</option>
  </select>

  {/* Custom Arrow */}
  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>





            {/* Custom Business Category (only if 'Other' is selected) */}
            {businessCategory === "Other" && (
              <input
                type="text"
                className="w-full px-3 py-2 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none"
                placeholder="Enter Business Category"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
              />
            )}

            {/* Business Address */}
            <input
              type="text"
              className="w-full px-3 py-2 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none"
              placeholder="Business Address"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
            />

            {/* Phone Number & OTP (if Google authentication is used) */}
            {authMethod === "google" && (
              <>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="text-white"
                  >
                    Send OTP
                  </button>
                </div>

                {otpSent && (
                  <>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      className="mt-2 text-white"
                    >
                      Verify OTP
                    </button>
                  </>
                )}
              </>
            )}

            {/* Orange Submit Button */}
            <button
              type="submit"
              className="w-full text-white py-2 mt-3 bg-[#F06516] rounded-lg"
            >
              Complete Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
