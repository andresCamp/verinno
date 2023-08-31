import Image from 'next/image'
import React from 'react'
import img from '../../public/verinnoplus.png'
import ProductHero from '@/components/ProductPage/ProductHero'

const page = () => {
  return (
    <div className='flex flex-col gap-16 mt-52 mb-16 items-center justify-center'>
        <ProductHero 
            title="Unlock+: The Ultimate Hardware for Grid Reliability"
            subtitle="Introducing Unlock, our FERC Order 881 compliant software that uses Ambient-Adjusted Ratings (AAR) to increase your grid's capacity by up to 10%."
            img={img}
        />  

        

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