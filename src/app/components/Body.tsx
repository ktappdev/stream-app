import React from 'react'
import SearchInput from './SearchInput'
import { IoIosArrowBack } from "react-icons/io";
import NavigatorComponent from './NavigatorComponent';
import FeaturedArtist from './FeaturedArtist';
import ListOfSongsComponent from './ListOfSongsComponent';
import PlayerControl from './PlayerControl';
const Body = () => {
  return (
    <div className='flex flex-col flex-1 text-white bg-mytheme-black pt-8 px-6'>
      {/* NOTE: this is thew top div */}
      <div className='flex flex-row w-full h-16 bg-mytheme-black justify-between items-center '>
        <div className='p-4 bg-mytheme-darkBackground h-[50px] w-[50px]'>
          <IoIosArrowBack />
        </div>
        <NavigatorComponent />
        <SearchInput />
      </div>
      <div className='pt-8'>
        <FeaturedArtist />
      </div>
      <div className='pt-8'>
        <ListOfSongsComponent />
      </div>
      <div className='h-[140px]'>
        <PlayerControl />
      </div>
    </div>
  )
}

export default Body
