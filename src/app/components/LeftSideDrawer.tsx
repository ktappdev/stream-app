"use client"
import React, { useState } from 'react';

import Logo from "./Logo"
const LeftSideDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-mytheme-darkBackground pt-8">
      <button
        className="block md:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
        onClick={toggleDrawer}
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>

      <div
        className={` w-64 bg-mytheme-darkBackground text-white '
          }`}
      >
        <div className="p-4 ">
          <div className="pl-4 ">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideDrawer;
