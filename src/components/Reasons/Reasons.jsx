import React from 'react';
// import Reasons1 from '../Reasons/Reasons.json';
import { GrMonitor } from "react-icons/gr";
import { FaArrowCircleDown } from "react-icons/fa";
import { GoTelescopeFill } from "react-icons/go";
import { MdTheaterComedy } from "react-icons/md";


const Reasons = () => {
  const Image_root =[
    {
            "text": "Enjoy on your TV",
            "text2":"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            "img":<GrMonitor/>
    },
    {
            "text": "Download your shows to watch offline",
          "text2":"Save your favourites easily and always have something to watch.",
            "img":<FaArrowCircleDown />
    },
    {
            "text": "Watch everywhere",
          "text2":"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
            "img":<GoTelescopeFill />
    },
    {
              "text": "Create profiles for kids",
            "text2":"Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
            "img":<MdTheaterComedy />
    },

  ]
  return (
    <div className='px-30 pt-10 pb-10'>
      <div className='font-bold text-2xl mb-4'>
        More reasons to join
      </div>

      <div className='flex flex-wrap gap-4'>
        {Image_root.map((reason, index) => (
          <div
            key={index}
            className='mt-2 max-w-[240px] min-h-[320px] rounded-2xl bg-gradient-to-b from-blue-950 to-gray-900 relative'
          >
            <div className='pr-[35px] pl-4 pt-5 text-2xl font-bold text-white leading-7'>
              {reason.text}
            </div>
            <div className='text-gray-300 pl-4 pt-3 pr-[28px] font-medium text-md leading-5'>
              {reason.text2}
            </div>
            <div className='text-5xl right-0 bottom-0 mr-5 mb-5 absolute opacity-55'>
              {reason.img}
            </div>
              
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Reasons;