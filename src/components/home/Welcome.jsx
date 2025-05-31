'use client';

import React, { useState, useEffect } from 'react';

const slides = [
  './image/welcome1.png',
  './image/welcome2.png',
  './image/welcome3.png'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="Home" className="h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-amber-900 to-black">
      
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              transform: `scale(${index === currentSlide ? 1.05 : 1.1}) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          />
        ))}
        
        {/* Multiple Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-amber-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/20 to-black/60" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          
          {/* Animated Logo/Icon */}
          <div className="mb-8 relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">☕</span>
            </div>
            <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-amber-400 rounded-full animate-ping opacity-20" />
          </div>

          {/* Dynamic Title */}
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 relative">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 cursor-default">
              Welcome
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 cursor-default">
              to Caffio
            </span>
            
            {/* Glowing Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-500/20 blur-xl rounded-lg opacity-50" />
          </h1>

          {/* Stylized Subtitle */}
          <div className="relative mb-8">
            <p className="text-2xl md:text-3xl text-amber-100 font-light tracking-wide">
              Where Every Cup Tells a Story
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Premium Beans', 'Artisan Roasted', 'Fresh Daily'].map((feature, index) => (
              <div 
                key={feature}
                className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#Menu"
              className="group relative px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Menu
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            <a
              href="#Gallery"
              className="group px-10 py-4 border-2 border-white/40 text-white font-bold text-xl rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View Gallery
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;