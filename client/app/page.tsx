'use client';

import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiUser, BiSearch } from "react-icons/bi";
import { GiSpaceSuit } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import React from "react";
import FeedCard from "./FeedCard";
import { GoogleLogin } from "@react-oauth/google";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle/>
  },
  {
    title: "Explore",
    icon: <BiSearch/>
  },
  {
    title: "Notifications",
    icon: <BsBell/>
  },
  {
    title: "Messages",
    icon: <BsEnvelope/>
  },
  {
    title: "Grok",
    icon: <GiSpaceSuit/>
  },
  {
    title: "Communities",
    icon: <MdGroups/>
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark/>
  },
  {
    title: "Profile",
    icon: <BiUser/>
  },
  {
    title: "More",
    icon: <CiCircleMore/>
  }
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-32">
        <div className="col-span-3 pt-4 px-4">
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 text-xl font-semibold pr-4">
            <ul>
              {sidebarItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit mt-2 cursor-pointer transition-all"
                >
                  <span>{item.icon}</span><span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-white text-gray-900 py-3  text-base rounded-full w-4/5 mt-3 hover:bg-gray-400 cursor-pointer transition-all">Tweet</button>
          </div>
          
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-800 h-screen overflow-scroll hide-scrollbar">
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
        </div>
        <div className="p-5 col-span-3">
          <div className="p-5 bg-slate-700 rounded-lg">
              <h1 className="my-2 text-2xl">New to X?</h1>
              <GoogleLogin onSuccess={(cred) => console.log(cred)}/>
          </div>  
        </div>
      </div>
    </div>
  );
}
