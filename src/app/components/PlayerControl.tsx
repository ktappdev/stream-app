import React from 'react';
import { IoPlaySharp, IoPlayBackSharp, IoPlayForwardSharp } from 'react-icons/io5';

interface PlayerControlProps {
  // Add any necessary props for the component
}

const PlayerControl: React.FC<PlayerControlProps> = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 shadow-xl bg-gradient-to-r from-mytheme-darkBackground via-mytheme-darkBackgroundLighter to-mytheme-darkBackground flex items-center justify-center px-4">

      <div className="flex items-center justify-center w-full gap-4">

        {/* Previous Button */}
        <button className="p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors duration-300">
          <IoPlayBackSharp className="w-4 h-4 text-white" />
        </button>

        {/* Play/Pause Button */}
        <button className="p-4 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition-colors duration-300">
          <IoPlaySharp className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button className="p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors duration-300">
          <IoPlayForwardSharp className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default PlayerControl;
