import Image from 'next/image'
import React from 'react'
import { StaticImageData } from "next/image"
// import img from '../../public/verinnodashboard.png'

interface ProductHeroProps {
    title: string;
    subtitle: string;
    img: StaticImageData;
}

const ProductHero: React.FC<ProductHeroProps> = ({title, subtitle, img}) => {
  return (
    <div className='flex flex-col gap-16 items-center justify-center'>

      <div className='text-center w-1/2 flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-6xl font-bold'>
            {title}
        </h1>
        
        <p className='text-xl font-light font-sans'>
            {subtitle}
        </p>
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
