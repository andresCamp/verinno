import Image from 'next/image'
import React from 'react'
import img from "../../public/verinnomission.png"

const MissionSection = () => {
  return (
    <div className='relative w-full'>

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
    </div>
  )
}

export default MissionSection




