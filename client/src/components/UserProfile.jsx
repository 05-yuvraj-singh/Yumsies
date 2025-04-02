import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Importing a user icon for avatar

const user = {
  username: "yuvrajsingh05",
  FullName: "Yuvraj Singh",
  Email: "yuvrajsingh532004@gmail.com",
  gender: 'M'
};

function UserProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <FaUserCircle className="w-24 h-24 text-gray-400" />
        </div>
        
        {/* User Info */}
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">{user.FullName}</h2>
            <p className="text-gray-500">@{user.username}</p>
          </div>

          <div className="text-left mt-4">
            <h3 className="font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600">{user.Email}</p>
          </div>

          <div className="text-left mt-4">
            <h3 className="font-semibold text-gray-700">Gender</h3>
            <p className="text-gray-600">{user.gender === 'M' ? 'Male' : user.gender === 'F' ? 'Female' : 'Rather Not Say'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
