import Image from 'next/image'
import React from 'react'
import unlock from '../../public/verinnodashboard.png'
import plus from '../../public/verinnoplus3.png'
import ProductSectionCard from './ProductSectionCard'
import Link from 'next/link'


const ProductSection = () => {
  return (
    <div className='flex flex-col justify-center items-center my-16'>


        <div className='flex flex-col sm:flex-row justify-center gap-12 items-center sm:items-end'>
      
            <ProductSectionCard
                img={unlock}
                title='Unlock'
                link="/unlock"
                desc="Introducing Unlock, our FERC Order 881 compliant software that uses Ambient-Adjusted Ratings (AAR) to increase your grid's capacity by up to 10%."
            />

            <ProductSectionCard
                img={plus}
                title='Unlock+'
                link="/unlockplus"
                desc="Introducing Unlock, our FERC Order 881 compliant software that uses Ambient-Adjusted Ratings (AAR) to increase your grid's capacity by up to 40%."
            />

        </div>



    </div>
  )
}

export default ProductSection
