"use client";
import Image from "next/image";
import Octocat from "../app/octocat.svg";
import LocationIcon from "../app/icon-location.svg";
import CompanyIcon from "../app/icon-company.svg";
import TwitterIcon from "../app/icon-twitter.svg";
import LinkIcon from "../app/icon-website.svg";
import formatDate from "@/services/DateFormat";

const ResultCard = ({ profileData }) => {
  if (!profileData) return; // Don't render anything if there is no profile

  return (
    <>
      {profileData && (
        <div className="flex flex-col md:flex-row gap-6 bg-[#1F2A48] p-6 md:p-12 rounded-lg">
          <div className="flex-shrink-0">
            <Image
              width={200}
              height={200}
              src={profileData.avatar_url || Octocat}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
            />
          </div>

          {/* Adjust this div to take full width */}
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h2 className="text-xl md:text-2xl text-white font-bold">
                  {profileData.name}
                </h2>
                <p className="text-[--electric] mt-2">@{profileData.login}</p>
              </div>
              <p className="text-[--lightBg] text-sm md:text-base">
                Joined {formatDate(profileData.created_at)}
              </p>
            </div>

            <p className="text-[--gray] my-4 md:my-8 text-sm md:text-md">
              {profileData.bio}
            </p>

            {/* Stats */}
            <div className="bg-[#141C30] p-4 rounded-lg flex justify-start items-start text-white mb-6 space-x-4 md:space-x-24">
              <div>
                <p className="text-xs md:text-sm">Repos</p>
                <p className="text-lg md:text-xl font-bold">
                  {profileData.public_repos}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-sm">Followers</p>
                <p className="text-lg md:text-xl font-bold">
                  {profileData.followers}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-sm">Following</p>
                <p className="text-lg md:text-xl font-bold">
                  {profileData.following}
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col md:flex-row justify-start items-start text-[--gray] mt-4 md:mt-8 space-x-0 md:space-x-16">
              <div>
                <p className="hover:text-white text-sm flex items-center">
                  <Image
                    src={LocationIcon}
                    alt="location pin"
                    className="inline-block w-4 mr-4"
                  />
                  {profileData.location || "Not available"}
                </p>
                <p className="mt-4 hover:text-white text-sm flex items-center">
                  <Image
                    src={LinkIcon}
                    alt="link"
                    className="inline-block w-4 mr-4"
                  />
                  <a href={profileData.blog} className="hover:text-white">
                    {profileData.blog || "Link not available"}
                  </a>
                </p>
              </div>
              <div className="md:mt-0 mt-6">
                <p className="hover:text-white text-sm flex items-center">
                  <Image
                    src={TwitterIcon}
                    alt="twitter"
                    className="inline-block w-4 mr-4"
                  />
                  {profileData.twitter_username || "Not Available"}
                </p>
                <p className="mt-4 hover:text-white text-sm flex items-center">
                  <Image
                    src={CompanyIcon}
                    alt="company"
                    className="inline-block w-4 mr-4"
                  />
                  {profileData.company || "Not Available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultCard;
