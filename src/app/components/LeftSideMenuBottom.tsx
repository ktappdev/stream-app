import { MdLibraryMusic } from "react-icons/md";

import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { FaGrinHearts } from "react-icons/fa";
import { IoMdRadio } from "react-icons/io";
import { RiFolderMusicFill } from "react-icons/ri";
import { FaPodcast } from "react-icons/fa6";
import Link from "next/link";
const LeftSideMenuBottom = () => {
  return (
    <div className="w-full text-mytheme-greyText">
      <div className="text-xl font-bold text-white mb-4">My Playlist</div>
      <div className="flex flex-col gap-6 w-full">
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm ">
          <MdPlaylistAddCheckCircle className="text-2xl" />
          <div className="flex ml-4">Hip Hop</div>
        </Link>
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm">
          <MdPlaylistAddCheckCircle className="text-2xl" />
          <div className="flex ml-4">Dancehall</div>
        </Link>
        <Link href="/" className="flex flex-row w-full justify-start items-center text-sm">
          <MdPlaylistAddCheckCircle className="text-2xl" />
          <div className="flex ml-4">Reggae Hits</div>
        </Link>
      </div>
    </div>
  );
};

export default LeftSideMenuBottom;
