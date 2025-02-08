'use client';

import React from 'react';
import Image from 'next/image';

const HotMeal = () => {
  return (
    <div
      className="h-[850px] bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "url('/blackbg.jpeg')" }}
    >
      <Image 
        src="/hotmeal.png" 
        alt="Hot Meal" 
        width={1600} 
        height={1600} 
        className="absolute z-10 object-cover object-top h-[100%]"
      />
      <h1 className="absolute top-32 right-[574px]  text-white text-[4rem] font-bold z-20 font-[cursive]">Hot Fresh</h1>
      <h1 className='absolute top-40 right-40 text-[#FFCD01] text-[10rem] font-bold z-20 '>HOTDOG</h1>
      <button className='absolute top-[500px] right-[580px] bg-white text-black px-16 py-6 text-2xl font-bold rounded-lg z-20 transition duration-300 hover:bg-[#FFCD01]'>Order Now</button>

    </div>
  );
};

export default HotMeal;
