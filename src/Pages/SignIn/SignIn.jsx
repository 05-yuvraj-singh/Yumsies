import React, { useState } from 'react';
import { Link } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 font-poppins">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            placeholder="Username"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            placeholder="Password"
            required
          />

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link to="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Forgot your password?
          </Link>
          <Link to="/sign-up" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
