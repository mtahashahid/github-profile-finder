import React from "react";
import notFound from "../app/notFound.svg";
import Image from "next/image";
const Error = () => {
  return (
    <p
      className="bg-gradient-to-r from-red-300 via-red-200 to-red-300 border border-red-400 text-red-700 px-6 py-4 text-center rounded-lg shadow-md flex items-center justify-center space-x-2"
      role="alert"
    >
      <Image src={notFound} width={24} alt="notFound" />
      <span className="text-lg font-semibold">Profile not found</span>
    </p>
  );
};

export default Error;
