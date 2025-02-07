import Link from "next/link";
import { RiFacebookFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import { RiCellphoneFill, RiMapPinLine } from 'react-icons/ri';
const Navbar = () => {
  return (
<nav className="bg-black text-white text-[1.3rem] pl-9 p-3 flex justify-between items-center font-custom">
{/* Left Side - Address and Call */}
<div className="flex space-x-6 items-center">
  <RiCellphoneFill className="text-lg" />
  <span>CALL US: +381 65 666 6666</span>
  <RiMapPinLine className="text-lg" />
  <span>71 Madison Ave</span>
</div>
      
{/* Right Side - Social Icons */}
<div className="flex space-x-8 pr-[5%]">
  <Link href="#" className="bg-white text-black  w-5 h-5  rounded-full hover:bg-[#FFC223] flex items-center justify-center">
    <RiFacebookFill size={24} />
  </Link>
  <Link href="#" className="hover:text-[#FFC223]">
    <RiTwitterFill size={24} />
  </Link>
  <Link href="#" className="hover:text-[#FFC223]">
    <RiYoutubeFill size={24} />
  </Link>
  <Link href="#" className="bg-white text-black w-5 h-5 rounded-full hover:bg-[#FFC223] flex items-center justify-center">
    <span className="text-[1.3rem] font-bold">W</span>
  </Link>
</div>


    </nav>
  );
};

export default Navbar;
