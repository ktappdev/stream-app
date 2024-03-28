
import { CiSearch } from "react-icons/ci";
const SearchComponent: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search music, artiste, albums"
        className="rounded-md py-2 px-4 pl-10 h-[50px] text-sm outline-none text-mytheme-greyText bg-mytheme-darkBackground"
      />
      <CiSearch className="absolute left-3 text-white" />
    </div>
  );
};

export default SearchComponent;
