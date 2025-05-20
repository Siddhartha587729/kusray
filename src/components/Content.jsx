import { ArrowBigRight, ArrowRight, BrainCircuit, Settings, Star, Target, HeartHandshake, Layers, Clock, Users, Puzzle, Zap } from "lucide-react";
import illustration from '../assets/illustration.svg';
import { Link } from 'react-router-dom';

const coreValues = [
  {
    title: "Innovation Without Borders",
    description: "We constantly explore emerging technologies and methodologies, breaking through conventional limitations to deliver groundbreaking solutions.",
  },
  {
    title: "Collaborative Excellence",
    description: "We foster powerful partnerships—with clients, within our team, and across our subsidiaries—creating stronger outcomes through diverse perspectives.",
  },
  {
    title: "Client-Centered Focus",
    description: "Your success drives our decisions. We align our expertise and resources with your objectives, ensuring measurable impact on your business goals.",
  },
  {
    title: "Agile Adaptation",
    description: "We thrive in changing environments, quickly pivoting strategies and approaches to capture new opportunities in the digital landscape.",
  },
  {
    title: "Quality Without Compromise",
    description: "We maintain exacting standards in everything we create, from code and design to strategy and educational content.",
  },
];

const whyUs = [
  {
    icon: <Star className="text-secondary" size={32} />,
    title: "Industry Expertise",
    description: "With years of experience across various industries, we bring specialized knowledge to every project we undertake."
  },
  {
    icon: <Target className="text-secondary" size={32} />,
    title: "End-to-End Solutions",
    description: "From planning to execution, we provide comprehensive services tailored to meet your business requirements and goals."
  },
  {
    icon: <HeartHandshake className="text-secondary" size={32} />,
    title: "Customer Satisfaction",
    description: "We prioritize your satisfaction, ensuring that every solution we deliver exceeds expectations and drives real value."
  }
];

const whyChooseUs = [
  {
    icon: <Layers className="text-secondary" size={32} />,
    title: "Integrated Approach",
    description: "Seamlessly blending tech development, strategy, and education for comprehensive solutions that address every business need."
  },
  {
    icon: <Clock className="text-secondary" size={32} />,
    title: "Future-Focused",
    description: "Building with tomorrow in mind—our solutions evolve alongside technology to ensure lasting competitive advantage."
  },
  {
    icon: <Users className="text-secondary" size={32} />,
    title: "Expertise Across Domains",
    description: "Specialized teams deliver advanced technical implementation and knowledge transfer through our focused subsidiary structure."
  },
  {
    icon: <Puzzle className="text-secondary" size={32} />,
    title: "Customized Solutions",
    description: "Tailored approaches, not one-size-fits-all packages. Your unique challenges deserve purpose-built solutions that fit perfectly."
  }
];

const Content = ({ refProp }) => {

    return (
        <div className="flex flex-col gap-10 mt-20 p-6 bg-white rounded-lg max-sm:gap-6 max-sm:mt-16 max-sm:p-4">
            <div className="flex">
                <div className="flex flex-col items-center p-1 px-2 rounded-3xl font-light text-white bg-slate-900 shadow-lg">
                    <p>Our value</p>
                </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50 p-8 pb-12 shadow-md max-sm:p-6">
                <div className="absolute top-0 right-0 opacity-10">
                    <Zap size={180} className="text-secondary" />
                </div>
                <div className="relative z-10">
                    <span className="text-slate-900 font-bold text-5xl max-sm:text-3xl">Hustle <span className="text-gradient">With</span> <br />Confidence</span>
                    <p className="mt-4 text-gray-700 max-w-xl mb-10">
                        Empowering businesses with innovative solutions that combine technical expertise with strategic insight. We deliver results that matter.
                    </p>
                
                    <div className="flex flex-col items-center gap-8 max-sm:gap-6">
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {coreValues.slice(0, 3).map((value, index) => (
                                <div
                                    key={index}
                                    className="flex-1 max-w-sm mx-auto max-sm:flex-none max-sm:w-full"
                                >
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white">
                                        <div className="text-slate-800 text-lg font-bold px-6 pt-4">
                                            {value.title}
                                        </div>
                                        <div className="p-6 flex-grow">
                                            <p className="text-gray-700 group-hover:text-white">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
                            {coreValues.slice(3).map((value, index) => (
                                <div
                                    key={index + 3}
                                    className="flex-1 max-w-sm mx-auto max-sm:flex-none max-sm:w-full"
                                >
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white">
                                        <div className="text-slate-800 text-lg font-bold px-6 pt-4">
                                            {value.title}
                                        </div>
                                        <div className="p-6 flex-grow">
                                            <p className="text-gray-700 group-hover:text-white">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 max-sm:mt-12">
              <div className="flex">
                <div className="flex flex-col items-center p-1 px-2 rounded-3xl font-light text-white bg-slate-900 shadow-lg">
                  <p>Why us</p>
                </div>
              </div>
              <div className="mt-6">
                <span className="text-slate-900 font-bold text-5xl max-sm:text-3xl">What Sets Us <span className="text-gradient">Apart</span></span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-sm:mt-6">
                {whyUs.map((item, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="services-section" 
                ref={refProp} 
                className="relative h-[40vh] flex flex-col gap-10 mt-10 bg-slate-800 text-teal-50 p-6 rounded-xl max-sm:gap-6 max-sm:mt-6 max-sm:p-4 max-sm:min-h-[40vh] max-sm:mb-72 scroll-mt-24"
            >
                <div className="flex flex-col gap-3">
                    <span className="text-white font-bold text-5xl max-sm:text-3xl">What <span className="text-gradient">We</span> Do</span>
                    <span className="w-[80%] max-sm:w-full max-sm:text-sm">Kusray operates at the intersection of development, strategy, and education, offering a powerful blend of services to help you build smarter and grow faster.From empowering your digital presence to transforming your skills into success, Kusray is your one-stop platform for growth.
                    </span>
                </div>
                <div className="absolute top-25 left-0 flex flex-col md:flex-row gap-5 max-sm:static max-sm:flex-col max-sm:mt-4">
                    <div className="flex-1 max-w-1/3 mx-auto mt-10 max-sm:max-w-full max-sm:mt-4">
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:bg-gradient">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-20"
                                style={{ backgroundImage: `url(${illustration})`, transform: 'translateX(25px)' }}
                            ></div>

                            <div className="relative flex justify-end items-center px-6 pt-2">
                                <div style={{
                                    clipPath: `polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)`,
                                }} className="h-20 w-20 bg-secondary flex items-center justify-center max-sm:h-16 max-sm:w-16">
                                    <Settings color="white" height={50} width={50} className="max-sm:h-10 max-sm:w-10" />
                                </div>
                            </div>
                            <div className="relative text-slate-800 text-lg font-bold px-6 pt-4">
                                Integrated Digital Services
                            </div>
                            <div className="relative px-6 pt-4 flex-grow">
                                <p className="text-gray-700">
                                    App development, website development, custom software development, digital marketing
                                </p>
                            </div>
                            <div className="relative flex justify-end px-6 py-3 items-center gap-2">
                                <Link to="/coming-soon" className="flex gap-2 p-2 px-4 text-secondary font-semibold rounded-4xl transform transition-transform duration-300 hover:scale-105">
                                    Visit
                                    <div><ArrowRight height={20} width={20} /></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 max-w-1/3 mx-auto mt-10 max-sm:max-w-full max-sm:mt-4">
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:bg-gradient">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-20"
                                style={{ backgroundImage: `url(${illustration})`, transform: 'translateX(25px)' }}
                            ></div>

                            <div className="relative flex justify-end items-center px-6 pt-2">
                                <div style={{
                                    clipPath: `polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)`,
                                }} className="h-20 w-20 bg-secondary flex items-center justify-center max-sm:h-16 max-sm:w-16">
                                    <BrainCircuit color="white" height={50} width={50} className="max-sm:h-10 max-sm:w-10" />
                                </div>
                            </div>
                            <div className="relative text-slate-800 text-lg font-bold px-6 pt-4">
                                Professional and Technical Training
                            </div>
                            <div className="relative px-6 pt-4 flex-grow">
                                <p className="text-gray-700">
                                    Training Programs, Workshops, Educational Resources, Career Development Programs
                                </p>
                            </div>
                            <div className="relative flex justify-end px-6 py-3 items-center gap-2">
                                <Link to="https://edulab.kusray.in" className="flex gap-2 p-2 px-4 text-secondary font-semibold rounded-4xl transform transition-transform duration-300 hover:scale-105">
                                    Visit
                                    <div><ArrowRight height={20} width={20} /></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-60 md:mt-40 max-sm:mt-96">
              <div className="flex">
                <div className="flex flex-col items-center p-1 px-2 rounded-3xl font-light text-white bg-slate-900 shadow-lg">
                  <p>Why choose us</p>
                </div>
              </div>
              <div className="mt-6">
                <span className="text-slate-900 font-bold text-5xl max-sm:text-3xl">Unlock Your <span className="text-gradient">Potential</span></span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-sm:mt-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fixed bottom-6 right-6 z-30 max-sm:right-3 max-sm:bottom-3">
                <div className="bg-white shadow-xl rounded-xl p-4 w-64 max-sm:w-56 border-l-4 border-secondary group transition-all duration-300 hover:shadow-2xl">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-gray-800">Explore Our Subsidiaries</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2 transition-all duration-300 hover:text-secondary">
                                <Link to="/coming-soon" className="flex items-center gap-2 w-full">
                                    <ArrowBigRight size={16} className="text-secondary transition-all duration-300 group-hover:translate-x-1"/>
                                    <span>Kusray Techlab</span>
                                </Link>
                            </div>
                            <div className="flex items-center gap-2 transition-all duration-300 hover:text-secondary">
                                <Link to="/coming-soon" className="flex items-center gap-2 w-full">
                                    <ArrowBigRight size={16} className="text-secondary transition-all duration-300 group-hover:translate-x-1"/>
                                    <span>Kusray Edulab</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;