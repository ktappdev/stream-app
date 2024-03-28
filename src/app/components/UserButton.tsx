import Image from 'next/image'
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuCrown } from "react-icons/lu";
const UserButton = () => {
  return (
    <div className="flex justify-center items-center bg-mytheme-darkBackground">
      <Image
        src="/assets/images/user.jpeg"
        alt="userButton"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full mr-2 object-cover"
      />
      <div className="flex flex-row justify-center leading-none">
        <div className="flex flex-col">
          <div className="flex flex-col text-white p-0">Ken Taylor</div>
          <div className="flex text-mytheme-greyText p-0 text-sm justify-center items-center gap-1">
            <p>Premium</p>
            <LuCrown className="text-yellow-500" />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <RiArrowDropDownLine className=" cursor-pointer hover:border-white hover:border-2 flex flex-1 justify-center items-center text-mytheme-greyText text-3xl ml-2" />
        </div>
      </div>
    </div >
  )
}

export default UserButton
