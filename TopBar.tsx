import React from 'react';
import logo from "../../assets/logo.jpg";

const TopBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md shadow-md h-20 z-50 flex items-center justify-between px-6">
      <div className="flex items-center">
        <img src={logo} alt="Castify Logo" className="h-12 w-12 mr-4" />
        <div>
          <h1 className="text-3xl font-times font-bold">Castify</h1>
          <p className="text-sm font-aparajita">Stream Your Story RiskFree</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {/* TODO: Add Search Bar */}
        
        {/* --- I'VE ADDED ONCLICK HANDLERS HERE --- */}
        <button 
          className="px-4 py-2 rounded-md bg-violet-500 text-white"
          onClick={() => console.log("Login button clicked!")}
        >
          Login
        </button>
        <button 
          className="px-4 py-2 rounded-md border border-violet-500 text-violet-500"
          onClick={() => console.log("Register button clicked!")}
        >
          Register
        </button>
        {/* -------------------------------------- */}
        
      </div>
    </header>
  );
};

export default TopBar;