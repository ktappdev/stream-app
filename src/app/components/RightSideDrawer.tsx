
"use client"
import React, { useState } from 'react';

import UserButton from './UserButton';
import Link from 'next/link';
import FansAlsoLike from './FansAlsoLike';
import RecentlyPlayed from './RecentlyPlayed';
const RightSideDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-mytheme-darkBackground pt-8">

      <div
        className={`flex flex-col w-64 bg-mytheme-darkBackground text-white '
          }`}
      >
        <div className="p-4 ">
          <div className="pl-4 ">
            <UserButton />
          </div>
          <div className='w-full'>
            <FansAlsoLike />
          </div>
          <div className='flex flex-row pt-12 w-full justify-between'>
            <p className='text-white font-bold text-base'>Recently Played</p>
            <Link href={'/'} className='font-medium text-base text-mytheme-highlight'>See all</Link>
          </div>
        </div>
        <RecentlyPlayed />
        <RecentlyPlayed />
      </div>
    </div>
  );
};

export default RightSideDrawer;
