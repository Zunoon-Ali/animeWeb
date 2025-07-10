import React from 'react'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Navbar from './components/navbar.jsx'
import Feature from './components/Feature.jsx'
function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x bg-blue-75'>
      <Navbar />
      < Hero />
      <About />
      <Feature />
    </main>
  )
}

export default App
