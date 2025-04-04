import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 font-poppins">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <input
            type="text"
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            placeholder="E-Mail"
            required
          />

          <select
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="RND">Rather Not Disclose</option>
          </select>

          <input
            type="text"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            placeholder="Username"
            required
          />

          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            placeholder="Password"
            required
          />
`     <Link to='/email-verification'>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
</Link>`
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Already have an account?</span>{" "}
          <Link to="/sign-in" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
