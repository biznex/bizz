"use client";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Import calendar icon

export default function JobAspirantProfile() {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-transparent">
      <div className="relative w-96 md:w-[450px] lg:w-[500px] p-4">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          Complete Job Aspirant Profile
        </h1>

        {/* Form Container with White Border */}
        <div className="p-3 border border-white rounded-lg">
          <form className="space-y-2">
            {/* Full Name */}
            <input
              type="text"
              className="w-full px-3 py-2 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {/* Date of Birth Field */}
            <div className="relative">
              <input
                id="dobInput"
                type="date"
                className="w-full px-3 py-2 border border-white bg-transparent text-white rounded-md focus:outline-none pr-10"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <FaCalendarAlt
                className="absolute right-3 top-3 text-white cursor-pointer"
                onClick={() => document.getElementById("dobInput").showPicker()} // ✅ Opens calendar on icon click
              />
            </div>

            {/* Submit Button */}
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