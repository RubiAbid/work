'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: 'Fast Food',
    heading: 'Meals',
    description: 'NEW PHENOMENON BURGER TASTE',
    price: '$19.90',
    bgColor: 'bg-green-500',
    textColor: 'text-green-500',
    imgSrc:
      'https://storage.googleapis.com/a1aa/image/x4EKqW8-gwQyTd25uMdFf4wdtZlHfpsVpXpa_GJN6x0.jpg',
  },
  {
    title: 'House',
    heading: 'Burgers',
    description: 'NEW PHENOMENON BURGER TASTE',
    price: '$12.90',
    bgColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    imgSrc:
      'https://storage.googleapis.com/a1aa/image/lqAXFhs5bu3uKsE9uc3g2bIwnalpB5XdUxeb2MwpUus.jpg',
  },
  {
    title: 'Hot Fresh',
    heading: 'Salads',
    description: 'NEW PHENOMENON BURGER TASTE',
    price: '$10.90',
    bgColor: 'bg-yellow-500',
    textColor: 'text-yellow-500',
    imgSrc:
      'https://storage.googleapis.com/a1aa/image/Y0oWpqau-DGiD09rdcNoaMAVPCWQ702DLEdqBLGT140.jpg',
  },
];

export default function FastFoodMenu() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex-1 ${item.bgColor} text-white p-8 relative flex flex-col justify-between`}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-pacifico">{item.title}</h2>
            <h1 className="text-6xl font-bold text-yellow-400">{item.heading}</h1>
            <p className="mt-4 text-lg text-justify">{item.description}</p>
            <p className="mt-4 text-3xl font-bold text-yellow-400">{item.price}</p>
            <Button className="mt-6 bg-white text-lg font-bold" variant="outline">
              ORDER NOW
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 h-auto z-0">
            <Image src={item.imgSrc} alt={item.heading} width={300} height={300} className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
}
