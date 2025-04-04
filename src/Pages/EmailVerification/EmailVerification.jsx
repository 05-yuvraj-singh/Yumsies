import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function EmailVerification() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <p className="text-sm text-gray-600 text-center break-all">example@email.com</p>

        <div className="flex justify-center flex-wrap gap-2 mt-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              className="w-10 h-10 sm:w-12 sm:h-12 text-lg sm:text-xl text-center border border-indigo-500 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 text-center">
          Enter the 6-digit code sent to your email.
        </p>

        {/* Buttons Section (Responsive Stack on Mobile) */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full">
          <Link to="/feed" className="flex-1">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Verify
            </button>
          </Link>
          <button className="flex-1 w-full px-4 py-2 border border-indigo-500 text-indigo-700 rounded-md hover:bg-indigo-100 transition">
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
}
