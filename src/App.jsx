import React from 'react'   
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Ourstory from './components/Ourstory'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Ourstory />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App