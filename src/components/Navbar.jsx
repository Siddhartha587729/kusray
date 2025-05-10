import { MoveUpRight } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex gap-2 items-center">
            <img src={logo} alt="" className='h-8'/>
            <h1 className="text-xl font-bold text-slate-700">Kusray</h1>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="/" className="text-gray-500 hover:text-gray-900 hover:border-gray-900 px-3 py-1 border-1 border-gray-400 rounded-4xl text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="/about" className="text-gray-500 hover:text-gray-900 hover:border-gray-900 px-3 py-1 border-1 border-gray-400 rounded-4xl text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="/services" className="text-gray-500 hover:text-gray-900 hover:border-gray-900 px-3 py-1 border-1 border-gray-400 rounded-4xl text-sm font-medium transition-colors duration-200">
                Team
              </a>
              <a href="/contact" className="text-gray-500 hover:text-gray-900 hover:border-gray-900 px-3 py-1 border-1 border-gray-400 rounded-4xl text-sm font-medium transition-colors duration-200">
                Services
              </a>
            </div>
          </div>

          <div>
            <a href="/contact" className=" hidden md:flex items-center gap-1 border text-secondary hover:text-white hover:bg-secondary px-6 py-2 rounded-4xl text-sm font-medium transition-colors duration-200">
              Contact us <div className='bg-secondary rounded-full p-1'><MoveUpRight size={13} color='white'/></div>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
