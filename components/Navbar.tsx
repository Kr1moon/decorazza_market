import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-300 bg-black-100 py-7 text-white'>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        <Link href='/'>
          <Image
            alt='logo'
            src='/jsm-logo.svg'
            width={55}
            height={40}
          />
        </Link>
        <Image
          src='/hamburger-menu.svg'
          alt='humburger'
          width={30}
          height={35}
          className='block md:hidden'
        />
        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='body-text !font-normal'> 
            <Link
            href='/'
            target='_blank'
            > 
            Go D_Landfill platform
            </Link>
          </li>
          <li className='body-text text-gradient_blue-purple !font-bold'> 
            <Link
            href='/'
            target='_blank'
            > 
            Go D_Landfill block
            </Link>
          </li>           
        </ul>
      </div>
    </nav>
  )
}

export default Navbar