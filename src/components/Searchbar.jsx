"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "../app/icon-search.svg";
import { useUser } from "@/userContext";

const Searchbar = ({ onSearch }) => {
  const { username, setUsername } = useUser(); // Access the context
  const [inputValue, setInputValue] = useState(username || ""); // Local state to control the input

  const handleSearch = () => {
    setUsername(inputValue); // Update context with input value
    onSearch(inputValue); // Trigger the search with the input value
  };

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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update local state
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mr-0 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
