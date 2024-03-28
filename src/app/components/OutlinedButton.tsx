import React from 'react';

interface FollowingButtonProps {
  isFollowing: boolean;
}

const FollowingButton: React.FC<FollowingButtonProps> = ({
  isFollowing,
}) => {
  return (
    <button
      // onClick={onClick}
      className={`${isFollowing
        ? 'bg-gray-500 hover:bg-gray-600'
        : 'bg-green-500 hover:bg-green-600'
        } text-white font-semibold py-2 px-4 rounded-3xl`}
    >
      {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
    </button>
  );
};

export default FollowingButton;
