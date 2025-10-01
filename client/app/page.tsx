import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiUser, BiSearch } from "react-icons/bi";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({subsets: ["latin"]});

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
    title: "Bookmarks",
    icon: <BsBookmark/>
  },
  {
    title: "Profile",
    icon: <BiUser/>
  }
]

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-32">
        <div className="col-span-3 pt-8 px-4">
          <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer ">
            <BsTwitter />
          </div>
          <div className="mt-4 text-xl font-semibold pr-4">
            <ul>
              {sidebarItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit mt-3 cursor-pointer"
                >
                  <span>{item.icon}</span><span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-white text-black p-2 text-base rounded-full w-4/5 mt-5">Post</button>
          </div>
          
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-slate-600"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
