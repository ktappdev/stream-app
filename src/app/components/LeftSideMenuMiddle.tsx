import { MdLibraryMusic } from "react-icons/md";

import { BsFillPostcardHeartFill } from "react-icons/bs";
import { FaGrinHearts } from "react-icons/fa";
import { IoMdRadio } from "react-icons/io";
import { RiFolderMusicFill } from "react-icons/ri";
import { FaPodcast } from "react-icons/fa6";
import Link from "next/link";
const LeftSideMenuMiddle = () => {
  return (
    <div className="w-full text-mytheme-greyText">
      <div className="text-xl font-bold text-white mb-4">Library</div>
      <div className="flex flex-col gap-6 w-full">
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm ">
          <MdLibraryMusic className="text-2xl" />
          <div className="flex ml-4">Recently Added</div>
        </Link>
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm">
          <FaGrinHearts className="text-2xl" />
          <div className="flex ml-4">Favourite Songs</div>
        </Link>
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm">
          <BsFillPostcardHeartFill className="text-2xl" />
          <div className="flex ml-4">Favorite Podcasts</div>
        </Link>
      </div>
    </div>
  );
};

export default LeftSideMenuMiddle;
