import React from "react";

const Featured2 = () => {
  return (
    <div className="relative w-full flex flex-wrap justify-center lg:justify-evenly  items-center gap-6">
      
{/* Card 1 */}
<div className="flex sm:w-[20%] md:w-[45%] lg:w-[30%] sm:h-[20vh] lg:h-[30vh] shadow-lg rounded-lg overflow-hidden bg-white relative group">
{/* Left Section (Text) */}
  <div className="w-1/2 p-4 flex flex-col justify-center">
    <h2 className="text-[2.2rem] font-bold text-black">Any day offers</h2>
    <p className="text-sm text-black">NEW PHENOMENON BURGER TASTE</p>
    <h2 className="text-[#00A850] text-[1.5rem] font-bold">$12.90</h2>
  </div>

  {/* Right Section (Background + Image) */}
  <div className="w-[40%] h-[75%] top-[16%] flex justify-center items-center relative">
    {/* Background (Yellow) - Always Visible, Pops Up on Hover */}
    <div 
      className="absolute w-[100%] h-[100%] bg-cover bg-center rounded-full transition-transform duration-300 ease-in-out
                 group-hover:scale-110"
      style={{ backgroundImage: "url('/yellow.jpeg')" }} 
    ></div>

    {/* Image on Top (Half Outside & Original Colors) */}
    <img 
      src="/card1-removebg-preview (1).png" 
      alt="Card 1" 
      className="w-[70%] h-[70%] object-cover relative z-10 translate-x-[-25%]" 
    />
  </div>
</div>


{/* Card 2 */}
<div className="flex w-full md:w-[45%] lg:w-[30%] h-[30vh] min-h-[30vh] shadow-lg rounded-lg overflow-hidden bg-[#01A149] relative group">
{/* Left Section (Text) */}
  <div className="w-1/2 p-4 flex flex-col justify-center">
    <h2 className="text-[2rem] text-white font-bold">Other flavors</h2>
    <p className="text-[1.45rem] text-white">Save room. We made salads.</p>
    <h2 className="text-[#FFC223] text-[1.5rem] font-bold">$12.90</h2>
  </div>

  {/* Right Section (Background + Image) */}
  <div className="w-1/2 h-full flex justify-center items-center relative">
    {/* Circular Background Image - Always Visible & Pops Up on Hover */}
    <div 
      className="absolute w-[70%] h-[70%] bg-cover bg-center rounded-full transition-transform duration-300 ease-in-out
                 group-hover:scale-110"
      style={{ backgroundImage: "url('/marble.jpg')" }} 
    ></div>

    {/* Image on Top */}
    <img 
      src="/Card2.png" 
      alt="Card 2" 
      className="w-[70%] h-[70%] object-cover translate-x-[-20%] relative z-10" 
    />
  </div>
</div>





     {/* Card 3 */}
     <div className="flex w-full md:w-[45%] lg:w-[30%] h-[30vh] min-h-[30vh] shadow-lg rounded-lg overflow-hidden bg-white relative group">

{/*<div className="flex w-[30%] h-[30vh] shadow-lg rounded-lg overflow-hidden bg-white relative group">*/}
  {/* Left Section (Text) */}
  <div className="w-1/2 p-4 flex flex-col justify-center bg-white">
    <h2 className="text-[2.3rem] w-[70%] font-bold">Find a Poco store near you</h2>
    <p className="text-[1.2rem] font-bold mt-5 text-[#FFC223]">CONTACT US</p>
  </div>

  {/* Right Section (Background + Image) */}
  <div className="w-1/2 h-full flex justify-center items-center relative">
    {/* Circular Background Image - Always Visible & Pops Up on Hover */}
    <div 
      className="absolute w-[70%] h-[70%] bg-cover bg-center rounded-full transition-transform duration-300 ease-in-out
                 group-hover:scale-110"
      style={{ backgroundImage: "url('/marble.jpg')" }} 
    ></div>

    {/* Card 3 Image (Placed on Top of Marble Background) */}
    <img 
      src="/Card3.png" 
      alt="Card 3" 
      className="w-[70%] h-[70%] rotate-[20deg] object-cover relative z-10 top-5" 
    />
  </div>
</div>


    </div>
  );
};

export default Featured2;
