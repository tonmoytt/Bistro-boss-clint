import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import food from '../../../assets/menu picture/p4.jpg'

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf5] text-gray-800 pt-24 relative mt-28">
      {/* Newsletter Card */}
      <div className="max-w-6xl mx-auto absolute -top-36 md:-top-20 left-0 right-0 z-20 px-6">
        <div className="bg-white rounded-xl border-4 border-orange-400 shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-6">
          <img src={food} alt="newsletter banner" className="w-full h-48 object-cover rounded-lg" />
          <div className="flex flex-col justify-center space-y-4">
            <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2">
            <span className="text-xl uppercase">🍕</span> FOODITEMS <span className="text-sm">🍟 </span>


            </h4>
            <h2 className="text-2xl font-bold">Get Our Every Single Menu Notifications</h2>
            <div className="flex gap-4 text-sm text-gray-600 flex-wrap">
              <span className="flex items-center gap-1"><FaCheckCircle className="text-orange-500" /> Regular Updates</span>
              <span className="flex items-center gap-1"><FaCheckCircle className="text-orange-500" /> Weekly Updates</span>
              <span className="flex items-center gap-1"><FaCheckCircle className="text-orange-500" /> Monthly Updates</span>
            </div>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="border rounded-l px-4 py-2 w-full outline-none" />
              <button className="bg-orange-500 text-white px-6 rounded-r hover:bg-orange-600 transition">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Black Wavy Footer */}
      <div className="bg-gray-900 text-gray-300 pt-60 pb-10 relative z-10">
        {/* Top wave or black border (simulated) */}
        <div className="absolute top-0 left-0 w-full h-6 bg-[#fdfaf5] rounded-b-[50%] z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-6 md:px-10">
          {/* About */}
          <div className="col-span-2 space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-wide cursor-default">Food Zone</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-xs text-gray-500">Made with ❤️ by <span className="text-white font-semibold">Tafsirul Tonmoy</span></p>
            <div className="flex gap-3 mt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Our Menus */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Our Menus</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Chicken Burger', 'Brief Pizza', 'Fresh Vegetable', 'Sea Foods', 'Desserts', 'Cold Drinks', 'Discount'].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['About Us', 'Restaurant', 'Our Chefs', 'Testimonials', 'Blogs', 'FAQs', 'Privacy Policy'].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +44 (0) 9865 124 765</li>
              <li>📞 +44 (0) 941 322 543</li>
              <li>📧 info@yourdomain.com</li>
              <li>🏠 11 Beaufort Court, Cana Wharf, UK E1 08AL</li>
            </ul>
          </div>
        </div>

        {/* Download & Payment */}
        <div className="max-w-7xl mx-auto mt-10 px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-6 text-sm text-gray-400">
            <p>©2025 All rights reserved by <span className="text-white font-bold">Food Zone</span></p>
            <div className="flex gap-3">
              <img src="/icons/paypal.png" alt="paypal" className="w-10" />
              <img src="/icons/visa.png" alt="visa" className="w-10" />
              <img src="/icons/mastercard.png" alt="mastercard" className="w-10" />
              <img src="/icons/discover.png" alt="discover" className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
