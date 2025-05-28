'use client';

import React, { useState, useEffect } from 'react';

const slides = [
  './image/welcome1.png',
  './image/welcome2.png',
  './image/welcome3.png'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Home" className="mt-11 relative bg-gradient-to-br from-[#1a0e0a] to-[#8B4513] py-16 md:py-24">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-10 max-w-7x3 mx-auto ">
        {/* Image Container */}
        <div
          className="w-[90%] md:w-[80%] h-[50vh] mx-auto bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slides[currentSlide]})`,
          }}
        />

        {/* Text Overlay */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to Caffio
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">
            Where Every Cup Tells a Story
          </p>
          <a
            href="#Menu"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-[#333] px-6 py-3 rounded-full font-bold text-base shadow-md hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;