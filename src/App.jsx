import React from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Feature from './components/Feature.jsx'
import Story from './components/Story.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x bg-blue-75'>
      <Navbar />
      < Hero />
      <About />
      <Feature />
      <Story />
      < Contact />
      <Footer />
    </main>
  )
}

export default App
