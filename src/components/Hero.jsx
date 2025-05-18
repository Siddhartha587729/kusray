import { ArrowDown, ArrowRight, ChevronDown, Star } from 'lucide-react';
import bg from '../assets/example.jpg';
import { CgArrowTopLeftR } from 'react-icons/cg';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ onScrollClick }) => {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <div 
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${bg})`,
                backgroundAttachment: 'fixed'
            }} 
            className="relative h-[85vh] bg-cover bg-center flex flex-col items-center justify-center text-center rounded-3xl overflow-hidden"
        >
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 animate-gradient-xy"></div>
            
            <div className='flex flex-col items-center justify-center gap-5 z-10 px-4 max-w-full'>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-2">
                    <Star className="text-yellow-300" size={16} />
                    <span className="text-white text-sm font-medium">Tech solutions provider</span>
                </div>
                <h1 className='text-6xl text-white font-bold max-sm:text-3xl leading-tight tracking-tight'>
                    Where <span className="text-gradient">Quality</span> <br/> 
                    Meets <span className="text-gradient">Functionality</span>
                </h1>
                <p className='text-white text-lg text-wrap w-[60%] max-sm:w-[95%] max-sm:text-sm leading-relaxed mt-1 opacity-90'>
                    Kusray is a modern tech-driven startup that empowers businesses and individuals to grow in the digital age. It operates at the intersection of development, strategy, and education — offering a unique blend of services.
                </p>
                <button 
                    onClick={onScrollClick}
                    className="mt-6 bg-white text-slate-900 hover:bg-secondary hover:text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                    Discover More
                    <ChevronDown size={16} />
                </button>
            </div>

            <div className="absolute -bottom-[60px] -right-[10px] w-[280px] h-[280px] z-20 transform rotate-6 hover:rotate-0 transition-all duration-500 max-sm:w-[220px] max-sm:h-[220px] max-sm:-bottom-[50px] max-sm:-right-[5px]">
                <div className="w-full h-full bg-yellow-100 rounded-sm shadow-2xl flex flex-col relative overflow-hidden border-t-4 border-r-4 border-yellow-300">
                    <div className="absolute inset-0 opacity-40" style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")` 
                    }}></div>
                    
                    <div className="flex flex-col items-center justify-center gap-3 h-full p-6 rotate-[-6deg]">
                        <h1 className="text-xl font-bold text-slate-800 text-center max-sm:text-lg">
                            Explore our <span className="text-blue-600 font-extrabold">subsidiaries</span>
                        </h1>
                        <p className="text-sm text-slate-700 text-center max-sm:text-xs">
                            At Kusray, we empower businesses and individuals to thrive in the digital age.
                        </p>
                        
                        <div className="h-0.5 w-full bg-yellow-300 my-2"></div>
                        
                        <div className="flex items-center gap-1 text-sm text-slate-700">
                            <div className="flex -space-x-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white" />
                                ))}
                            </div>
                            <p className="font-medium">3.5K+ Happy Users</p>
                        </div>
                        
                        <Link 
                            to="/coming-soon"
                            className="mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                        >
                            Learn More
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                    
                    <div className="absolute top-[-5px] right-[30%] w-[40%] h-[15px] bg-white bg-opacity-40 transform rotate-[2deg] shadow-sm"></div>
                </div>
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown color="white" size={20} />
            </div>
        </div>
    );
}

export default Hero;