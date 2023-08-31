import React from 'react'
import { FormsparkForm } from './FormsparkForm'
import Image from 'next/image'
import img from "../public/verinnoplus21.png"

const CTA = () => {
  return (
    <div className='flex flex-row gap-8 items-center justify-between mx-16 h-fill my-16'>

        <div className='flex flex-col gap-10'>
            <div>
                <h2 className='text-3xl '>Verinno invites you to become a pilot site for Unlock & Unlock+.</h2>
                <p className='font-sans text-2xl font-light text-stone-500'>Join us in setting new standards for grid optimization.</p>
            </div>
            <FormsparkForm />
        </div>

        <div className='w-3/12'>
            <Image
                src={img}
                className='shadow-xl'
                alt=''
            />
        </div>
      
    </div>
  )
}

export default CTA
