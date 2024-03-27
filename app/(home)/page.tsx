import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>

      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>

      <div className='mx-auto max-w-7xl p-5'>
          <Navbar/>
          <HeroSection/>
      </div>
        
      </div>

    </div>
  )
}
