import React from 'react';
import Image from 'next/image';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const FeedCard = () => {
  return (
    <div className='border border-l-0 border-r-0 border-b-0 border-gray-800 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
      <div className='grid grid-cols-12'>
        
        {/* Avatar */}
        <div className='col-span-1 p-1'>
          <Image src="/avatar.jpg" alt="user-img" height={50} width={50} className='rounded-full'/>
        </div>
        
        {/* Content + Buttons */}
        <div className='col-span-11'>
          <h5 className="font-semibold">Sarthak Jain</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, provident!</p>
          
          {/* Action buttons */}
          <div className='flex justify-between text-xl text-gray-600 mt-3 w-[90%]'>
            <BiMessageRounded />
            <FaRetweet />
            <AiOutlineHeart />
            <BiUpload />
          </div>
        </div>

      </div>
    </div>
  )
}


export default FeedCard