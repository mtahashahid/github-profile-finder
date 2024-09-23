"use client";
import Header from "@/components/Header";
import ResultCard from "@/components/ResultCard";
import Searchbar from "@/components/Searchbar";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import Repos from "@/components/Repos";
import { useState } from "react";
export default function Home() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProfile = async (username) => {
    setError(false);
    setProfile(null);
    setIsLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("Profile not found");
      const data = await res.json();
      setProfile(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <div className="flex flex-col max-w-3xl m-auto px-4 py-4">
      <Header />
      <div>
        <Searchbar onSearch={fetchProfile} />
      </div>
      {isLoading && <Loader />}
      <ResultCard profileData={profile} />
      <Repos />
      {error && <Error />}
    </div>
  );
}
