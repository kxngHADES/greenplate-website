import React from 'react'
import { Spotlight } from './ui/spotlight'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4">
      {/* Name and placeholder image */}
      <div className="relative flex items-center justify-center h-[20vh] w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="black" />
      </div>

      <div className="text-center mt-8 relative z-10 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-800 bg-opacity-50">
          Healthy Meals<br/> Zero Waste
        </h1>
        <p className="text-green-600 mb-8 text-lg md:text-3xl">
          Chef-crafted organic meal kits delivered in compostable packaging.
        </p>
        <div className="flex items-center justify-center">
          <a>
            <MagicButton 
              title="Choose Your Plan" 
              icon={<FaLocationArrow className='inline-block'/>}
              position="right" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
