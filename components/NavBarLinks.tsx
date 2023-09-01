'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBarLinks = () => {
    const pathname = usePathname()

  return (
    <div className='flex flex-row items-center gap-10'>
      <Link href={"/unlock"} className={`font-medium ${pathname === '/unlock' ? 'text-stone-400' : ''} hover:text-stone-400`}>
          Unlock
        </Link>

        <Link href={"/unlockplus"} className={`font-medium ${pathname === '/unlockplus' ? 'text-stone-400' : ''} hover:text-stone-400`}>
          Unlock+
        </Link>
    </div>
  )
}

export default NavBarLinks
