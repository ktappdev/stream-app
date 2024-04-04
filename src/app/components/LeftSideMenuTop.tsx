import { RiHome5Line } from "react-icons/ri";
import { IoCompass } from "react-icons/io5";
import { IoMdRadio } from "react-icons/io";
import { RiFolderMusicFill } from "react-icons/ri";
import { FaPodcast } from "react-icons/fa6";
import Link from "next/link";
const LeftSideMenu = () => {
  return (
    <div className="w-full text-mytheme-greyText">
      <div className="flex flex-col gap-6 w-full">
        <Link href="/" className="flex flex-row w-full justify-start items-center text-white text-sm bg-gradient-to-r from-white/5 to-mytheme-darkBackground border-r-2 border-green-500">
          <RiHome5Line className="text-2xl" />
          <div className="flex ml-4">Home</div>
        </Link>
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm">
          <IoCompass className="text-2xl" />
          <div className="flex ml-4">Discover</div>
        </Link>
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm">
          <IoMdRadio className="text-2xl" />
          <div className="flex ml-4">Radio</div>
        </Link>
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm">
          <RiFolderMusicFill className="text-2xl" />
          <div className="flex ml-4">Album</div>
        </Link>
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm">
          <FaPodcast className="text-2xl" />
          <div className="flex ml-4">Podcast</div>
        </Link>
      </div>
    </div>
  );
};

export default LeftSideMenu;
