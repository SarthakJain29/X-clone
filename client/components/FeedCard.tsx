import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Tweet } from "@/gql/graphql";

interface FeedCardProps {
  data: Tweet;
}

const FeedCard = (props) => {
  const { data } = props;
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-800 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        {/* Avatar */}
        <div className="col-span-1 p-1">
          {data.author.profileImageURL && (
            <Image
              className="rounded-full"
              src={data.author.profileImageURL}
              alt="user-img"
              height={50}
              width={50}
              className="rounded-full"
            />
          )}
        </div>

        {/* Content + Buttons */}
        <div className="col-span-11">
          <h5 className="font-semibold">{data.author?.firstName} {data.author?.lastName}</h5>
          <p>
            {data.content}
          </p>

          {/* Action buttons */}
          <div className="flex justify-between text-xl text-gray-600 mt-3 w-[90%]">
            <BiMessageRounded />
            <FaRetweet />
            <AiOutlineHeart />
            <BiUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
