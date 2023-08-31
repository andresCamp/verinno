import Image from 'next/image'
import React from 'react'
import img from '../../public/verinnodashboard.png'
import img2 from '../../public/verinnoambient.png'
import ProductHero from '@/components/ProductPage/ProductHero'

const page = () => {
  return (
    <div className='flex flex-col gap-16 mt-52 mb-16 items-center justify-center'>
        
        <ProductHero 
            title="Unlock: Your Grid's New Best Friend"
            subtitle="Introducing Unlock, our FERC Order 881 compliant software that uses Ambient-Adjusted Ratings (AAR) to increase your grid's capacity by up to 10%."
            img={img}
        />  

        <Image
            src={img2}
            alt=''
        />
    
    </div>
  )
}

export default page
