import { useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutPage from './pages/About'
import TeamPage from './pages/Team'
import ContactPage from './pages/Contact'
import NotFoundPage from './pages/NotFound'
import ErrorPage from './pages/ErrorPage'
import UnderDevelopmentPage from './pages/UnderDevelopment'

const HomePage = () => {
  const servicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollToServices = () => {
      servicesRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    };
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollToServices) {
      setTimeout(() => {
        servicesRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' 
        });
      }, 100);
    }
  }, [location]);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 max-sm:pt-4">
          <div className="bg-white rounded-3xl overflow-visible relative">
            <Hero onScrollClick={scrollToServices}/>
            <Content refProp={servicesRef}/>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/coming-soon" element={<UnderDevelopmentPage />} />
      <Route path="/careers" element={<UnderDevelopmentPage />} />
      <Route path="/resources" element={<UnderDevelopmentPage />} />
      <Route path="/blog" element={<UnderDevelopmentPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
