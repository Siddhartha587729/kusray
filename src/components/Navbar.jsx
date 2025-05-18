import { MoveUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/team') return 'team';
    if (path === '/contact') return 'contact';
    return '';
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveLink('home');
    else if (path === '/about') setActiveLink('about');
    else if (path === '/team') setActiveLink('team');
    else if (path === '/contact') setActiveLink('contact');
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink('services');
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-white/95 backdrop-blur-md shadow-lg" 
          : "py-4 bg-white/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex gap-2 items-center">
            <Link to="/" className="relative overflow-hidden group">
              <img 
                src={logo} 
                alt="Kusray Logo" 
                className='h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-110'
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </Link>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Kusray</span>
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2 font-medium text-slate-600">
              <Link 
                to="/" 
                onClick={() => setActiveLink('home')}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:text-blue-600 relative ${
                  activeLink === 'home' ? 'text-blue-600' : ''
                }`}
              >
                Home
                {activeLink === 'home' && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
              <Link 
                to="/about" 
                onClick={() => setActiveLink('about')}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:text-blue-600 relative ${
                  activeLink === 'about' ? 'text-blue-600' : ''
                }`}
              >
                About
                {activeLink === 'about' && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
              <Link 
                to="/team" 
                onClick={() => setActiveLink('team')}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:text-blue-600 relative ${
                  activeLink === 'team' ? 'text-blue-600' : ''
                }`}
              >
                Team
                {activeLink === 'team' && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault(); 
                  scrollToServices();
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:text-blue-600 relative ${
                  activeLink === 'services' ? 'text-blue-600' : ''
                }`}
              >
                Services
                {activeLink === 'services' && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </a>
            </div>
          </div>

          <div>
            <Link 
              to="/contact" 
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact us 
              <div className='bg-white/20 rounded-full p-1'>
                <MoveUpRight size={13} color='white'/>
              </div>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-200"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden absolute left-0 right-0 top-full px-4 pt-2 pb-4 bg-white shadow-xl rounded-b-xl transition-all duration-300 transform ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="space-y-1">
            <Link 
              to="/" 
              className="flex items-center px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => {
                setActiveLink('home');
                setIsMenuOpen(false);
              }}
            >
              <span className={`w-1 h-6 rounded-full mr-3 transition-colors duration-200 ${activeLink === 'home' ? 'bg-blue-600' : 'bg-transparent'}`}></span>
              Home
            </Link>
            <Link 
              to="/about" 
              className="flex items-center px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => {
                setActiveLink('about');
                setIsMenuOpen(false);
              }}
            >
              <span className={`w-1 h-6 rounded-full mr-3 transition-colors duration-200 ${activeLink === 'about' ? 'bg-blue-600' : 'bg-transparent'}`}></span>
              About
            </Link>
            <Link 
              to="/team" 
              className="flex items-center px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => {
                setActiveLink('team');
                setIsMenuOpen(false);
              }}
            >
              <span className={`w-1 h-6 rounded-full mr-3 transition-colors duration-200 ${activeLink === 'team' ? 'bg-blue-600' : 'bg-transparent'}`}></span>
              Team
            </Link>
            <a 
              href="#" 
              className="flex items-center px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                  scrollToServices();
                } else {
                  window.localStorage.setItem('scrollToServices', 'true');
                  window.location.href = '/';
                }
              }}
            >
              <span className={`w-1 h-6 rounded-full mr-3 transition-colors duration-200 ${activeLink === 'services' ? 'bg-blue-600' : 'bg-transparent'}`}></span>
              Services
            </a>
            <Link 
              to="/contact" 
              className="flex items-center px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => {
                setActiveLink('contact');
                setIsMenuOpen(false);
              }}
            >
              <span className={`w-1 h-6 rounded-full mr-3 transition-colors duration-200 ${activeLink === 'contact' ? 'bg-blue-600' : 'bg-transparent'}`}></span>
              Contact
            </Link>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link
              to="/contact"
              className="block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium text-center hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
