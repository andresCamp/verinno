import Image from 'next/image'
import React from 'react'
import img from '../../public/verinnodashboard.png'
import img2 from '../../public/verinnoambient.png'
import ProductHero from '@/components/ProductPage/ProductHero'
import ImageBanner from '@/components/ImageBanner'
import CTA from '@/components/CTA'
import FeatureCard from '@/components/FeatureCard'

const page = () => {
  return (
    <div className='flex flex-col gap-16 mt-52 mb-16 items-center justify-center'>
        
        <ProductHero 
            title="Unlock: Your Grid's New Best Friend"
            subtitle="Introducing Unlock, our FERC Order 881 compliant software that uses Ambient-Adjusted Ratings (AAR)."
            increase='10%'
            img={img}
        />  

        

        <div className='flex py-16 flex-col sm:flex-row  items-center justify-center gap-16'>
            <FeatureCard 
                title="One Day Installation"
                text="Quick & easy install"
                text2="Immediate results"
            />

            <FeatureCard 
                title="FERC Order 881 compliant"
                text="All documentation complete"
                text2="Plug & play"
            />

            <FeatureCard 
                title="Ambient-Adjusted Ratings"
                text="Unlock full capacity"
                text2="Industry-standard Algorithm"
            />
        </div>

        <ImageBanner
            img={img2}
            title="Connect Ambient Data to your Grid"
            subtitle=""
        />

        <CTA />
    
    </div>
  )
}

export default page


{/* <div className='relative w-full'>

    <Image
        src={img}
        width={2500}
        alt=''
        objectFit='contai'
    />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">
        Our Mission: Renewable Energy for a Sustainable Future
        </h1>

        <p className="mt-5 text-xl font-sans text-center">
        Our mission goes beyond grid technology it's a sustainable revolution. 
        We aim to make the U.S. 80% renewable, sparking a <strong>global decarbonization movement.</strong>
        </p>
    </div>

</div> */}
