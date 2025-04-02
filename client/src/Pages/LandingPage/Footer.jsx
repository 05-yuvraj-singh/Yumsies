import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-[40vh] bg-[#22C55E] text-white font-mono p-6">
      {/* Links Section - Now Centered */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex space-x-20 mb-8">
          <a href="/about" className="text-lg hover:underline">
            About Us
          </a>
          <a href="/contact-us" className="text-lg hover:underline">
            Contact Us
          </a>
          <a href="https://github.com/05-yuvraj-singh/Yumsies2.0" className="text-lg hover:underline">
            View Code
          </a>
        </div>
      </div>

      {/* Copyright Section - Always at the Bottom */}
      <p className="text-sm">
        © {new Date().getFullYear()} Yumsies, Inc. All rights reserved.
      </p>
    </footer>
  );
}
