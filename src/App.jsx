import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <main className="pt-16"> {/* 16 = 4rem, which accounts for the navbar height */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 ">
          {/* Your page content will go here */}
          <div className="bg-white rounded-3xl  ">
            <Hero/>
            <Content/>
            <Footer/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
