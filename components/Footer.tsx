import Image from 'next/image'
import React from 'react'
import img from '../public/verinnologo.png' 
import FooterLinks from './FooterLinks'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='flex px-8 pt-8 flex-col gap-8 justify-center items-center bg-stone-50 w-full'>
            <div className='flex flex-col gap-8 sm:flex-row justify-between'>
                <div className='flex flex-row gap-8 sm:gap-0 sm:flex-col sm:w-1/5 text-sm'>
                    <Link className="font-medium hover:opacity-80" href={"/"}>
                        <Image
                            src={img}
                            alt='verinno logo'
                        />
                    </Link>
                    <p className='font-sans font-light text-stone-600'>
                        We&apos;re not just optimizing grids; we&apos;re transforming the energy landscape for a greener tomorrow.
                    </p>
                </div>

                <div className='sm:w-3/5'>
                    <FooterLinks />
                </div>

            </div>

            <p className='p-4 text-stone-700'>©2023 Verinno Inc. All rights reserved.</p>
        
        </div>
        
     
    )
}

export default Footer
