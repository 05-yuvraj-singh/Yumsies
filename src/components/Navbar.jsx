import React from "react";
import { Link } from "react-router-dom";
import { Home, Search, Plus, User } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      {/* Top Navbar (Logo always visible) */}
      <nav className="bg-[#F4E9ED] p-4 flex justify-between items-center">
        {/* Logo (Always visible) */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Yumsies Logo" className="h-20 w-auto object-contain" />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-16 text-indigo-700 pr-6">
          <Link to="/feed" className="p-2 rounded-full hover:bg-indigo-100 transition-all duration-200">
            <Home size={26} />
          </Link>
          <Link to="/search" className="p-2 rounded-full hover:bg-indigo-100 transition-all duration-200">
            <Search size={26} />
          </Link>
          <Link to="/post" className="p-2 rounded-full hover:bg-indigo-100 transition-all duration-200">
            <Plus size={26} />
          </Link>
          <Link to="/profile" className="p-2 rounded-full hover:bg-indigo-100 transition-all duration-200">
            <User size={26} />
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#F4E9ED] md:hidden shadow-t z-50">
        <div className="flex justify-around items-center py-3 text-indigo-700">
          <Link to="/feed" className="flex flex-col items-center hover:text-indigo-900">
            <Home size={22} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/search" className="flex flex-col items-center hover:text-indigo-900">
            <Search size={22} />
            <span className="text-xs mt-1">Search</span>
          </Link>
          <Link to="/post" className="flex flex-col items-center hover:text-indigo-900">
            <Plus size={22} />
            <span className="text-xs mt-1">Add</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center hover:text-indigo-900">
            <User size={22} />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
