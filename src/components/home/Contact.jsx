"use client";

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! (This is a demo)');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col justify-center text-center py-24 px-12"
      style={{ backgroundColor: '#2c1f1f' }}
    >
      {/* Contact Header */}
      <div className="mb-12">
        <h1 
          className="text-5xl mb-5"
          style={{ 
            color: '#ff9900',
            textShadow: '0 0 10px rgba(255, 153, 0, 0.7)'
          }}
        >
          GET IN TOUCH
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
          We'd love to hear from you! Whether you have questions about our menu, want to book a private event, 
          or simply want to share your coffee experience with us, don't hesitate to reach out.
        </p>
      </div>
      
      {/* Contact Container */}
      <div className="bg-white p-12 rounded-2xl shadow-2xl flex flex-wrap justify-between items-stretch max-w-6xl mx-auto">
        {/* Map Container */}
        <div className="flex-1 min-w-[300px] m-4">
          <img 
            src="./image/map.png" 
            alt="Caffio Location Map"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
        
        {/* Form Container */}
        <div className="flex-1 min-w-[300px] m-4">
          <h2 
            className="text-3xl text-center mb-8"
            style={{ color: '#3d271e' }}
          >
            Send Us a Message
          </h2>
          
          <div className="space-y-5">
            <div>
              <label 
                htmlFor="name" 
                className="block mb-2 text-left font-bold text-lg"
                style={{ color: '#3d271e' }}
              >
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full p-4 mb-5 border-2 border-gray-300 rounded-lg text-base bg-gray-100 text-gray-800 transition-all duration-300 focus:outline-none focus:shadow-lg"
                style={{
                  backgroundColor: '#f9f9f9',
                  borderColor: '#e0e0e0'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff9900';
                  e.target.style.boxShadow = '0 0 8px rgba(255, 153, 0, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block mb-2 text-left font-bold text-lg"
                style={{ color: '#3d271e' }}
              >
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                className="w-full p-4 mb-5 border-2 border-gray-300 rounded-lg text-base bg-gray-100 text-gray-800 transition-all duration-300 focus:outline-none focus:shadow-lg"
                style={{
                  backgroundColor: '#f9f9f9',
                  borderColor: '#e0e0e0'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff9900';
                  e.target.style.boxShadow = '0 0 8px rgba(255, 153, 0, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="phone" 
                className="block mb-2 text-left font-bold text-lg"
                style={{ color: '#3d271e' }}
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full p-4 mb-5 border-2 border-gray-300 rounded-lg text-base bg-gray-100 text-gray-800 transition-all duration-300 focus:outline-none focus:shadow-lg"
                style={{
                  backgroundColor: '#f9f9f9',
                  borderColor: '#e0e0e0'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff9900';
                  e.target.style.boxShadow = '0 0 8px rgba(255, 153, 0, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block mb-2 text-left font-bold text-lg"
                style={{ color: '#3d271e' }}
              >
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="Tell us what's on your mind..."
                required
                className="w-full p-4 mb-5 border-2 border-gray-300 rounded-lg text-base bg-gray-100 text-gray-800 transition-all duration-300 focus:outline-none focus:shadow-lg resize-y"
                style={{
                  backgroundColor: '#f9f9f9',
                  borderColor: '#e0e0e0',
                  height: '150px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff9900';
                  e.target.style.boxShadow = '0 0 8px rgba(255, 153, 0, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 px-8 border-none rounded-full cursor-pointer text-lg font-bold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#ff9900' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e68a00';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#ff9900';
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}