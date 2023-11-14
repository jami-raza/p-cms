"use client"
import useScrollDirection from '@/app/hooks/useScrollPosition';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  const scrollDirection = useScrollDirection();

  return (
  


    <div className={`hidden md:block bg-white max-w-[1440px] px-[40px] py-4 sticky ${scrollDirection === "down" ? 'top-[-90px]' : 'top-0 shadow-lg'} z-[99999] overflow-x-hidden  transition-all duration-500`}>
      <nav className='flex justify-between'>
        <div className='my-auto'>
        <Link href='/' passHref>
                <Image src='/img/logo.png' alt='logo' width={100} height={100}/>
                    </Link>
        </div>
        <div>
            <ul className='flex list-none gap-6 justify-center items-center'>
                <Link href='#about'><li>About</li></Link>
                <Link href='#experience'><li>Experience</li></Link>
                <Link href='#portfolio'><li>Portfolio</li></Link>
               <Link href='#contact'> <li>Contact</li></Link>
                <Link href='#'><li className='bg-[#8e8c904a] p-4'>Download Resume</li></Link>
            </ul>
        </div>
      </nav>
    </div>
   
  )
}

export default Navbar