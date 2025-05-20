import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Copyright, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
  const scrollToServices = () => {
    if (window.location.pathname === '/') {
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/', { state: { scrollToServices: true } });
    }
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 pt-8 pb-4 relative">
      <div className="container mx-auto px-6 max-sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white text-xl font-bold">K</span> 
              </div>
              <h1 className="text-2xl font-bold text-white">Kusray</h1>
            </Link>
            <p className="text-gray-400 mt-1 text-sm">Empowering businesses through innovative technology solutions and educational resources.</p>
            
            <div className="mt-4 flex space-x-3">
              <Link to="/coming-soon" className="bg-gray-800 p-2 hover:bg-indigo-600/20 transition-all duration-300 hover:scale-110 transform">
                <Facebook size={18} className="text-indigo-400" />
              </Link>
              <Link to="/coming-soon" className="bg-gray-800 p-2 hover:bg-indigo-600/20 transition-all duration-300 hover:scale-110 transform">
                <Twitter size={18} className="text-indigo-400" />
              </Link>
              <Link to="https://www.instagram.com/kusray_" className="bg-gray-800 p-2 hover:bg-indigo-600/20 transition-all duration-300 hover:scale-110 transform">
                <Instagram size={18} className="text-indigo-400" />
              </Link>
              <Link to="https://www.linkdin.com/company/kusray/" className="bg-gray-800 p-2 hover:bg-indigo-600/20 transition-all duration-300 hover:scale-110 transform">
                <Linkedin size={18} className="text-indigo-400" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-3 text-white relative inline-block">
                Solutions
                <span className="absolute -bottom-1 left-0 w-10 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
              </h2>
              <ul className="space-y-1 mt-3 text-sm">
                <li>
                  <button 
                    onClick={scrollToServices}
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group w-full text-left"
                  >
                    <ChevronRight size={14} className="mr-1 text-indigo-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Training & Development</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={scrollToServices}
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group w-full text-left"
                  >
                    <ChevronRight size={14} className="mr-1 text-indigo-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Digital Services</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={scrollToServices}
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group w-full text-left"
                  >
                    <ChevronRight size={14} className="mr-1 text-indigo-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Tech Consulting</span>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3 text-white relative inline-block">
                Company
                <span className="absolute -bottom-1 left-0 w-10 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
              </h2>
              <ul className="space-y-1 mt-3 text-sm">
                <li>
                  <Link to="/about" className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group">
                    <ChevronRight size={14} className="mr-1 text-indigo-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group">
                    <ChevronRight size={14} className="mr-1 text-indigo-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Our Team</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group">
                    <ChevronRight size={14} className="mr-1 text-indigo-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group">
                    <ChevronRight size={14} className="mr-1 text-indigo-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Careers</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-sm">
            <Copyright size={16} className="mr-1" />
            <span>Kusray {currentYear}. All rights reserved.</span>
          </div>
          <div className="mt-3 md:mt-0">
            <ul className="flex space-x-4 text-xs text-gray-400">
              <li><Link to="/coming-soon" className="hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors duration-300">Terms of Service</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors duration-300">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;