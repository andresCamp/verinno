'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const FooterLinks = () => {
    const pathname = usePathname()

  return (
    <div className='flex flex-row pt-4 justify-between items-center'>
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
  )
}

export default FooterLinks
