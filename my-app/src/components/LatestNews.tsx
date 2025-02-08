"use client"
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LatestNews = () => {
  const blogData = [
    {
      image: "blog1.jpg",
      category: "Technology",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description: "Discover the benefits of unplugging from digital devices and reclaiming your focus and well-being."
    },
    {
      image: "blog2.jpg",
      category: "uncategorize / August 31, 2020 /post by admin",
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese",
      description: "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac…"
    },
    {
      image: "blog-3.jpg",
      category: "uncategorize / August 31, 2020 /post by admin",
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      description: "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac…"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % blogData.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [isSmallScreen, blogData.length]);

  useEffect(() => {
    if (isMediumScreen) {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % blogData.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [isMediumScreen, blogData.length]);

  return (
    <><section className="text-gray-600 body-font">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4">
          <h1 className="text-4xl font-bold ms-3">Latest news</h1>
          <a href="#" className="flex items-center text-lg text-black mt-4 me-4 sm:mt-0 ">
              See all
              <div className="ml-2 bg-green-500 text-white rounded-full p-2">
                  <i className="fas fa-arrow-right" />
              </div>
          </a>
      </div>
              <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4">
                      {blogData.map((blog, index) => (
                          <div key={index} className={`p-4 md:w-1/2 lg:w-1/3 ${isSmallScreen && index !== activeIndex ? 'hidden' : ''} ${isMediumScreen && index > activeIndex + 1 ? 'hidden' : ''}`}>
                              <div
                                  className="h-full border-2  border-opacity-60 rounded-lg overflow-hidden bg-cover bg-center"
                                  style={{ backgroundImage: "url('background.jpg')" }}
                              >
                                  <img
                                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                                      src={blog.image}
                                      alt="blog" />
                                  <div className="p-6  bg-opacity-80">
                                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                          {blog.category}
                                      </h2>
                                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                          {blog.title}
                                      </h1>
                                      <p className="leading-relaxed mb-3">
                                          {blog.description}
                                      </p>
                                      <div className="flex items-center flex-wrap">
                                          <a className=" inline-flex items-center md:mb-2 lg:mb-0 bg-[#FFC222] text-black px-4 py-2 rounded-md">
                                              Learn More
                                          </a>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section></>
  );
};

export default LatestNews;