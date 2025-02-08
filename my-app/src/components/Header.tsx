import React from 'react';
import { Search, User, ShoppingCart, HeartIcon } from 'lucide-react'; // Import icons

const Header = () => {
  return (
    <div>
      <header className="bg-white p-4 shadow-md w-[100vw] h-[16vh]">
        <div className="flex items-center">
          {/* Logo on the Left */}
          <div className="text-xl font-bold mr-9 pl-20 pt-10">
            <img src="/poco.png" alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Navigation + Image + Call Info */}
          <div className="flex items-center pt-11 space-x-8">
            {/* Navigation Buttons */}
            <nav className="flex space-x-16 text-[1.5rem] font-bold pl-20">
              <button className="text-[#1E1D23] hover:text-[#FFC223]">Home</button>
              <button className="text-[#1E1D23] hover:text-[#FFC223]">Menu</button>
              <button className="text-[#1E1D23] hover:text-[#FFC223]">About</button>
              <button className="text-[#1E1D23] hover:text-[#FFC223]">Shop</button>
              <button className="text-[#1E1D23] hover:text-[#FFC223]">Blog</button>
              <button className="text-[#1E1D23] hover:text-[#FFC223]">Page</button>
              <button className="text-[#1E1D23] hover:text-[#FFC223]">Contact</button>
            </nav>

            {/* Delivery Image */}
            <img 
              src="data:image/png;base64,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"

              alt="Delivery" 
              className="h-[5vh] w-auto pl-12"
            />

            {/* Call & Order Info */}
            <div className="flex flex-col text-[#1E1D23] text-[1.6rem] font-bold text-lg pl-12">
              <span>Call and Order in</span>
              <span className="text-[#FFC223]">+1 718-904-4450</span>
            </div>
          </div>

          {/* Icons on the Right Side */}
          <div className="flex space-x-10 ml-auto pr-20 pt-8">
            <button className="p-3 border border-gray-400 rounded-full hover:bg-[#FFC223]">
              <Search className="w-7 h-7 text-[#1E1D23]" />
            </button>
            <button className="p-3 border border-gray-400 rounded-full hover:bg-[#FFC223]">
              <User className="w-7 h-7 text-[#1E1D23]" />
            </button>
            <button className="p-3 border border-gray-400 rounded-full hover:bg-[#FFC223]">
              <HeartIcon className="w-7 h-7 text-[#1E1D23] fill-[#1E1D23]" />
            </button>
            <button className="p-3 border border-gray-400 rounded-full hover:bg-[#FFC223]">
              <ShoppingCart className="w-7 h-7 text-[#1E1D23]" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;