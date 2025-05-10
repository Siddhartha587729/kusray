import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-8 pb-3">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0 flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
              <span className="text-white text-xl font-bold">C</span> 
            </div>
            <h1 className="text-xl font-semibold">Kusray</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-lg font-semibold mb-2">Solutions</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Training</a></li>
                <li><a href="#" className="hover:text-white">Digital Services</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Company</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Team</a></li>
                <li><a href="#" className="hover:text-white">Career</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Learn</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Resources</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-white"><Facebook size={24} /></a>
            <a href="#" className="hover:text-white"><Twitter size={24} /></a>
            <a href="#" className="hover:text-white"><Instagram size={24} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={24} /></a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex justify-center items-center border-t border-gray-700 mt-8 pt-4 text-center">
          <Copyright height={20} width={20}/><span>Kusray 2025. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;