import React from 'react';

// interface PlayButtonProps {
//   onClick: () => void;
// }

const PlayButton: React.FC = () => {
  return (
    <button
      // onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-3xl"
    >
      PLAY
    </button>
  );
};

export default PlayButton;
