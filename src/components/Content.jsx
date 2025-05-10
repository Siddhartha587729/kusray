import { ArrowBigRight, ArrowRight, BrainCircuit, Settings } from "lucide-react";
import illustration from '../assets/illustration.svg';

const Content = () => {
    return (
        <div className="flex flex-col gap-10 mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="flex ">
                <div className="flex flex-col items-center p-1 px-2 rounded-3xl font-light text-white bg-slate-900 shadow-lg ">
                    <p>Our value</p>
                </div>
            </div>
            <div>
                <span className="text-slate-900 font-bold text-5xl">Hustle <span className="text-gradient">With</span> <br />Confidence</span>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1 max-w-1/3 mx-auto mt-10">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:bg-gradient ">
                        <div className="text-slate-800 text-lg font-bold px-6 pt-4">
                            Try Any Product Risk Free
                        </div>
                        <div className="p-6 flex-grow">
                            <p className="text-gray-700">
                                We offer an industry-best 60-day money back guarantee no questions asked.
                                So go 'head and take any of our products for a spin to see if they're a
                                good fit for your business.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 max-w-1/3 mx-auto mt-10">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:bg-gradient">
                        <div className="text-slate-800 text-lg font-bold px-6 pt-4">
                            World Class Customer Support
                        </div>
                        <div className="p-6 flex-grow">
                            <p className="text-gray-700">
                                There's customer support, then there's in going above and beyond to solve issues and keep our community happy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 max-w-1/3 mx-auto mt-10">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:bg-gradient">
                        <div className="text-slate-800 text-lg font-bold px-6 pt-4">
                            Access to Founders & CEOs
                        </div>
                        <div className="p-6 flex-grow">
                            <p className="text-gray-700">
                                An early adopter you have the CEO’s ask your burning questions on any active deal and have them answered by the product founders themselves.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[40vh] flex flex-col gap-10 mt-10 bg-slate-800 text-teal-50 p-6 rounded-xl">
                <div className="flex flex-col gap-3">
                    <span className="text-white font-bold text-5xl">What <span className="text-gradient">We</span> Do</span>
                    <span>Join hands with us to innovate, create, and grow in the digital world. Together, we build solutions that matter.</span>
                </div>
                <div className="absolute top-25 left-0 flex flex-col md:flex-row gap-5">
                    <div className="flex-1 max-w-1/3 mx-auto mt-10">
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:bg-gradient">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-20 "
                                style={{ backgroundImage: `url(${illustration})`,  transform: 'translateX(25px)' }}
                            ></div>

                            <div className="relative flex justify-end items-center px-6 pt-2">
                                <div style={{
                                    clipPath: `polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)`,
                                }} className="h-20 w-20 bg-secondary flex items-center justify-center">
                                    <Settings color="white" height={50} width={50} />
                                </div>
                            </div>
                            <div className="relative text-slate-800 text-lg font-bold px-6 pt-4">
                                Integrated Digital Services
                            </div>
                            <div className="relative px-6 pt-4 flex-grow">
                                <p className="text-gray-700">
                                    App development , website development , custom software development , digital marketing                                </p>
                            </div>
                            <div className="relative flex justify-end px-6 py-3 items-center gap-2">
                                <a href="/deals" className="flex gap-2 p-2 px-4 text-secondary font-semibold rounded-4xl transform transition-transform duration-300 hover:scale-105">
                                    Visit
                                    <div> <ArrowRight height={20} width={20} /> </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 max-w-1/3 mx-auto mt-10">
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:bg-gradient">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-20 "
                                style={{ backgroundImage: `url(${illustration})`,  transform: 'translateX(25px)' }}
                            ></div>
                            <div className="flex justify-end items-center px-6 pt-2">
                                <div style={{
                                    clipPath: `polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)`,
                                }} className="h-20 w-20 bg-secondary flex items-center justify-center">
                                    <BrainCircuit color="white" height={50} width={50} />
                                </div>
                            </div>
                            <div className="text-slate-800 text-lg font-bold px-6 pt-4">
                                Training
                            </div>
                            <div className="px-6 pt-4 flex-grow">
                                <p className="text-gray-700">
                                    But don't sleep on it! Our deals sell out within a couple weeks.                                </p>
                            </div>
                            <div className="flex justify-end px-6 py-3 items-center gap-2">
                                <a href="/deals" className="flex gap-2 p-2 px-4 text-secondary font-semibold rounded-4xl transform transition-transform duration-300 hover:scale-105">
                                    Visit
                                    <div> <ArrowRight height={20} width={20} /> </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-30 flex flex-col justify-between items-center gap-10 p-4 ">
                <div>
                    <span className="text-slate-900 font-bold text-4xl">Featured Deals</span>

                </div>
                <div>
                    <span className="px-30 flex text-wrap text-center text-slate-900 text-2xl">
                        We are a team of passionate individuals who believe in the power of technology to transform lives. Our mission is to empower businesses and individuals with innovative solutions that drive growth and success.
                    </span>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-2 mt-10">
                        <a href="/deals" className="flex gap-2 p-2 px-4 bg-secondary text-white font-semibold rounded-4xl transform transition-transform duration-300 hover:scale-105 shadow-2xl">
                            Browse
                            <div> <ArrowRight /> </div>
                        </a>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Content;