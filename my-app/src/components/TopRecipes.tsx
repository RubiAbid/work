import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShoppingBasket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const recipes = [
  {
    name: "Plain Tea",
    category: "Hot Drinks",
    price: "£18.31",
    image: "https://storage.googleapis.com/a1aa/image/2-cXAXTtl76oLiWAknsCdRi4aGy73BH-Ni8v3wdpqWo.jpg",
  },
  {
    name: "Penne Funghi Chicken",
    category: "Pasta",
    price: "£14.40",
    image: "https://storage.googleapis.com/a1aa/image/Et1v4zwJ1JHS8PYRAnBUP6WY5SOWVjNlAkXoxvGOd7o.jpg",
  },
  {
    name: "Pepperoni Calzone",
    category: "Pizza",
    price: "£12.00",
    oldPrice: "£15.80",
    image: "https://storage.googleapis.com/a1aa/image/xJQm1uyR_YtSCf_n6GJTCxD8mt0Fdj4pJ3Nm3vSfkUQ.jpg",
  },
  {
    name: "Trio Cafe",
    category: "Cold Drinks",
    price: "£12.18",
    image: "https://storage.googleapis.com/a1aa/image/u7X3iXJqiZ3X36FVHUBgHuoCZTXkIP0LrfeDOAcQTPc.jpg",
  },
  {
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: "£19.75",
    image: "https://storage.googleapis.com/a1aa/image/WfbEW4hU7aEQI7xd8q5yAggy7YO-Tvld1ajHp32ew7w.jpg",
  },
  {
    name: "Pene Salmone",
    category: "Burgers",
    price: "£10.00",
    oldPrice: "£13.52",
    image: "https://storage.googleapis.com/a1aa/image/8BFeAuHvB5sCaOmWcn6ftvfXoWj6JNtwGpnBwW1_IFc.jpg",
  },
];

export default function TopRecipes() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Top Recipes</h1>
            <a href="#" className="text-green-600 flex items-center">
              See all <ChevronRight className="ml-1" size={18} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipes.map((recipe, index) => (
              <Card key={index} className="bg-yellow-50 flex items-center p-4 rounded-lg">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <CardContent className="flex-1">
                  <h2 className="text-lg font-bold">{recipe.name}</h2>
                  <p className="text-sm text-gray-600">{recipe.category}</p>
                  {recipe.oldPrice && (
                    <p className="text-lg text-gray-600 line-through">{recipe.oldPrice}</p>
                  )}
                  <p className="text-lg text-orange-600">{recipe.price}</p>
                </CardContent>
                <Button className="bg-yellow-500 text-white p-2 rounded-full">
                  <ShoppingBasket size={16} />
                </Button>
              </Card>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-4 lg:mt-0 lg:pl-4">
          <div className="bg-yellow-400 p-6 rounded-lg text-center">
            <h2 className="text-white text-2xl font-bold mb-2 ">Super Delicious</h2>
            <h1 className="text-red-600 text-4xl font-bold mb-4">CHICKEN</h1>
            <p className="text-white text-lg mb-4">CALL US NOW:</p>
            <p className="text-red-600 text-3xl font-bold mb-4">1-800-555-333</p>
            <Image
              src="https://storage.googleapis.com/a1aa/image/1AfH15rRucqbKZY96wqdxVwUsepI39nSjnO7-E1w5s0.jpg"
              alt="Delicious chicken burger with fries and a drink"
              width={300}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
