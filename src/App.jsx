import React from 'react'
import Hero from './components/hero.jsx'
import Button from './components/Button.jsx'    

function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x'>
      < Hero />
      <section className='bg-blue-500 min-h-screen z-0' />
    </main>
  )
}

export default App
