import React from 'react'
import Image from 'next/image'

const RecentlyPlayed = () => {
  return (
    <div className="flex items-center justify-start px-8 py-2">

      <Image
        src="/assets/images/albums/album3.jpeg"
        alt="Cover"
        width={60}
        height={60}
        className="w-12 h-12 rounded-lg object-cover"
      />
      <div className="flex flex-col items-start justify-center ml-4 w-full gap-1">
        <p className="text-white text-sm ">One More Chance</p>
        <p className="text-mytheme-textLight text-xs font-thin">Timeka Marshall</p>
      </div>
    </div>
  )
}

export default RecentlyPlayed
