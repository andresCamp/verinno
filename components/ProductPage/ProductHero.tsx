import Image from 'next/image'
import React from 'react'
import { StaticImageData } from "next/image"
// import img from '../../public/verinnodashboard.png'

interface ProductHeroProps {
    title: string;
    subtitle: string;
    increase: string;
    img: StaticImageData;
}

const ProductHero: React.FC<ProductHeroProps> = ({title, subtitle, increase, img}) => {
  return (
    <div className='flex flex-col gap-16 items-center justify-center'>

      <div className='text-center mx-4 xl:w-3/5 flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-6xl font-bold'>
            {title}
        </h1>
        
        <p className='text-xl font-light font-sans'>
            {subtitle}
        </p>
        
        <div className='px-6 py-4 text-md flex items-center gap-2 bg-primary-50 hover:bg-primary-100 rounded-2xl shadow-xl'>
            Increase your grid&apos;s capacity by up to <span className='text-3xl font-bold'>{increase}</span>
        </div>
        
        </div>
        {/* //formspark */}
    
        <Image
            src={img}
            alt='verinno dash'
        />
    </div>
  )
}

export default ProductHero
