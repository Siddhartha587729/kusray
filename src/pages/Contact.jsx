import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Send, Clock, ChevronRight, X } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    queryType: 'Complaint',
    helpFor: 'Kusray Techlab',
    message: ''
  });
  
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      queryType: 'Complaint',
      helpFor: 'Kusray Techlab',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative animate-fade-in-up">
              <button 
                onClick={closeModal}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Service Unavailable</h3>
                <p className="text-gray-600 mb-6">
                  We apologize, but our email service is not yet enabled. Your message could not be sent at this time. 
                  Please try contacting us directly via phone or email listed on this page.
                </p>
                <button
                  onClick={closeModal}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 max-sm:pt-4">
          <div className="bg-white rounded-3xl overflow-hidden">
            
            <div className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDB6bTAgN2MtMTIuNzAzIDAtMjMgMTAuMjk3LTIzIDIzczEwLjI5NyAyMyAyMyAyMyAyMy0xMC4yOTcgMjMtMjMtMTAuMjk3LTIzLTIzLTIzeiIvPjwvZz48L2c+PC9zdmc+')] animate-gradient-xy"></div>
              
              <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">Get in Touch</span>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl">Contact <span className="text-gradient">Us</span></h1>
                  <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                    We're here to help with any questions or inquiries you may have about our services and solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="py-16 px-6 md:px-10">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Query Type</label>
                      <div className="flex flex-wrap gap-6">
                        {['Complaint', 'Suggestions', 'Collaborations'].map((type) => (
                          <div key={type} className="flex items-center">
                            <input
                              type="radio"
                              id={`queryType-${type}`}
                              name="queryType"
                              value={type}
                              checked={formData.queryType === type}
                              onChange={handleChange}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor={`queryType-${type}`} className="ml-2 text-gray-700">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Need Help for</label>
                      <div className="flex flex-wrap gap-6">
                        {['Kusray Techlab', 'Kusray Edulab', 'Other'].map((type) => (
                          <div key={type} className="flex items-center">
                            <input
                              type="radio"
                              id={`helpFor-${type}`}
                              name="helpFor"
                              value={type}
                              checked={formData.helpFor === type}
                              onChange={handleChange}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor={`helpFor-${type}`} className="ml-2 text-gray-700">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                    >
                      Send Message
                      <Send size={18} className="ml-2" />
                    </button>
                  </form>
                </div>
                
                <div className="lg:w-1/3 bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mt-1 bg-indigo-100 p-2 rounded-lg">
                        <MapPin className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Our Office Location</h4>
                        <p className="text-gray-600 mt-1">
                          C 267, Ground Floor, Pandav Nagar, Near Aksh Cardham Metro Station, New Delhi 110092
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 bg-indigo-100 p-2 rounded-lg">
                        <Mail className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Email Address</h4>
                        <p className="text-gray-600 mt-1">
                          <a href="mailto:reachus@kusray.com" className="hover:text-indigo-600 transition-colors">
                            reachus@kusray.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 bg-indigo-100 p-2 rounded-lg">
                        <Phone className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Phone Number</h4>
                        <p className="text-gray-600 mt-1">
                          <a href="tel:+918249482933" className="hover:text-indigo-600 transition-colors">
                            +91 8249482933
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 bg-indigo-100 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Working Hours</h4>
                        <p className="text-gray-600 mt-1">
                          Monday - Friday: 9AM - 6PM<br />
                          Saturday: 10AM - 4PM
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="bg-indigo-50 p-2.5 rounded-lg hover:bg-indigo-100 transition-colors">
                        <Facebook size={20} className="text-indigo-600" />
                      </a>
                      <a href="#" className="bg-indigo-50 p-2.5 rounded-lg hover:bg-indigo-100 transition-colors">
                        <Twitter size={20} className="text-indigo-600" />
                      </a>
                      <a href="#" className="bg-indigo-50 p-2.5 rounded-lg hover:bg-indigo-100 transition-colors">
                        <Instagram size={20} className="text-indigo-600" />
                      </a>
                      <a href="#" className="bg-indigo-50 p-2.5 rounded-lg hover:bg-indigo-100 transition-colors">
                        <Linkedin size={20} className="text-indigo-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Find Us on Map</h3>
                <div className="w-full h-[450px] bg-gray-200 rounded-xl overflow-hidden shadow-md relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3043668316037!2d77.28729911000002!3d28.6458131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3560b4f2dbd%3A0x3ff3add8e93ebaef!2sC-267%2C%20Block%20C%2C%20Pandav%20Nagar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1715111845075!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
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

export default ContactPage; 