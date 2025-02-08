import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Main Content Section */}
      <div 
        className="relative sm:w-[90%] md:w-[80%] lg:w-[100%] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[130vh] mx-auto flex flex-row items-center bg-cover bg-center rounded-lg shadow-lg p-6" 
        style={{ backgroundImage: "url('/blackbg.jpeg')" }}
      >
        {/* Left Side: Text Content & Button */}
        <div className="w-full md:w-1/2 text-white px-8 flex flex-col gap-4">
          <h1 className="lg:text-[6.4rem] md:text-[4rem] sm:text-[2rem] font-bold leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]">
            <span className="block">UNLIMITED</span>
            <span className="block">
              MEDIUM <span className="text-yellow-400">PIZZA</span>
            </span>
          </h1>

          <h2 className="text-[#00A149] text-[3rem] font-bold">Medium 2-topping<sup>*</sup> pizza</h2>
          <p className="text-[1.7rem]">
            *Additional charge for premium toppings. Minimum of 2 required.
          </p>

          {/* Order Now Button + Price */}
          <div className="flex items-center gap-6">
            <button className="bg-[#FFC223] text-black text-[1.5rem] font-bold px-[7%] py-5 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300">
              Order Now
            </button>
            <span className="text-[#00A149] font-bold text-[3.5rem]">
              $12.99<sup className="text-[#7B7B7B] text-[1.7rem]">$19.99</sup>
            </span>
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="w-full md:w-1/2 lg:w-1/2 h-full flex justify-center items-center pt-11 relative">
          {/* Tomatoes Image (Behind the Pizza, Top Left) */}
          <img 
            src="/tomatoes.png" 
            alt="Tomatoes" 
            className="absolute top-[8%] left-[-40%] w-[30%] md:w-[25%] lg:w-[60%] object-contain z-0"
          />

          {/* Leaf Image (Behind the Pizza, Bottom Left) */}
          <img 
            src="/leaf.png" 
            alt="Leaf" 
            className="absolute bottom-[4%] left-[-7%] w-[25%] md:w-[20%] lg:w-[30%] object-contain z-0"
          />

          {/* Sprinkles Image (Partially Under Pizza) */}
          <img 
            src="/sprinkles.png" 
            alt="Sprinkles" 
            className="absolute top-[5%] left-[50%] transform -translate-x-1/2 w-[60%] md:w-[50%] lg:w-[55%] object-contain z-5"
          />

          {/* Pizza Image (Above Sprinkles, Fully Visible) */}
          <img 
            src="/pizza.png" 
            alt="Pizza" 
            className="w-full h-full object-contain z-10"
          />
        </div>
      </div>

      {/* Menu Button Positioned Half Inside & Half Outside */}
      <div className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2">
        <button className="bg-[#FFC223] text-black text-[1.8rem] font-bold px-[5%] w-[200%] py-4 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300">
          Menus
        </button>
      </div>
    </div>
  );
};

export default HeroSection;