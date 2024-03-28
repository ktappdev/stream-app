import React from 'react'
import Image from 'next/image'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { ImHeadphones } from "react-icons/im";
import GreenButton from './GreenButton';
import OutlinedButton from './OutlinedButton';
const FeaturedArtist = () => {
  return (
    <div className="flex flex-row w-full h-72 p-0 bg-mytheme-black">
      <div className="flex flex-col items-start justify-center w-1/2 ">
        <div className="flex flex-col gap-4 pl-8">
          <div className='flex flex-row gap-2'>
            <RiVerifiedBadgeFill className='text-green-500 text-2xl' />
            <p className='text-mytheme-greyText'>Verified Artist</p>
          </div>
          <p className="text-4xl font-bold text-white">Ruth B</p>
          <div className="flex flex-row gap-2 justify-center items-center">
            <ImHeadphones />
            <p className="text-white">82,736,050</p>
            <p className="text-mytheme-greyText">monthly listeners</p>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <GreenButton />
            <OutlinedButton isFollowing={true} />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src="/assets/images/ruth3.png"
          alt="artiste"
          className="w-full h-full object-cover rounded-md"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default FeaturedArtist
