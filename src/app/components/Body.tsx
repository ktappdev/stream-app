import React from 'react'
import SearchInput from './SearchInput'
import { IoIosArrowBack } from "react-icons/io";
import NavigatorComponent from './NavigatorComponent';
const Body = () => {
  return (
    <div className='flex flex-col flex-1 text-white bg-mytheme-black pt-8 px-6'>
      <div className='flex flex-row w-full h-16 bg-mytheme-black justify-between items-center '>
        <div className='p-4 bg-mytheme-darkBackground h-[50px] w-[50px]'>
          <IoIosArrowBack />
        </div>
        <NavigatorComponent />
        <SearchInput />
      </div>
    </div>
  )
}

export default Body
