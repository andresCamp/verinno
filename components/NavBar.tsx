import React from 'react'
import logo from '/public/verinnologo.png'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='bg-white p-4 z-50 flex flex-row items-center justify-between shadow-lg'>
        <Link className="font-medium hover:opacity-80" href={"/"}>
          <Image
              src={logo}
              width={300}
              alt='verinno logo'
          />
        </Link>

        <div className='sm:flex hidden flex-row items-center gap-10'>
          <Link className="font-medium hover:text-slate-400" href={"/unlock"}>Unlock</Link>

          <Link className="font-medium hover:text-slate-400" href={"/unlockplus"}>Unlock+</Link>

          <Link className='p-3 px-6 bg-primary rounded-2xl hover:bg-primary-light text-white' href={"/contact"}>Contact Us</Link>
        </div>

    </div>
  )
}

export default NavBar
