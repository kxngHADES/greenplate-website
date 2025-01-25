import { Spotlight } from './ui/spotlight'
import MagicButton from './ui/MagicButton'

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4">
      {/* Spotlight effect */}
      <div className="relative flex items-center justify-center h-[20vh] w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="black" />
      </div>

      {/* Content section */}
      <div className="text-center mt-8 relative z-10 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-800 bg-opacity-50 mb-4">
          <div className="flex flex-col">
            <span className="inline-block">Healthy Meals</span>
            <span className="inline-block mt-2">Zero Waste</span>
          </div>
        </h1>
        
        <p className="text-green-600 mb-8 text-xl md:text-3xl max-w-2xl mx-auto">
          Chef-crafted organic meal kits delivered in compostable packaging.
        </p>

        <div className="flex items-center justify-center">
          <MagicButton 
            title="Choose Your Plan"
            otherClasses="text-lg md:text-xl py-4 px-8" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero