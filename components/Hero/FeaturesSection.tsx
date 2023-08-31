import React from 'react'
import FeatureCard from '../FeatureCard'

const FeaturesSection = () => {
  return (
    // <div className='flex flex-col h-fit p-4 sm:py-16 sm:px-32 w-full gap-16 sm:-mt-20 bg-gradient-to-r from-primary to-primary-light'>
    <div className='flex flex-col text-center h-fit p-4 sm:py-16 sm:pt-4 sm:px-32 w-full gap-16'>

        {/* <h1 className='text-white text-3xl'>Your Partner in a Sustainable Energy Future</h1> */}
        <h1 className='text-primary-600 font-bold text-4xl'>Your Partner in a Sustainable Energy Future</h1>

        <div className='flex flex-col sm:flex-row  items-center justify-center gap-16'>
            <FeatureCard 
                title="Energy Capacity Increase"
                text="Ambient Adjusted Ratings"
                text2="Dynamic Line Ratings"
            />

            <FeatureCard 
                title="Alerts and Adjustments"
                text="Line Obstruction Alerts"
                text2="Vegetation Analysis"
            />

            <FeatureCard 
                title="Monitoring and Analysis"
                text="Component Failure"
                text2="Vibration/Annealing Risk"
            />
        </div>
      
    </div>
  )
}

export default FeaturesSection
