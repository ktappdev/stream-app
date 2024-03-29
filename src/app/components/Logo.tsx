
import { SiYoutubemusic } from "react-icons/si";
const Logo = () => {
  return (
    <div className=' flex flex-0 text-lg font-bold justify-left items-center h-10 bg-[#212121]'>
      <SiYoutubemusic className='text-5xl mr-2' />
      <div className="flex flex-0 flex-col start gap-0 leading-none">
        <p className="text-xl justify-end items-end leading-none">GUYAUDIO</p>
        <div className="flex flex-col items-end text-xs text-mytheme-greyText leading-none">.gy</div>
      </div>
    </div>
  )
}

export default Logo
