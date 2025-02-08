import { RiFacebookFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import { RiCellphoneFill, RiMapPinLine } from 'react-icons/ri';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaYoutube, FaWordpress } from "react-icons/fa";
const Navbar = () => {
  return (
<nav>
  <div className="bg-black text-white text-sm py-2">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <RiCellphoneFill />
                <span>CALL US: +381 65 666 6666</span>
              </div>
              <div className="flex items-center space-x-1">
                <RiMapPinLine />
                <span>71 Madison Ave</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
              <FaWordpress />
            </div>
          </div>
        </div>


    </nav>
  );
};

export default Navbar;