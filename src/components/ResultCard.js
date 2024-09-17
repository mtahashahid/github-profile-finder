"use client"
import { useState } from "react";
import Image from "next/image";
import Octocat from "../app/octocat.svg";
import LocationIcon from "../app/icon-location.svg";
import CompanyIcon from "../app/icon-company.svg";
import TwitterIcon from "../app/icon-twitter.svg";
import LinkIcon from "../app/icon-website.svg";

const ResultCard = () => {
  const [profile, setProfile] = useState({
    username: "The Octocat",
    handle: "octocat",
    bio: "This profile has no bio",
    repos: 8,
    followers: 3938,
    following: 9,
    location: "San Francisco",
    blog: "https://github.blog",
    twitter: null,
    company: "@github",
    joined: "25 Jan 2011",
  });

  return (
    <>
      {/* Profile Card */}
      <div className="flex flex-col md:flex-row gap-6 bg-[#1F2A48] p-6 md:p-12 rounded-lg">
        <div className="flex-shrink-0">
          <Image
            src={Octocat}
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full"
          />
        </div>

        {/* Adjust this div to take full width */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <div>
              <h2 className="text-xl md:text-2xl text-white font-bold">
                {profile.username}
              </h2>
              <p className="text-[--electric] mt-2">@{profile.handle}</p>
            </div>
            <p className="text-[--lightBg] text-sm md:text-base">
              Joined {profile.joined}
            </p>
          </div>

          <p className="text-[--gray] my-4 md:my-8 text-sm md:text-md">
            {profile.bio}
          </p>

          {/* Stats */}
          <div className="bg-[#141C30] p-4 rounded-lg flex justify-between text-white mb-6 space-x-4 md:space-x-24">
            <div>
              <p className="text-xs md:text-sm">Repos</p>
              <p className="text-lg md:text-xl font-bold">{profile.repos}</p>
            </div>
            <div>
              <p className="text-xs md:text-sm">Followers</p>
              <p className="text-lg md:text-xl font-bold">
                {profile.followers}
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm">Following</p>
              <p className="text-lg md:text-xl font-bold">
                {profile.following}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex flex-col md:flex-row justify-between items-start text-[--gray] mt-4 md:mt-8 space-x-0 md:space-x-16">
            <div>
              <p className="hover:text-white text-sm flex items-center">
                <Image
                  src={LocationIcon}
                  alt="location pin"
                  className="inline-block w-4 mr-2"
                />
                {profile.location}
              </p>
              <p className="mt-4 hover:text-white text-sm flex items-center">
                <Image
                  src={LinkIcon}
                  alt="link"
                  className="inline-block w-4 mr-2"
                />
                <a href={profile.blog} className="hover:text-white">
                  {profile.blog}
                </a>
              </p>
            </div>
            <div className="md:mt-0 mt-6">
              <p className="hover:text-white text-sm flex items-center">
                <Image
                  src={TwitterIcon}
                  alt="twitter"
                  className="inline-block w-4 mr-2"
                />
                {profile.twitter || "Not Available"}
              </p>
              <p className="mt-4 hover:text-white text-sm flex items-center">
                <Image
                  src={CompanyIcon}
                  alt="company"
                  className="inline-block w-4 mr-2"
                />
                {profile.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
