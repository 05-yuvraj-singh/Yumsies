import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function SignUp() {
  const [user, setUser] = useState({}); // {fullname, email, gender, username, password}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-semibold text-center text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              className="w-full px-3 py-2 mt-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-3 py-2 mt-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="E-Mail"
              required
            />
            <select
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
              className="w-full px-3 py-2 mt-8 border border-gray-300 bg-white text-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="M" className="text-gray-900">Male</option>
              <option value="F" className="text-gray-900">Female</option>
              <option value="RND" className="text-gray-900">Rather Not Disclose</option>
            </select>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full px-3 py-2 mt-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              required
            />
            <Link to="/email-verification">

            <button
              type="submit"
              className="w-full px-3 py-2 mt-6 border text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
            </Link>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <Link to="/sign-in" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
