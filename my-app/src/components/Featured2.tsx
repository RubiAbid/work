import React from "react";

const Featured2 = () => {
  return (
    <div className="relative w-full h-[100vh] mt-40 flex justify-evenly items-center">
      
{/* Card 1 */}
<div className="flex w-[30%] h-[30vh] shadow-lg rounded-lg overflow-hidden bg-white relative">
  {/* Left Section (Text) */}
  <div className="w-1/2 p-4 flex flex-col justify-center">
    <h2 className="text-[2.2rem] font-bold text-black">Any day offers</h2>
    <p className="text-sm text-black">NEW PHENOMENON BURGER TASTE</p>
    <h2 className="text-[#00A850] text-[1.5rem] font-bold">$12.90</h2>
  </div>
{/* Right Section (Background + Image) */}
<div className="w-1/2 h-full flex justify-center items-center relative">
  {/* Background (Yellow) with Hover Effect */}
  <div 
    className="absolute w-[100%] h-[100%] bg-cover bg-center rounded-full transition-all duration-300 ease-in-out hover:scale-110 "
    style={{ backgroundImage: "url('/yellow.jpeg')" }} 
  ></div>

  {/* Image on Top (Half Outside & Original Colors) */}
  <img 
    src="/card1-removebg-preview (1).png" 
    alt="Card 1" 
    className="w-[80%] h-[80%] object-cover relative z-10 translate-x-[-20%]" 
  />
</div>
</div>

{/* Card 2 */}
<div className="flex w-[30%] h-[30vh] shadow-lg rounded-lg overflow-hidden bg-[#01A149] relative">
  {/* Left Section (Text) */}
  <div className="w-1/2 p-4 flex flex-col justify-center">
    <h2 className="text-[2rem] w-1/2 text-white font-bold">Other flavors</h2>
    <p className="text-[1.45rem] w-1/2 text-white">Save room. We made salads.</p>
    <h2 className="text-[#FFC223] text-[1.5rem] font-bold">$12.90</h2>
  </div>

  {/* Right Section (Background + Image) */}
  <div className="w-1/2 h-full flex justify-center items-center relative">
    {/* Circular Background Image with Hover & Click Effect */}
    <div 
      className="absolute w-[80%] h-[80%] bg-cover bg-center rounded-full transition-all duration-300 ease-in-out
                 hover:scale-110 active:scale-125" // Scale increases on hover & click
      style={{ 
        backgroundImage: "url('/marble.jpg')", 
      }} 
    ></div>

    {/* Image on Top */}
    <img 
      src="/Card2.png" 
      alt="Card 2" 
      className="w-[80%] h-[80%] object-cover relative z-10 translate-x-[-10%]" 
    />
  </div>
</div>







      {/* Card 3 */}
      <div className="flex w-[30%] min-h-[20vh] shadow-lg rounded-lg overflow-hidden bg-[#01A149]">
        {/* Left Section (Text) */}
        <div className="w-1/2 p-4 flex flex-col justify-center bg-gray-100">
          <h2 className="text-lg font-bold">Card 3</h2>
          <p className="text-sm text-gray-600">This is the description for card 3.</p>
        </div>

        {/* Right Section (Image) */}
        <div className="w-1/2">
          <img src="/Card3.jpeg" alt="Card 3" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  );
};

export default Featured2;
