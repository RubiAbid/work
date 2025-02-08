'use client';

import { FC, useState, useEffect } from 'react';
// import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'NINA MARGARET',
    role: 'CEO, Apple',
    image: 'https://demo2.pavothemes.com/poco/wp-content/uploads/2020/09/avatar-3.jpg',
    rating: 5,
    feedback: 'Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in Naples.',
  },
  {
    name: 'ROSE',
    role: 'Design',
    image: 'https://demo2.pavothemes.com/poco/wp-content/uploads/2020/09/avatar-3.jpg',
    rating: 5,
    feedback: 'I would be lost without restaurant. I would like to personally thank you for your outstanding product.',
  },
  {
    name: 'CLARA',
    role: 'Design',
    image: 'https://demo2.pavothemes.com/poco/wp-content/uploads/2020/09/avatar-3.jpg',
    rating: 3,
    feedback: "I am completely blown away. I would also like to say thank you to all your staff. It's really wonderful.",
  },
  {
    name: 'JOHN DOE',
    role: 'Developer',
    image: 'https://demo2.pavothemes.com/poco/wp-content/uploads/2020/09/avatar-3.jpg',
    rating: 4,
    feedback: "Great service, highly recommended!",
  },
  {
    name: 'JANE DOE',
    role: 'Manager',
    image: 'https://demo2.pavothemes.com/poco/wp-content/uploads/2020/09/avatar-3.jpg',
    rating: 5,
    feedback: "Excellent experience from start to finish.",
  },
];

const Testimonials: FC = () => {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
        setShowArrows(true);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
        setShowArrows(true);
      } else {
        setSlidesToShow(3);
        setShowArrows(false);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (testimonials.length - slidesToShow + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + (testimonials.length - slidesToShow + 1)) % (testimonials.length - slidesToShow + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [slidesToShow]);

  return (
    <section className="bg-[#F7F2E2] py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What your client says</h2>
      <div className="relative flex items-center justify-center">
      {showArrows && (
          <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}
        <div className="flex gap-6 overflow-hidden max-w-6xl w-full justify-center">
          {testimonials.slice(index, index + slidesToShow).map((testimonial, i) => (
            <Card key={i} className="max-w-lg w-full md:w-1/2 lg:w-1/3 rounded-xl">
              <CardContent className="p-6 rounded-lg">
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex items-center gap-4 w-full">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <span className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} className={j < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} />
                      ))}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-center">{testimonial.feedback}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {showArrows && (
          <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
