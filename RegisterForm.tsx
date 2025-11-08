import React from 'react';

const RegisterForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <h3 className="font-bold text-lg">Register</h3>
      {/* TODO: Add form fields for account_name, email, phone, password */}
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700">Register</button>
    </form>
  );
};

export default RegisterForm;
