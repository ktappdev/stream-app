
"use client"
import React, { useState } from 'react';

import UserButton from './UserButton';
const RightSideDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-mytheme-darkBackground pt-8">

      <div
        className={`w-64 bg-mytheme-darkBackground text-white '
          }`}
      >
        <div className="p-4 ">
          <div className="pl-4 ">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideDrawer;
