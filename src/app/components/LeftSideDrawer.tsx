"use client"
import React, { useState } from 'react';

import Logo from "./Logo"
import LeftSideMenuTop from './LeftSideMenuTop';
import LeftSideMenuBottom from './LeftSideMenuBottom';
import LeftSideMenuMiddle from './LeftSideMenuMiddle';
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
            <LeftSideMenuTop />
          </div>
          <div className=' pt-12 pl-4 w-full'>
            <LeftSideMenuMiddle />
          </div>
          <div className=' pt-12 pl-4 w-full'>
            <LeftSideMenuBottom />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftSideDrawer;
