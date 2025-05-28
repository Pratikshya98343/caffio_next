import React, { useState } from 'react';

const products = [
  {
    name: 'Ethiopian Yirgacheffe Beans - Floral & Citrusy',
    price: 450,
    image: './image/product1.png',
  },
  {
    name: 'Colombian Supremo - Smooth & Balanced',
    price: 525,
    image: './image/product2.png',
  },
  {
    name: 'Sumatra Mandheling - Earthy & Bold',
    price: 575,
    image: './image/product3.png',
  },
  {
    name: 'Guatemalan Antigua - Rich & Velvety',
    price: 475,
    image: './image/product4.png',
  },
  {
    name: 'Brazil Santos - Sweet & Nutty',
    price: 625,
    image: './image/product5.png',
  },
  {
    name: 'Kenyan AA - Bright & Wine-like Acidity',
    price: 600,
    image: './image/product6.png',
  },
  {
    name: 'Costa Rica Tarrazú - Clean & Citrusy',
    price: 500,
    image: './image/product7.png',
  },
  {
    name: 'Honduras Marcala - Sweet & Full-bodied',
    price: 675,
    image: './image/product8.png',
  },
];

export default function ProductSection() {
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, { ...item, id: Date.now() }]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#f8f5f2] to-white min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16 border-b-2 border-b-[#8B4513] pb-4">
          <h2 className="text-4xl font-bold text-[#8B4513]">Products</h2>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">SIGNATURE BEAN COLLECTION</h3>
          <p className="text-gray-600 max-w-2xl">
            Explore our finest selection of whole coffee beans sourced from top regions around the world.
            Perfectly roasted for flavor, aroma, and depth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">{product.name}</h3>
                <div className="text-[#8B4513] font-bold mb-4">NPR {product.price.toFixed(2)}</div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-[#6e3911] transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating coffee beans */}
      {[10, 20, 30, 50, 70, 80].map((left, i) => (
        <div
          key={i}
          className="absolute w-2 h-3 bg-[#8B4513] rounded-full opacity-10 animate-[float_15s_linear_infinite]"
          style={{ left: `${left}%`, animationDelay: `${i * 3}s`, zIndex: 1 }}
        ></div>
      ))}

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-gradient-to-br from-green-600 to-green-400 text-white px-6 py-3 rounded-lg shadow-lg font-semibold z-50 transition-transform duration-300">
          Item added to cart!
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10%, 90% { opacity: 0.1; }
          to {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
