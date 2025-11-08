import React from 'react';

const OTPInput: React.FC = () => {
  return (
    <div>
      <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP Code</label>
      <input
        type="text"
        name="otp"
        id="otp"
        maxLength={6}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
        placeholder="123456"
      />
      {/* TODO: Implement multi-input OTP field */}
    </div>
  );
};

export default OTPInput;
