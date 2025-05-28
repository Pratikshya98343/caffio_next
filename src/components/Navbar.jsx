import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100px] bg-[#271001] flex items-center justify-between px-20 z-[1000]">
      
      <div className="logo w-1/4">
        <img src="image/logo.png" className="h-20 w-20" />
      </div>

      <div className="text-white flex items-center gap-x-6 text-lg font-bold">
  <a href="#Home">Home</a>
  <a href="#About">About</a>
  <a href="#Menu">Menu</a>
  <a href="#product">Product</a>
  <a href="#Gallery">Gallery</a>
  <a href="#contact">Contact</a>
</div>


      <div className="flex items-center gap-5">
        <a href="Profile">
          <FaRegUserCircle className='h-10 w-10 text-white '/>
        </a>
        <a href="Cart">
          <FaShoppingCart className='h-10 w-10 text-white' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
