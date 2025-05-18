import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building, Users, Award, Target, ChevronRight, Calendar, BookOpen, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 max-sm:pt-4">
          <div className="bg-white rounded-3xl overflow-hidden">
            
            <div className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZoNnptMCAtMzR2Nmg2djZoNnY2aDZ2Nmg2djZoLTZ2Nmg2djZoLTZ2Nmg2djZoLTEydi02aC02di02aC02di02aC02di01Ljl2LTAuMWgtNnYtNmgtNnYtNmgtNnYtNmg2di02aDZ2LTZoNnYtNmg2eiIvPjwvZz48L2c+PC9zdmc+')] animate-gradient-xy"></div>
              
              <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">Our Story</span>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl">Building the Future of <span className="text-gradient">Technology</span></h1>
                  <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                    At Kusray, we're on a mission to help businesses and individuals thrive in the digital age through innovation, education, and strategic guidance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="py-16 px-6 md:px-10">
              <div className="mb-20">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/2">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Our Mission</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Empowering Growth Through Technology</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      Kusray was founded with a clear purpose: to bridge the gap between technological innovation and practical business applications. We believe that the right technology, properly implemented, can transform organizations and create new opportunities for growth.
                    </p>
                    <p className="text-gray-600 mb-6 text-lg">
                      Our mission is to empower businesses and individuals to thrive in the digital age by providing integrated solutions that combine technical expertise, strategic insight, and educational resources.
                    </p>
                  </div>
                  <div className="md:w-1/2 bg-gray-100 rounded-2xl p-8 flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500 p-3 rounded-lg text-white">
                        <Target size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Strategic Vision</h3>
                        <p className="text-gray-600">We help organizations navigate the complex digital landscape with clarity and purpose.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-500 p-3 rounded-lg text-white">
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Knowledge Transfer</h3>
                        <p className="text-gray-600">We believe in sharing expertise to build lasting capabilities within our client organizations.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 p-3 rounded-lg text-white">
                        <Zap size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Technical Excellence</h3>
                        <p className="text-gray-600">We maintain the highest standards in development, design, and implementation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-20">
                <div className="text-center mb-12">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Our Journey</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Kusray Story</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    From our humble beginnings to our current position as an industry leader, we've stayed true to our founding principles of innovation, quality, and client success.
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
                    
                    <div className="space-y-12">
                      <div className="relative">
                        <div className="flex flex-col md:flex-row items-start">
                          <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-8 md:mt-0">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Foundation</h3>
                            <span className="text-blue-600 font-medium mb-3 block">2018</span>
                            <p className="text-gray-600">Kusray was established with a vision to create a technology company that focuses on both development and education.</p>
                          </div>
                          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                          </div>
                          <div className="md:w-1/2 md:pl-12 order-1 md:order-2"></div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex flex-col md:flex-row items-start">
                          <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1"></div>
                          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                          </div>
                          <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mt-8 md:mt-0">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">First Subsidiary Launch</h3>
                            <span className="text-blue-600 font-medium mb-3 block">2020</span>
                            <p className="text-gray-600">Kusray Techlab was launched as our first subsidiary, focusing on digital services and software development.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex flex-col md:flex-row items-start">
                          <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-8 md:mt-0">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Educational Platform</h3>
                            <span className="text-blue-600 font-medium mb-3 block">2021</span>
                            <p className="text-gray-600">Kusray Edulabs was established to provide cutting-edge technical training and educational resources.</p>
                          </div>
                          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                          </div>
                          <div className="md:w-1/2 md:pl-12 order-1 md:order-2"></div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex flex-col md:flex-row items-start">
                          <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1"></div>
                          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                          </div>
                          <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mt-8 md:mt-0">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Today & Beyond</h3>
                            <span className="text-blue-600 font-medium mb-3 block">Present</span>
                            <p className="text-gray-600">Kusray continues to grow, innovate, and expand our offerings while maintaining our commitment to excellence and client success.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-20">
                <div className="text-center mb-12">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Our Values</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Drives Us Forward</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Our core values shape everything we do—from how we build products to how we interact with our clients and each other.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <Award className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence</h3>
                    <p className="text-gray-600">
                      We strive for excellence in everything we do, from the quality of our code to the experiences we create for our clients.
                    </p>
                  </div>
                  
                  <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                      <Users className="text-indigo-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Collaboration</h3>
                    <p className="text-gray-600">
                      We believe in the power of diverse perspectives and collaborative effort to solve complex problems.
                    </p>
                  </div>
                  
                  <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                      <Building className="text-purple-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Integrity</h3>
                    <p className="text-gray-600">
                      We conduct business with transparency and honesty, building trust with our clients, partners, and community.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-10 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                  Join the hundreds of businesses and individuals who have transformed their digital presence with Kusray.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Get in Touch
                  <ChevronRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
            
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage; 