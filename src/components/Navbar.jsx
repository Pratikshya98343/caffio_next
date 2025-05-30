"use client";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100px] bg-[#271001] flex items-center justify-between px-20 z-[1000]">
      <div className="logo w-1/4">
        <Link href="/">
          <img src="/image/logo.png" className="h-20 w-20" />
        </Link>
      </div>

      <div className="text-white flex items-center gap-x-6 text-lg font-bold">
        <Link href="/">Home</Link>
        <Link href="#About">About</Link>
        <Link href="#Menu">Menu</Link>
        <Link href="#product">Product</Link>
        <Link href="#Gallery">Gallery</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <div className="flex items-center gap-5">
        <Link href="/sign">
          <FaRegUserCircle className="h-10 w-10 text-white " />
        </Link>
        <Link href="Cart">
          <FaShoppingCart className="h-10 w-10 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
