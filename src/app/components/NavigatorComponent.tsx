import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const NavigatorComponent = () => {
  return (
    <div className='flex text-sm justify-center items-center gap-2'>
      <p className='text-mytheme-greyText opacity-80'>Home</p>
      <IoIosArrowForward />
      <p className='text-mytheme-greyText'>Popular Artiste</p>

    </div>
  )
}

export default NavigatorComponent
