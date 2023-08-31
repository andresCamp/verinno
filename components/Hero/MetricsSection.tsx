import Image from 'next/image'
import React from 'react'
import img from '../../public/verinnometrics.png'
import ImageBanner from '../ImageBanner'

const MetricsSection = () => {
  return (
    <div className='relative w-screen'>
        <Image
            src={img}
            width={2500}
            height={200}
            alt=''
        />

<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="flex flex-col w-3/4 items-end gap-4 px-6 bg-stone-100 bg-opacity-40 p-4 rounded-2xl">
            
                <h3 className='text-2xl'>&quot;Additionaly, <span className="font-bold">DLR projects</span> help utility comapnies avoid congestion costs. On average, line congestion costs the Oncor about <span className="font-bold">$250,000 per day</span>&quot;</h3>
                <p className='font-sans text-stone-100 font-light'>*Department of Energy, Dynamic line ratings for transmission lines -topical report</p>
            </div>



            <p className="mt-5 text-xl font-sans text-center">
            </p>
        </div>



    </div>
  )
}

export default MetricsSection
