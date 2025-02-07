import React from "react";

const JunkFoodGallery = () => {
  const items = [
    { src: "/pic1.jpeg", label: "COMBO" },
    { src: "/pic2.jpeg", label: "KIDS MENUS" },
    { src: "/pic3.jpeg", label: "PIZZA" },
    { src: "/pic4.jpeg", label: "BOX MEALS" },
    { src: "/pic5.jpeg", label: "BURGER" },
    { src: "/pic6.jpeg", label: "CHICKEN" },
    { src: "/pic7.jpeg", label: "SAUCES" },
    { src: "/pic8.jpeg", label: "DRINKS" },
  ];

  return (
    <div className="fixed top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md w-full h-[30vh] flex overflow-x-auto  p-4 justify-evenly items-center">
      {items.map((item, index) => (
        <div key={index} className="relative flex flex-col items-center group">
          {/* Left Sunshine */}
          <img 
            src="/sunshine.png" 
            alt="Sunshine" 
            className="absolute mix-blend-darken left-[-100px] top-1/2 transform -translate-y-1/2 rotate-[-90deg] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 w-[9vw] h-[9vh]"
          />

          {/* Right Sunshine */}
          <img 
            src="/sunshine.png" 
            alt="Sunshine" 
            className="absolute mix-blend-darken right-[-100px] top-1/2 transform -translate-y-1/2 rotate-[80deg] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all w-[9vw] h-[9vh]"
          />

          {/* Main Food Image */}
          <img 
            src={item.src} 
            alt={item.label} 
            className="h-[10vh] w-auto rounded-lg transition-all duration-500 group-hover:scale-105 mix-blend-darken"
          />

  
{/* Label Below Image */}
<span className="text-center text-[1.4rem] font-bold text-gray-800 mt-2 group-hover:text-[#FFC223] transition-colors duration-300">
  {item.label}
</span>
        </div>
      ))}
    </div>
  );
};

export default JunkFoodGallery;
