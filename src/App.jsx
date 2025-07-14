import React from 'react'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Navbar from './components/navbar.jsx'
import Feature from './components/Feature.jsx'
import Story from './components/story.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
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
