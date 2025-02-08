"use client"
import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Importing star icon

const Populardishes = () => {
  const [clickedCard, setClickedCard] = useState<number | null>(null);

  // Sample Product Data
  const products = [
    { id: 1, name: "Plain Tea", price: "$9.99", img: "/drink2.png", desc: "Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental…" },
    { id: 2, name: "Penne funghi Chicken", price: "$12.49", img: "/pasta2.png", desc: "A mighty meaty double helping of all the reasons you love our burger." },
    { id: 3, name: "Pepperoni Calzone", price: "$7.99", img: "/pizza2.png", desc: "Piled with shrimp, calamari, clams, mussels, surimi and stretchy mozzarella, seasoned with tangy lemon pepper." },
    { id: 4, name: "Trio Cafe", price: "$10.99", img: "/coffee2.png", desc: "Trio Cafe is Family owned establishment located in Boston Waterfront next to World Trade Center." },
    { id: 5, name: "Plain Tea", price: "$9.99", img: "/drink2.png", desc: "Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental…" },
    { id: 6, name: "Penne funghi Chicken", price: "$12.49", img: "/pasta2.png", desc: "A mighty meaty double helping of all the reasons you love our burger." },
    { id: 7, name: "Pepperoni Calzone", price: "$7.99", img: "/pizza2.png", desc: "Piled with shrimp, calamari, clams, mussels, surimi and stretchy mozzarella, seasoned with tangy lemon pepper." },
    { id: 8, name: "Trio Cafe", price: "$10.99", img: "/coffee2.png", desc: "Trio Cafe is Family owned establishment located in Boston Waterfront next to World Trade Center." },
  ];

  return (
    <div className="text-start p-8">
      {/* Heading */}
      <h1 className="text-[4rem] font-bold mb-6">Popular Dishes</h1>

      {/* Button Group */}
      <div className="flex justify-start gap-6 mb-12">
        {["PIZZA", "SUSHI", "SALADS", "BURGER", "DESSERTS"].map((dish) => (
          <button
            key={dish}
            className="px-20 py-10 text-2xl font-semibold text-black border-2 border-[#EDEDED] rounded-[50px] transition-all duration-300 hover:bg-[#FFC223]"
          >
            {dish}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-4 gap-12 rounded-[40px] p-6 bg-white">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg border-2 border-[#E5E5E5] rounded-[40px] overflow-hidden p-6 h-[700px] flex flex-col group cursor-pointer"
            onClick={() => setClickedCard(clickedCard === product.id ? null : product.id)}
          >
            {/* Image Container with Click and Hover Effects */}
            <div className="relative flex justify-center items-end">
              {/* Background Box */}
              <div
                className={`absolute bottom-0 w-[90%] rounded-[50px] transition-all duration-500 
                ${clickedCard === product.id ? "bg-[#FFC223] h-full" : "bg-[#FFF9EA] h-[60%]"} 
                group-hover:bg-[#FFC223] group-hover:h-full`}
              ></div>

              {/* Image */}
              <img
                src={product.img}
                alt={product.name}
                className="relative w-[65%] h-[330px] object-cover rounded-[40px] z-10"
              />
            </div>

            {/* Star Rating */}
            <div className="flex mt-2 text-yellow-500 text-3xl">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Product Info - Left Aligned */}
            <div className="text-left mt-2">
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <p className="text-xl text-gray-600">{product.desc}</p>
              <h3 className="text-2xl font-semibold text-[#FFC223] mt-2">{product.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populardishes;
