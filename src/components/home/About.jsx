import Image from 'next/image';
import React from 'react';


const About = () => {
  return (
    <section id="About" className="about bg-gradient-to-br from-[#8B4513] to-[#D2691E] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Section */}
          <div className="about-text">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">ABOUT US</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Founded in 2015, Caffio has been serving the finest coffee experiences to our community. We source our beans directly from sustainable farms around the world, ensuring every cup supports both quality and ethical practices.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Our master baristas are passionate about their craft, creating not just beverages, but moments of joy in every cup. Whether you're starting your day or taking a peaceful break, we're here to make it special.
            </p>
          </div>

          {/* Image Section */}
          <div className="about-image relative overflow-hidden rounded-xl shadow-xl">
            <Image src='/image/about.png' alt='about image' height={2000} width={2000} className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;