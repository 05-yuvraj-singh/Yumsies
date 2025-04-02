import React, { useState } from 'react';
import { Link } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(username)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-semibold text-center text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Sign-In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              required
            />
      <Link to='/feed'>

            <button
              type="submit"
              className="w-full px-4 py-2 mt-8 border text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign In
            </button>

      </Link>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <Link to="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
          <Link to="/sign-up" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
