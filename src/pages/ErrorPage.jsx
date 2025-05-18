import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Home, RefreshCw, HelpCircle } from 'lucide-react';

const ErrorPage = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 max-sm:pt-4">
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[70vh]">
              <div className="max-w-3xl w-full text-center">
                <div className="mb-8">
                  <div className="inline-block p-6 bg-red-100 rounded-full mb-6">
                    <svg className="w-24 h-24 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  We're sorry for the inconvenience. The page encountered an unexpected error.
                  Our team has been notified and is working to fix the issue.
                </p>
                
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8 text-left">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">What you can try:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3 mt-0.5">
                        <RefreshCw size={14} />
                      </span>
                      Refresh the page to see if that resolves the issue
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3 mt-0.5">
                        <Home size={14} />
                      </span>
                      Return to the homepage and try navigating back
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3 mt-0.5">
                        <HelpCircle size={14} />
                      </span>
                      Contact our support team if the problem persists
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    to="/" 
                    className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <Home className="mr-2" size={18} />
                    Back to Home
                  </Link>
                  <button 
                    onClick={refreshPage} 
                    className="flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300"
                  >
                    <RefreshCw className="mr-2" size={18} />
                    Refresh Page
                  </button>
                  <Link 
                    to="/contact" 
                    className="flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  >
                    <HelpCircle className="mr-2" size={18} />
                    Get Help
                  </Link>
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

export default ErrorPage; 