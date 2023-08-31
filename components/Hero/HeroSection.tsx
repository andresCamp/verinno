import React from 'react'
import VimeoBackground from '../VimeoBackground'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='absolute z-40 top-0 left-0 w-screen h-screen'>
      
      <Image 
        src="/bg-image.png"
        fill={true}
        alt="verinno bg"
        className="sm:hidden absolute inset-0 h-full w-full object-cover z-10"  
      />
      
      <VimeoBackground videoId="859673302"> 

        <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center">

            <h1 className="text-white text-center text-4xl sm:text-6xl p-8">  
                Meet Verinno - The Future of Grid Optimization
            </h1>

            <p className='text-white font-sans text-xl'>
                We&apos;re more than a company; we&apos;re a movement, driving the energy sector towards sustainable grid reliability.
            </p>

        </div>
      
      </VimeoBackground>
    </div>
  )
}

export default HeroSection
