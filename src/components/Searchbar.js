import React from "react";
import Image from "next/image";
import SearchIcon from "../app/icon-search.svg";
const Searchbar = () => {
  return (
    <div className="bg-[#1F2A48] px-2 py-2 rounded-lg flex items-center space-x-4 mb-6">
      <Image
        src={SearchIcon}
        width={24}
        height={24}
        alt="SearchIcon"
        className="ml-4"
      />
      <input
        type="text"
        placeholder="Search GitHub username..."
        className="w-full bg-transparent outline-none text-[12px] md:text-lg text-white placeholder:text-[--white]"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mr-0 rounded-lg">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
