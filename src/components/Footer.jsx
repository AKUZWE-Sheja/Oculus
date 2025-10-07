import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <footer className="font-playfair bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <p className="text-blue-100 mb-6 text-md leading-relaxed">
              Have questions about our crafts or want to collaborate? We'd love to hear from you. 
              Reach out through any of the channels below.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-blue-100">dignityinwords@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-blue-100">+250 787 014 425</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Rwamagana, Rwanda</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-blue-100 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-blue-100 hover:text-white transition-colors">About Us</Link>
              <Link to="/artisans" className="block text-blue-100 hover:text-white transition-colors">Artisans</Link>
              <a href="#contact" className="block text-blue-100 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <FaPinterestP className='text-lg'/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <FaTwitter className='text-lg'/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <FaInstagram className='text-lg'/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="font-dancing border-t border-blue-500 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-md mb-4 md:mb-0">
            © {new Date().getFullYear()} Oculus. All rights reserved.
          </p>
          <p className="text-blue-200 text-md">
            Weaving tradition into tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;