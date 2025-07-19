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



            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown color="white" size={20} />
            </div>
        </div>
    );
}

export default Hero;