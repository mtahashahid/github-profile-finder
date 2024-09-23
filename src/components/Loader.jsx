import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
        <p className="mt-4 text-blue-600 font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
