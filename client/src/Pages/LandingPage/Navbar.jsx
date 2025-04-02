import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For hamburger menu icons
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F4E9ED] p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Yumsies Logo" className="h-20 w-auto object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/sign-in">
            <button className="px-4 py-2 border text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Sign In
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="px-4 py-2 border text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link to="/sign-in">
            <button className="w-full px-4 py-2 border text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Sign In
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="w-full px-4 py-2 border text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
