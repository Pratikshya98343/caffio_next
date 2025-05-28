
'use client';

import React from 'react';

const menuItems = [
  {
    name: "Classic Espresso Single Shot Premium Blend",
    price: 450,
    image: "./image/menu1.png",
  },
  {
    name: "Cappuccino White Foam Coffee for Everyone",
    price: 525,
    image: "./image/menu2.png",
  },
  {
    name: "Vanilla Latte Smooth Coffee with Premium Milk",
    price: 575,
    image: "./image/menu3.png",
  },
  {
    name: "Americano Light Brown Coffee for Daily Energy",
    price: 475,
    image: "./image/menu4.png",
  },
  {
    name: "Chocolate Mocha Black Coffee Premium Blend",
    price: 625,
    image: "./image/menu5.png",
  },
  {
    name: "Caramel Macchiato Black Coffee with Sweet Touch",
    price: 600,
    image: "./image/menu6.png",
  },
  {
    name: "Cold Brew Brown Coffee for Summer Refreshment",
    price: 500,
    image: "./image/menu7.png",
  },
  {
    name: "Coffee Frappuccino Iced Coffee Special Edition",
    price: 675,
    image: "./image/menu8.png",
  },
  {
    name: "Turkish Coffee Traditional Ground Coffee Premium",
    price: 550,
    image: "./image/menu9.png",
  },
  {
    name: "Affogato Coffee Ice Cream Dessert Special",
    price: 725,
    image: "./image/menu10.png",
  },
  {
    name: "Premium House Blend Dark Roast Coffee",
    price: 650,
    image: "./image/menu11.png",
  },
  {
    name: "Specialty Single Origin Ethiopian Coffee Bean",
    price: 775,
    image: "./image/menu12.png",
  },
];

const addToCart = (name, price) => {
  alert(`Added "${name}" to cart for NPR ${price}`);
};

const Menu = () => {
  return (
    <section id="Menu" className="py-24 bg-gradient-to-br from-[#f8f5f2] to-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-[#8B4513] mb-16 pb-4">
          <h2 className="text-4xl font-bold text-[#333] uppercase tracking-widest">Menu</h2>
        </div>

        {/* Category Info */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-[#8B4513] mb-2">Signature Collection</h3>
          <p className="text-gray-600 text-lg max-w-3xl">
            Discover our premium coffee selection, carefully crafted by our master baristas. Each blend tells a unique story of flavor, aroma, and passion.
          </p>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
              <div className="h-56 bg-gray-100 flex justify-center items-center overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#333] mb-2">{item.name}</h3>
                <div className="text-xl font-bold text-[#8B4513] mb-4">NPR {item.price.toFixed(2)}</div>
                <button
                  onClick={() => addToCart(item.name, item.price)}
                  className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white py-2 rounded-full font-semibold tracking-wide uppercase text-sm shadow-md hover:from-[#A0522D] hover:to-[#CD853F] hover:-translate-y-1 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
