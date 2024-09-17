import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center mb-6 p-4 md:p-6">
        <h1 className="text-md md:text-xl text-white font-bold">devfinder</h1>
        <button className="text-white text-sm md:text-base">LIGHT 🌞</button>
      </header>
    </div>
  );
};

export default Header;