'use client'
import Image from 'next/image'
import React from 'react'
import img from '../public/verinnologo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()

    return (
        <div className='flex flex-col gap-8 justify-center items-center bg-stone-50 w-full'>
            <div className='p-8 pt-8 flex flex-row justify-between items-center'>
                <div className='w-1/5 text-sm'>
                    <Image
                        src={img}
                        alt='verinno logo'
                    />
                    <p className='font-sans font-light text-stone-600'>
                        We&apos;re not just optimizing grids; we&apos;re transforming the energy landscape for a greener tomorrow.
                    </p>
                </div>

               

       

                <Link href={"/unlock"} className={`font-medium ${pathname === '/unlock' ? 'text-stone-400' : ''} hover:text-stone-400`}>
                    <h3 className='text-2xl hover:opacity-50'>Unlock</h3>
                </Link>
                
                <Link href={"/unlockplus"} className={`font-medium ${pathname === '/unlockplus' ? 'text-stone-400' : ''} hover:text-stone-400`}>
                    <h3 className='text-2xl hover:opacity-50'>Unlock+</h3>
                </Link>
                
                <Link href={"/contact"} className={`font-medium ${pathname === '/contactus' ? 'text-stone-400' : ''} hover:text-stone-400`}>
                    <h3 className='text-2xl hover:opacity-50'>Contact Us</h3>
                </Link>

        </div>

            <p className='p-4 text-stone-700'>©2023 Verinno Inc. All rights reserved.</p>
        
        </div>
        
     
    )
}

export default Footer
