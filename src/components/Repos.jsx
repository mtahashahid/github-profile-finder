"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "../app/link.svg";
import star from "../app/star.svg";
import fork from "../app/repoFork.svg";
import { useUser } from "@/userContext";

const Repos = () => {
  const { username } = useUser();
  const [repoData, setRepoData] = useState([]);
  const [visibleRepos, setVisibleRepos] = useState(3); // Show 6 repos (2 rows of 3 cards)

  const userRepoUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

  const fetchRepoData = async () => {
    const res = await fetch(userRepoUrl);
    const data = await res.json();
    setRepoData(data);
  };

  useEffect(() => {
    if (username) {
      fetchRepoData();
    }
  }, [username]);

  // Handle "See More" button click
  const handleSeeMore = () => {
    setVisibleRepos((prev) => prev + 3);
  };

  return (
    <div className="flex flex-col gap-3 mt-3">
      {repoData && repoData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-3">
          <h1 className="text-md md:text-3xl text-center text-white font-bold">
            Repos
          </h1>
          {repoData.slice(0, visibleRepos).map((data, index) => (
            <div
              className="flex flex-col text-[--lightBg] justify-between bg-[#1F2A48] rounded-md px-4 lg:px-6 py-8 shadow-md hover:shadow gap-6 duration-300 h-56 sm:h-48 md:h-52 lg:h-48"
              key={index}
            >
              <div className="flex gap-4 justify-between items-center text-xl font-semibold text-[--lightBg]">
                <p>{data?.full_name}</p>
                <a href={data.html_url} target="_blank">
                  <Image src={Link} width={24} alt="link" />
                </a>
              </div>
              <div>
                <p>
                  {data.description?.length > 50
                    ? `${data.description?.substring(0, 40)}...`
                    : data.description}
                </p>
              </div>
              <div className="flex justify-between item-center">
                <div className="flex gap-1 lg:gap-4">
                  {data.language && (
                    <div className="flex items-center gap-[0.1rem] md:gap-2 text-[--lightBg] text-sm">
                      <div
                        style={{
                          backgroundColor: "green",
                          height: "12px",
                          width: "12px",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <p className="text-sm text-[--lightBg]">
                        {data.language}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center gap-[0.1rem] sm:gap-1 text-[--lightBg] text-md">
                    <p>
                      <Image src={star} width={24} alt="stars" />
                    </p>
                    <p>{data.stargazers_count?.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-[0.1rem] sm:gap-1 text-[--lightBg] text-md">
                    <p>
                      <Image src={fork} width={24} alt="forks" />
                    </p>
                    <p>{data.forks_count?.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-[12px] md:text-md text-[--lightBg] font-semibold">
                  {data.size?.toLocaleString()} KB
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
      {visibleRepos < repoData.length && (
        <button
          className="self-center bg-[#1F2A48] text-[--lightBg] py-2 px-4 rounded-md hover:bg-[--lightBg] hover:text-[#1F2A48] transition duration-300"
          onClick={handleSeeMore}
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Repos;
