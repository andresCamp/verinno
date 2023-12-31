import Image from 'next/image'
import React from 'react'
import img from '../../public/verinnoplus.png'
import ProductHero from '@/components/ProductPage/ProductHero'
import CTA from '@/components/CTA'
import FeaturesSection from '@/components/Hero/FeaturesSection'
import FeatureCard from '@/components/FeatureCard'

const page = () => {
  return (
    <div className='flex flex-col gap-16 mt-52 mb-16 items-center justify-center'>
        <ProductHero 
            title="Unlock+: The Ultimate Hardware for Grid Reliability"
            subtitle="Introducing Unlock, our FERC Order 881 compliant software that uses Ambient-Adjusted Ratings (AAR) to increase your grid's capacity by up to 40%."
            increase='40%'
            img={img}
        />  

    
    
    {/* Unlock+ pays for itself within a year. Experience Verinno's commitment to reliability and efficiency. */}

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

    <CTA />

    </div>
  )
}

export default page
{/* <h1 
                className='text-4xl font-bold'
                alt=""
            >
                **Unlock+** is the **hardware solution** that complements Unlock, featuring **IEEE Standard 738** for **Dynamic Line Ratings (DLR)** and **grid reliability**.

            </h1> */}