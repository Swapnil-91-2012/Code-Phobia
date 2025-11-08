import React from 'react';

const AuthSlab: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-28 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center font-times mb-2">Join Castify Today</h2>
      <p className="text-center text-gray-600 font-aparajita mb-6">Sign in or register to start streaming and sharing your content.</p>
      <div className="flex justify-center space-x-4">
        {/* Forms will go here */}
      </div>
    </div>
  );
};

export default AuthSlab;
