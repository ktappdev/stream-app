"use client"
import React, { useState } from 'react';

import Logo from "./Logo"
import LeftSideMenu from './LeftSideMenu';
const LeftSideDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-mytheme-darkBackground pt-8">
      <div
        className={` w-64 bg-mytheme-darkBackground text-white '} flex flex-col flex-1`}
      >
        <div className="p-4 flex flex-col flex-1">
          <div className="pl-4 ">
            <Logo />
          </div>
          <div className=' pt-12 pl-4 w-full'>
            <LeftSideMenu />
          </div>
          <div className=' pt-12 pl-4 w-full'>
            <p className='text-white'>My Library</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftSideDrawer;
