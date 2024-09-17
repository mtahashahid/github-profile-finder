"use client"
import Header from "@/components/Header";
import ResultCard from "@/components/ResultCard";
import Searchbar from "@/components/Searchbar";
import { useState } from "react";
export default function Home() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  const fetchProfile = async (username) => {
    setError('');
    setProfile(null);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error('Profile not found');
      const data = await res.json();
      setProfile(data);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex flex-col max-w-3xl m-auto px-4 py-4">
      <Header />
      <div>
        <Searchbar onSearch={fetchProfile} />
      </div>
      <ResultCard profileData={profile} />
    </div>
  );
}
