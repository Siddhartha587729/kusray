import { ArrowDown, ArrowRight } from 'lucide-react';
import bg from '../assets/example.jpg';
import { CgArrowTopLeftR } from 'react-icons/cg';
const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="relative h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-center rounded-3xl shadow-lg">
            <div className='flex flex-col items-center justify-center gap-2'>
                <span className='text-6xl text-white font-bold'>Where Quality </span>
                <span className='text-6xl text-white font-bold'> Meets Functionality</span>
                <span className='text-white text-wrap w-[60%]'>Delivering full-stack solutions that are fast, secure, and scalable.
                    From sleek UIs to powerful backends — I bring ideas to life with clean code.</span>
            </div>
            <div className="absolute top-90 left-200 w-80 h-96 rounded-xl drop-shadow-2xl">
                <div
                    style={{
                        clipPath: 'polygon( 0% 40%, 40% 0%, 40% 0%, 100% 0%, 100% 100%, 0% 100%)',

                    }}
                    className="w-80 h-96 bg-white rounded-2xl ">
                    <div className='w-full h-[40%] p-4 rounded-t-2xl flex items-baseline justify-end'>
                        <div className='flex items-center justify-center p-3 bg-secondary rounded-full hover:scale-105 transition-transform duration-300 hover:cursor-pointer'>
                            <a href="/something"> <ArrowRight color='white' size={30} /></a>
                        </div>
                    </div>
                    <div className='w-full h-[60%]  text-slate-600 rounded-b-2xl flex items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-2 h-full'>
                            <div className='flex flex-col items-center justify-center gap-2 rounded-2xl p-4 h-[70%]'>
                                <h1 className='text-2xl font-bold text-slate-900'>Get Started</h1>
                                <p className='text-sm'>Learn, Generate, & Improve yourself with Kusray</p>
                            </div>
                            <div className='h-[30%] text-sm flex flex-col items-center justify-center gap-2'>
                                <div className='h-1 w-[90%] border-t-1'></div>
                                <p>3.5K+ Happy Users And Counting</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;