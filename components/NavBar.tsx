import React from 'react'
import logo from '/public/verinnologo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavBarLinks from './NavBarLinks'


const NavBar = () => {
  return (
    <div className='bg-white px-4 z-50 animate-fadeIn flex flex-row items-center justify-between shadow-lg'>
        <Link className="font-medium hover:opacity-80" href={"/"}>
          <Image
              src={logo}
              width={300}
              alt='verinno logo'
          />
        </Link>

        <div className='sm:flex hidden text-lg flex-row items-center gap-10'>
        
        <NavBarLinks />

          <Link className='p-3 px-6 bg-primary-600 rounded-2xl hover:bg-primary-light text-white' href={"/contact"}>Contact Us</Link>
        </div>

    </div>
  )
}

export default NavBar
