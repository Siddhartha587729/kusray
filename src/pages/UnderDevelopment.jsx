import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Home, Bell, Calendar, Wrench, Check, X } from 'lucide-react';

const UnderDevelopmentPage = () => {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    
    setShowNotification(true);
    
    setEmail('');
    
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 animate-fade-in-up">
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md flex items-start max-w-sm">
            <Check className="flex-shrink-0 mr-2 mt-0.5" size={18} />
            <div className="flex-grow">
              <p className="font-medium">Success!</p>
              <p className="text-sm">We'll notify you when this feature launches.</p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-green-500 hover:text-green-700 p-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 max-sm:pt-4">
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[70vh]">
              <div className="max-w-3xl w-full text-center">
                <div className="mb-8 relative">
                  <div className="relative z-10">
                    <div className="inline-block p-6 bg-yellow-100 rounded-full mb-6">
                      <Wrench size={56} className="text-yellow-600" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-50 rounded-full -z-10"></div>
                  
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Under Development</h1>
                  <div className="flex items-center justify-center">
                    <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Coming Soon</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  We're working hard to bring you something amazing. This section is currently under development 
                  and will be available soon. Thank you for your patience!
                </p>
                
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected Launch Timeline</h3>
                  <div className="flex justify-center">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                        <Calendar className="text-indigo-600 mr-3" size={20} />
                        <div className="text-left">
                          <p className="text-sm text-gray-500">Estimated Launch</p>
                          <p className="font-medium text-gray-900">Q2 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Get Notified When We Launch</h3>
                  <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit"
                      className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-4 py-3 rounded-r-lg transition-colors duration-300 flex items-center"
                    >
                      <Bell size={18} className="mr-2" />
                      Notify Me
                    </button>
                  </form>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    to="/" 
                    className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <Home className="mr-2" size={18} />
                    Back to Home
                  </Link>
                  <Link 
                    to="/contact" 
                    className="flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  >
                    Contact Us
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

export default UnderDevelopmentPage; 