"use client"
import React, { useState } from 'react';

import Logo from "./Logo"
const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
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
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
      >
        <div className="p-4 ">
          <div className="pl-4">
            <Logo />
            {/* <p>This is the left drawer</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
