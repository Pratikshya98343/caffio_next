'use client';
import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const CaffioProfileDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [profileData, setProfileData] = useState({
    name: 'Pratikshya Shrestha',
    email: 'shrestha@email.com',
    phone: '9876543210',
    dob: '2004-01-15',
    address: 'Kirtipur, Kathmandu',
    bio: 'Coffee enthusiast and regular customer'
  });

  const [editData, setEditData] = useState(profileData);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      alert('Logging out...');
      // Add logout logic here
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    if (!isEditMode) {
      setEditData(profileData);
    }
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfileData(editData);
    setIsEditMode(false);
    alert('Profile updated successfully!');
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Sidebar */}
      <nav className="w-80 h-full bg-gradient-to-b from-amber-900/95 to-orange-900/95 backdrop-blur-lg p-8 shadow-2xl flex flex-col">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl font-bold drop-shadow-lg">Caffio</h1>
          <p className="text-white/80 text-sm mt-2">Your Coffee Paradise</p>
        </div>

        {/* Navigation Menu */}
        <ul className="flex-1 space-y-2">
          <li>
            <button
              onClick={() => handleNavClick('profile')}
              className={`w-full flex items-center px-6 py-4 text-white rounded-xl transition-all duration-300 ${
                activeSection === 'profile'
                  ? 'bg-white/20 transform translate-x-2'
                  : 'hover:bg-white/10 hover:transform hover:translate-x-2'
              }`}
            >
              <FaUserCircle  className="mr-3" size={20} />
              My Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('settings')}
              className={`w-full flex items-center px-6 py-4 text-white rounded-xl transition-all duration-300 ${
                activeSection === 'settings'
                  ? 'bg-white/20 transform translate-x-2'
                  : 'hover:bg-white/10 hover:transform hover:translate-x-2'
              }`}
            >
              <IoSettings  className="mr-3" size={20} />
              Settings
            </button>
          </li>
        </ul>

        {/* Logout Section */}
        <div className="mt-auto pt-8 border-t border-white/20">
          <button
            onClick={handleLogout}
            className="w-full py-4 px-6 bg-gray-200/80 text-black rounded-xl font-medium hover:bg-gray-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Profile Section */}
        {activeSection === 'profile' && (
          <section className="animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-amber-800 mb-4">My Profile</h1>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-orange-400 mx-auto rounded-full"></div>
            </div>

            {/* Profile Card */}
            <div className="bg-gradient-to-r from-amber-700 to-orange-700 rounded-2xl p-12 mb-8 text-white shadow-2xl relative">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Avatar Section */}
                <div className="flex flex-col items-center mr-8 mb-6 md:mb-0">
                  <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center mb-4 overflow-hidden hover:scale-105 transition-transform duration-300">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <FaFileUpload  size={60} className="text-white/70" />
                    )}
                  </div>
                  <input
                    type="file"
                    id="avatar-upload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => document.getElementById('avatar-upload').click()}
                    className="bg-white/20 border-2 border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    Upload Photo
                  </button>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">{profileData.name}</h2>
                  <p className="text-xl opacity-90 mb-1">{profileData.email}</p>
                  <p className="text-lg opacity-80">{profileData.phone}</p>
                </div>

                {/* Edit Button */}
                <button
                  onClick={toggleEditMode}
                  className="absolute top-4 right-4 bg-white/20 border-2 border-white/30 px-6 py-3 rounded-full text-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 flex items-center"
                >
                  <FiEdit3  className="mr-2" size={18} />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Edit Form */}
            {isEditMode && (
              <div className="bg-white/95 rounded-2xl p-8 shadow-xl animate-fade-in">
                <h3 className="text-2xl font-bold text-amber-800 text-center mb-6">Edit Profile Information</h3>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-600 font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full p-4 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-4 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full p-4 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-2">Date of Birth</label>
                      <input
                        type="date"
                        value={editData.dob}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                        className="w-full p-4 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-2">Address</label>
                      <input
                        type="text"
                        value={editData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full p-4 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors"
                        placeholder="Enter your address"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-2">Bio</label>
                      <textarea
                        value={editData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        rows="3"
                        className="w-full p-4 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors resize-vertical"
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={handleSaveProfile}
                      className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center"
                    >
                      <FaCheck className="mr-2" size={18} />
                      Save Changes
                    </button>
                    <button
                      onClick={toggleEditMode}
                      className="bg-amber-100 text-amber-800 border-2 border-amber-200 px-8 py-3 rounded-lg font-semibold hover:bg-amber-200 transition-colors flex items-center"
                    >
                      <RxCrossCircled   className="mr-2" size={18} />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <section className="animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-amber-800 mb-4">Account Settings</h1>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Change Password Card */}
              <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                  Change Password
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full p-4 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors bg-white/80"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full p-4 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors bg-white/80"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full p-4 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-colors bg-white/80"
                      placeholder="Confirm new password"
                    />
                  </div>
                  <button
                    onClick={() => alert('Password updated!')}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    Update Password
                  </button>
                </div>
              </div>

              {/* Notification Settings Card */}
              <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-amber-800 mb-6">Notification Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="order-updates"
                      defaultChecked
                      className="mr-3 w-4 h-4 text-amber-600 bg-white border-amber-300 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="order-updates" className="text-gray-700 font-medium">
                      Order Status Updates
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="promotions"
                      defaultChecked
                      className="mr-3 w-4 h-4 text-amber-600 bg-white border-amber-300 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="promotions" className="text-gray-700 font-medium">
                      Promotional Offers
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="new-products"
                      className="mr-3 w-4 h-4 text-amber-600 bg-white border-amber-300 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="new-products" className="text-gray-700 font-medium">
                      New Product Announcements
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="sms-notifications"
                      defaultChecked
                      className="mr-3 w-4 h-4 text-amber-600 bg-white border-amber-300 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="sms-notifications" className="text-gray-700 font-medium">
                      SMS Notifications
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="email-marketing"
                      className="mr-3 w-4 h-4 text-amber-600 bg-white border-amber-300 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="email-marketing" className="text-gray-700 font-medium">
                      Email Marketing
                    </label>
                  </div>
                  <button
                    onClick={() => alert('Notifications updated!')}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mt-6"
                  >
                    Update Notifications
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default CaffioProfileDashboard;