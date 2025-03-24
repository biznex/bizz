"use client";

import { useState, useEffect } from "react";
import { X, ArrowLeft } from "lucide-react"; 
import { Eye, EyeOff } from "lucide-react";

export default function Page() {
  const [showBusinessLogin, setShowBusinessLogin] = useState(false);
  const [showAspirantLogin, setShowAspirantLogin] = useState(false);
  const [showBusinessRegister, setShowBusinessRegister] = useState(false);
  const [showAspirantRegister, setShowAspirantRegister] = useState(false); 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showEmailOtpField, setShowEmailOtpField] = useState(false);
  const [showNumberOtpField, setShowNumberOtpField] = useState(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [numberVerified, setNumberVerified] = useState(false);

  const [jobAspirantEmail, setJobAspirantEmail] = useState("");
  const [jobAspirantPassword, setJobAspirantPassword] = useState("");
  const [jobAspirantLoading, setJobAspirantLoading] = useState(false);
  const [jobAspirantError, setJobAspirantError] = useState("");

 //const [email, setEmail] = useState("");
const [isEmailVerified, setIsEmailVerified] = useState(false);
const [emailOtp, setEmailOtp] = useState("");
const [isEmailOtpVerified, setIsEmailOtpVerified] = useState(false);

const [phone, setPhone] = useState("");
const [isPhoneVerified, setIsPhoneVerified] = useState(false);
const [phoneOtp, setPhoneOtp] = useState("");
const [isPhoneOtpVerified, setIsPhoneOtpVerified] = useState(false);

/*const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");*/



const handleRegister = async () => {
  if (!isEmailOtpVerified || !isPhoneOtpVerified) {
    setError("Please verify your email and phone first.");
    return;
  }

  if (password.length<8){
    setError("Password should be atleast 8 characters")
  }
  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const response = await fetch('https://yourapi.com/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, phone, password }),
    });

    const data = await response.json();
    if (response.ok) {
      // Redirect to a different page upon successful registration
      window.location.href = '/success-page';
    } else {
      setError(data.message || "Registration failed.");
    }
  } catch (error) {
    setError("An error occurred. Please try again.");
  } finally {
    setLoading(false);
  }
};
  //Business login api fetch
  const handleLogin = async () => {
    setLoading(true);
    setError(""); // Clear previous errors
  
    try {
      const response = await fetch('https://biznex.onrender.com/login/job-user/login-job-user', {
        method: 'POST',
        credentials: 'include' ,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Use the email state
          password: password, // Use the password state
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response to the console
        alert("Login Successful!"); // Notify the user
        // Optionally, redirect or perform other actions here
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed"); // Display error message
      }
    } catch (error) {
      setError("An error occurred. Please try again."); // Handle network errors
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  //jobaspirant login api fetch
  const handleJobAspirantLogin = async () => {
    setJobAspirantLoading(true);
    setJobAspirantError(""); // Clear previous errors
  
    try {
      const response = await fetch('https://biznex.onrender.com/login/aspirant/login-aspirant', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: jobAspirantEmail, // Use the job aspirant email state
          password: jobAspirantPassword, // Use the job aspirant password state
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response to the console
        alert("Login Successful!"); // Notify the user
        // Optionally, redirect or perform other actions here
      } else {
        const errorData = await response.json();
        setJobAspirantError(errorData.message || "Login failed"); // Display error message
      }
    } catch (error) {
      setJobAspirantError("An unexpected error occurred. Please try again later."); // Handle network errors
    } finally {
      setJobAspirantLoading(false); // Reset loading state
    }
  };

  const handleVerifyEmail = async () => {
    setLoading(true);
    setError("");
  
    try {
      const response = await fetch('https://biznex.onrender.com/signup/client/send-email-otp', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      console.log(data);
  
      const data = await response.json();
      if (response.ok && data.message === "Email OTP sent successfully.") {
        setIsEmailVerified(true);
      } else {
        setError(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    setLoading(true);
    setError("");
  
    try {
      const response = await fetch('https://biznex.onrender.com/signup/client/verify-email-otp', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp: emailOtp }),
      });
  
      const data = await response.json();
      if (response.ok && data.message === 'Email verified successfully.') {
        setIsEmailOtpVerified(true);
      } else {
        setError(data.message || "Failed to verify OTP.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyPhone = async () => {
  setLoading(true);
  setError("");

  try {
    const response = await fetch('https://biznex.onrender.com/signup/client/send-phone-otp', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone }),
    });

    const data = await response.json();
    if (response.ok && data.message === 'Phone OTP sent successfully.') {
      setIsPhoneVerified(true);
    } else {
      setError(data.message || "Failed to send OTP.");
    }
  } catch (error) {
    setError("An error occurred. Please try again.");
  } finally {
    setLoading(false);
  }
};

const handleVerifyPhoneOtp = async () => {
  setLoading(true);
  setError("");

  try {
    const response = await fetch('https://biznex.onrender.com/signup/client/verify-phone-otp', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, otp: phoneOtp }),
    });

    const data = await response.json();
    if (response.ok && data.message === 'Phone verified successfully.') {
      setIsPhoneOtpVerified(true);
    } else {
      setError(data.message || "Failed to verify OTP.");
    }
  } catch (error) {
    setError("An error occurred. Please try again.");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowBusinessLogin(false);
        setShowAspirantLogin(false);
        setShowBusinessRegister(false);
        setShowAspirantRegister(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showBusinessLogin, showAspirantLogin, showBusinessRegister, showAspirantRegister]);




  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Business Section */}
        <div className="p-8 shadow-md rounded-lg text-center border border-gray-300">
          <h2 className="text-3xl font-bold text-white">For Businesses</h2>
          <p className="text-white mt-2">Curated for businesses to find top talent and grow.</p>
          <button
            className="mt-6 w-full px-6 py-3 bg-[#F16517] text-white rounded-md hover:bg-[#d14b10] transition"
            onClick={() => setShowBusinessLogin(true)}
          >
            Login
          </button>
          <p className="mt-4 text-white">Don't have an account?</p>
          <button
            className="mt-2 w-full px-6 py-3 border border-[#F16517] text-[#F16517] rounded-md hover:bg-orange-100 transition"
            onClick={() => setShowBusinessRegister(true)}
          >
            Register as Business
          </button>

        </div>

        {/* Job Aspirants Section */}
        <div className="p-8 shadow-md rounded-lg text-center border border-gray-300">
          <h2 className="text-3xl font-bold text-white">For Job Aspirants</h2>
          <p className="text-white mt-2">Curated for job seekers to find new opportunities.</p>
          <button
            className="mt-6 w-full px-6 py-3 bg-[#F16517] text-white rounded-md hover:bg-[#d14b10] transition"
            onClick={() => setShowAspirantLogin(true)}
          >
            Login
          </button>
          <p className="mt-4 text-white">Don't have an account?</p>
          <button
            className="mt-2 w-full px-6 py-3 border border-[#F16517] text-[#F16517] rounded-md hover:bg-orange-100 transition"
            onClick={() => setShowAspirantRegister(true)} // ✅ Use setter function
          >
            Sign up as Job Aspirant
          </button>


        </div>
      </div>

      {showBusinessLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="relative w-96 md:w-[450px] lg:w-[500px] p-4 rounded-lg border border-gray-300 bg-opacity-80 backdrop-blur-md">
            {/* Back and Close Icons */}
            <div className="absolute top-3 left-3 text-white cursor-pointer hover:text-gray-300">
              <ArrowLeft size={20} onClick={() => setShowBusinessLogin(false)} />
            </div>
            <div className="absolute top-3 right-3 text-white cursor-pointer hover:text-gray-300">
              <X size={20} onClick={() => setShowBusinessLogin(false)} />
            </div>

            <h2 className="text-xl font-semibold text-white text-center">Business Login</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-4 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <button 
              className={`w-full mt-4 px-4 py-2 ${loading ? 'bg-gray-500' : 'bg-[#F16517]'} text-white text-sm rounded-md hover:bg-[#d14b10] transition`}
              onClick={handleLogin}
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            <button className="w-full mt-2 px-4 py-2 border border-gray-300 text-white text-sm rounded-md hover:bg-gray-700 transition">
              Sign in with Google
            </button>
          </div>
        </div>
      )}


      {/* Job Aspirant Login Popup */}
      {showAspirantLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="relative w-96 md:w-[450px] lg:w-[500px] p-4 rounded-lg border border-gray-300 bg-opacity-80 backdrop-blur-md">
            {/* Back and Close Icons */}
            <div className="absolute top-3 left-3 text-white cursor-pointer hover:text-gray-300">
              <ArrowLeft size={20} onClick={() => setShowAspirantLogin(false)} />
            </div>
            <div className="absolute top-3 right-3 text-white cursor-pointer hover:text-gray-300">
              <X size={20} onClick={() => setShowAspirantLogin(false)} />
            </div>

            <h2 className="text-xl font-semibold text-white text-center">Job Aspirant Login</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-4 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
              onChange={(e) => setJobAspirantEmail(e.target.value)} // Update email state
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
              onChange={(e) => setJobAspirantPassword(e.target.value)} // Update password state
            />
            <button 
              className={`w-full mt-4 px-4 py-2 ${jobAspirantLoading ? 'bg-gray-500' : 'bg-[#F16517]'} text-white text-sm rounded-md hover:bg-[#d14b10] transition`}
              onClick={handleJobAspirantLogin}
              disabled={jobAspirantLoading} // Disable button while loading
            >
              {jobAspirantLoading ? 'Logging in...' : 'Login'}
            </button>
            {jobAspirantError && <p className="text-red-500 text-xs mt-1">{jobAspirantError}</p>}
            <button className="w-full mt-2 px-4 py-2 border border-gray-300 text-white text-sm rounded-md hover:bg-gray-700 transition">
              Sign in with Google
            </button>
          </div>
        </div>
      )}

{/* Business Registration Popup */}
{showBusinessRegister && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
    <div className="relative w-96 md:w-[450px] lg:w-[500px] p-4 rounded-lg border border-gray-300 bg-opacity-80 backdrop-blur-md">
      
      {/* Close Buttons */}
      <div className="absolute top-3 left-3 text-white cursor-pointer hover:text-gray-300">
        <ArrowLeft size={20} onClick={() => setShowBusinessRegister(false)} />
      </div>
      <div className="absolute top-3 right-3 text-white cursor-pointer hover:text-gray-300">
        <X size={20} onClick={() => setShowBusinessRegister(false)} />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white text-center">Business Registration</h2>

      {/* Email with Verify Email Option */}
    <div className="relative w-full mt-2">
      <input
        type="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder="Enter your Email"
        className="w-full p-2 pr-20 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
        disabled={isEmailVerified} // Disable input if verified
      />
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F16517] text-sm cursor-pointer px-3 py-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          setShowEmailOtpField(true);
          handleVerifyEmail(); // ✅ Now properly executes
        }}
        disabled={isEmailVerified}
      >
        { isEmailVerified ? "✔ Verified" : "Verify Email"}
      </button>

    </div>

    {/* OTP Field for Email */}
    {showEmailOtpField && isEmailVerified && (
      <div className="relative w-full mt-2">
        <input
          type="text"
          value={emailOtp}
          onChange={(e) => setEmailOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-2 pr-20 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
        />
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F16517] text-sm cursor-pointer"
          onClick={() => {
            setIsEmailVerified(true),
            setShowEmailOtpField(false),
            handleVerifyEmailOtp();

          }}
        >
          Verify OTP
        </button>
      </div>
    )}

    {/* Phone Number with Verify Option */}
    { (
      <div className="relative w-full mt-2">
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your Phone Number"
        className="w-full py-2 px-3 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none"
        disabled={isPhoneVerified} // Disable input if verified
      />
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-[#F16517] text-sm cursor-pointer px-3 py-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleVerifyPhone}
        disabled={isPhoneVerified || loading}
      >
        { isPhoneVerified ? "✔ Verified" : "Verify PhNo"}
      </button>
    </div>
    
    )}

    {/* OTP Field for Phone Number */}
    {showNumberOtpField && !isPhoneVerified && (
      <div className="relative w-full mt-2 flex items-center">
        <input
          type="text"
          value={phoneOtp}
          onChange={(e) => setPhoneOtp(e.target.value)}
          placeholder="Enter OTP"
          disabled={isPhoneOtpVerified}
          className="w-full p-2 pr-20 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
        />
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F16517] text-sm cursor-pointer px-3 py-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleVerifyPhoneOtp} 
          disabled={isPhoneOtpVerified || loading}
        >
          { isPhoneOtpVerified ? "✔ Verified" : "Verify OTP"}
        </button>

      </div>
    )}

    {/* Error and Loading Messages /}
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {loading && <p>Loading...</p>*/}

      {/* Password & Confirm Password Fields */}
<div className="flex flex-col md:flex-row gap-2 mt-2">
  {/* Password Field */}
  <div className="relative w-full md:w-1/2">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Create Password"
      className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    {/* Toggle Eye Icon */}
    <span
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </span>
  </div>

  {/* Confirm Password Field */}
  <div className="relative w-full md:w-1/2">
    <input
      type={showConfirmPassword ? "text" : "password"}
      placeholder="Confirm Password"
      className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
    {/* Toggle Eye Icon */}
    <span
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </span>
  </div>
</div>


      {/* Error Messages */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {/* Register Button */}
      <button
        className="w-full mt-4 px-4 py-2 bg-[#F16517] text-white text-sm rounded-md hover:bg-[#d14b10] transition"
        onClick={handleRegister}
      >
        Register
      </button>

      {/* Sign in with Google */}
      {/*<div className="mt-3 text-center">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-black text-sm rounded-md hover:bg-gray-200 transition">
          <img src="\google.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>
      </div> */}
    </div>
  </div>
)}


{/* Job Aspirant Registration Popup */}
{showAspirantRegister && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
    <div className="relative w-96 md:w-[450px] lg:w-[500px] p-4 rounded-lg border border-gray-300 bg-opacity-80 backdrop-blur-md">
      
      {/* Close Buttons */}
      <div className="absolute top-3 left-3 text-white cursor-pointer hover:text-gray-300">
        <ArrowLeft size={20} onClick={() => setShowAspirantRegister(false)} />
      </div>
      <div className="absolute top-3 right-3 text-white cursor-pointer hover:text-gray-300">
        <X size={20} onClick={() => setShowAspirantRegister(false)} />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white text-center">Job Aspirant Registration</h2>

      {/* Email with Verify Email Option */}
      <div className="relative w-full mt-2">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 pr-20 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
          disabled={emailVerified} // Disable input if verified
        />
        <span
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F16517] text-sm cursor-pointer"
          onClick={() => setShowEmailOtpField(true)}
        >
          {emailVerified ? <span className="text-[#F16517]">✔</span> : "Verify Email"}
        </span>
      </div>

      {/* OTP Field for Email */}
      {showEmailOtpField && !emailVerified && (
        <div className="relative w-full mt-2">
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full p-2 pr-20 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
          />
          <span
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F16517] text-sm cursor-pointer"
            onClick={() => {
              setEmailVerified(true);
              setShowEmailOtpField(false);
            }}
          >
            Verify OTP
          </span>
        </div>
      )}

      {/* Phone Number with Verify Option */}
      <div className="relative w-full mt-2">
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full py-2 px-3 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none"
          disabled={numberVerified} // Disable input if verified
        />
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F16517] text-sm cursor-pointer"
          onClick={() => setShowNumberOtpField(true)}
        >
          {numberVerified ? <span className="text-[#F16517]">✔</span> : "Verify PhNo"}
        </span>
      </div>

      {/* OTP Field for Phone Number */}
      {showNumberOtpField && !numberVerified && (
        <div className="relative w-full mt-2 flex items-center">
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full p-2 pr-20 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
          />
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F16517] text-sm cursor-pointer"
            onClick={() => {
              setNumberVerified(true);
              setShowNumberOtpField(false);
            }}
          >
            Verify OTP
          </span>
        </div>
      )}

      {/* Password & Confirm Password Fields */}
      <div className="flex flex-col md:flex-row gap-2 mt-2">
        {/* Password Field */}
        <div className="relative w-full md:w-1/2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Toggle Eye Icon */}
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* Confirm Password Field */}
        <div className="relative w-full md:w-1/2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white text-sm placeholder-gray-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* Toggle Eye Icon */}
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
      </div>

      {/* Error Messages */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {/* Register Button */}
      <button
        className="w-full mt-4 px-4 py-2 bg-[#F16517] text-white text-sm rounded-md hover:bg-[#d14b10] transition"
        onClick={handleRegister}
      >
        Register
      </button>

      {/* Sign in with Google */}
      <div className="mt-3 text-center">
      <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-black text-sm rounded-md hover:bg-gray-200 transition">
          <img src="\google.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
)}




      




    </div>
  );
}
