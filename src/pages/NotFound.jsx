import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MoveLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 max-sm:pt-4">
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[70vh]">
              <div className="max-w-3xl w-full text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center justify-center scale-150 opacity-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-auto">
                      <path d="M505.8 295.5c-8-13.9-19.6-24.4-33.8-30.4l-62.2-26.4c14.8-22.8 22.2-48.8 22.2-75.8c0-28.1-8.3-54.3-22.5-76.4C369.8 32.7 313.3 0 256 0s-113.8 32.7-153.5 86.6C88.3 108.6 80 134.9 80 163c0 27 7.4 53 22.2 75.8l-62.2 26.4c-14.2 6-25.8 16.5-33.8 30.4s-12.2 30.7-10.5 47.5l9.8 96.9C7.6 457.9 21.1 472 37.9 472H144v24c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V472H474.1c16.8 0 30.3-14.1 32.4-31.9l9.8-96.9c1.6-16.8-2.5-33.6-10.5-47.5zM256 48c37.5 0 72.6 17.2 98.6 45.2c74.5 80.8 21.5 186.6-98.6 186.6s-173-105.8-98.6-186.6C183.5 65.2 218.5 48 256 48zM144 288h53c37 47.4 81 48 115 48c37 0 78.9-1.6 115-48h53l-53.9 144H197.9L144 288z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Sorry, we couldn't find the page you're looking for. It might have been moved, 
                  deleted, or perhaps never existed.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    to="/" 
                    className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <Home className="mr-2" size={18} />
                    Back to Home
                  </Link>
                  <button 
                    onClick={() => window.history.back()} 
                    className="flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300"
                  >
                    <MoveLeft className="mr-2" size={18} />
                    Go Back
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage; 