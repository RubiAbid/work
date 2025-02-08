'use client';

import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaFacebookF, FaTwitter, FaYoutube, FaWordpress } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-6">
          <hr className="border-gray-700 flex-grow" />
          <Image 
            src="/poco-removebg-preview.png" 
            alt="Poco! logo" 
            width={150} 
            height={50} 
            className="mx-4"
          />
          <hr className="border-gray-700 flex-grow" />
        </div>
        <div className="flex flex-wrap justify-center items-start text-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">ADDRESS</h3>
            <p>570 8th Ave,<br/>New York, NY 10018<br/>United States</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">BOOK A TABLE</h3>
            <p>Dogfood och Sliders foodtruck.<br/>Under Om oss kan ni läsa</p>
            <p className="text-yellow-500 font-bold">(850) 435-4155</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">OPENING HOURS</h3>
            <p>Monday - Friday: <span className="text-yellow-500">8am - 4pm</span><br/>Saturday: <span className="text-yellow-500">9am - 5pm</span></p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-white"><FaFacebookF /></a>
              <a href="#" className="text-white"><FaTwitter /></a>
              <a href="#" className="text-white"><FaYoutube /></a>
              <a href="#" className="text-white"><FaWordpress /></a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="font-bold mb-2">NEWSLETTER</h3>
            <p>Subscribe to the weekly newsletter for all the latest updates</p>
            <div className="flex mt-4">
              <Input className="p-2 w-full" placeholder="Your Email ..." type="email" />
              <Button className="bg-yellow-500 text-black p-2">SUBSCRIBE</Button>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
