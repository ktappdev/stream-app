
import { SiMusicbrainz } from "react-icons/si";
const Logo = () => {
  return (
    <div className=' flex text-lg font-bold justify-left items-center h-10'>
      <SiMusicbrainz className='text-3xl mr-2' />
      <div className="flex flex-0 flex-col justify-start">
        <p className="text-lg justify-start items-start">Musicium</p>
        <p className="flex justify-end items-start text-xs text-['
          #C1C1C1'] mt-0">.com</p>
      </div>
    </div>
  )
}

export default Logo
