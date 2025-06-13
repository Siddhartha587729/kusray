import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Linkedin, Twitter, ChevronRight, Users, Coffee, Code, Brain, Heart } from 'lucide-react';
import useScrollToTop from '../hooks/useScrollToTop';

const teamMembers = [
  {
    id: 1,
    name: 'Anish Sharma',
    role: 'CEO & Founder',
    bio: 'Anish brings over 15 years of experience in technology leadership and startup growth. He founded Kusray with a vision to blend education and technology services.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'CTO',
    bio: 'With a background in AI and cloud architecture, Priya leads our technical strategy and ensures we stay at the cutting edge of technology.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Head of Techlab',
    bio: 'Vikram oversees Kusray Techlab, bringing his expertise in software development and digital transformation to our client projects.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 4,
    name: 'Shreya Patel',
    role: 'Head of Edulabs',
    bio: 'Shreya leads our educational initiatives with her background in EdTech and curriculum development for technical subjects.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 5,
    name: 'Rahul Kapoor',
    role: 'CFO',
    bio: 'Rahul manages our financial operations and strategy, ensuring sustainable growth as we expand our services and reach.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 6,
    name: 'Neha Desai',
    role: 'Creative Director',
    bio: 'Neha leads our design team with her exceptional eye for aesthetics and deep understanding of user experience principles.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

const cultureItems = [
  {
    icon: <Users className="text-blue-500" size={32} />,
    title: "Collaborative Environment",
    description: "We foster a workplace where ideas flow freely, and everyone's voice is heard and valued."
  },
  {
    icon: <Coffee className="text-indigo-500" size={32} />,
    title: "Work-Life Balance",
    description: "We believe in meaningful work and meaningful rest—both are essential for sustainable excellence."
  },
  {
    icon: <Code className="text-purple-500" size={32} />,
    title: "Continuous Learning",
    description: "Our team members are always growing, with dedicated time for exploration and skill development."
  },
  {
    icon: <Brain className="text-pink-500" size={32} />,
    title: "Innovation Focus",
    description: "We encourage creative problem-solving and aren't afraid to challenge conventional approaches."
  },
  {
    icon: <Heart className="text-red-500" size={32} />,
    title: "Social Responsibility",
    description: "We believe technology should be a force for good, and actively engage in community initiatives."
  }
];

const TeamPage = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 max-sm:pt-4">
          <div className="bg-white rounded-3xl overflow-hidden">
            
            <div className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDB6bTAgN2MtMTIuNzAzIDAtMjMgMTAuMjk3LTIzIDIzczEwLjI5NyAyMyAyMyAyMyAyMy0xMC4yOTcgMjMtMjMtMTAuMjk3LTIzLTIzLTIzeiIvPjwvZz48L2c+PC9zdmc+')] animate-gradient-xy"></div>
              
              <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">Our People</span>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl">Meet the <span className="text-gradient">Team</span> Behind Kusray</h1>
                  <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                    Our greatest asset is our people. We've assembled a diverse team of experts who are passionate about technology and committed to your success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="py-16 px-6 md:px-10">
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">Leadership</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Leadership Team</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  The visionaries and experts who guide our company's strategy and inspire our teams to excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                    <div className="aspect-[3/2] overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex space-x-3 justify-center">
                          <a 
                            href={member.social.linkedin} 
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                          >
                            <Linkedin size={16} className="text-white" />
                          </a>
                          <a 
                            href={member.social.twitter} 
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                          >
                            <Twitter size={16} className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-16">
                <div className="text-center mb-16">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">Our Culture</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Life at Kusray</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    We believe creating a positive, inclusive company culture is essential for building great products and delivering exceptional service.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {cultureItems.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-colors duration-300">
                      <div className="mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  <div className="rounded-xl overflow-hidden h-64 bg-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                      alt="Kusray Office" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden h-64 bg-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                      alt="Kusray Team Collaboration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                  We're always looking for talented individuals who are passionate about technology and making a difference.
                </p>
                <a 
                  href="/careers" 
                  className="inline-flex items-center bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  View Open Positions
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

export default TeamPage; 