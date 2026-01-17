import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 sm:px-6 lg:px-10 items-center text-white'>
      <div className="logo font-bold text-xl sm:text-2xl"> 
        <Link href="/">BitLinks</Link>
      </div>

      <ul className='hidden md:flex justify-center gap-4 lg:gap-6 items-center text-sm lg:text-base'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>

        <li className='flex gap-2 lg:gap-3'>
          <Link href="/shorten">
            <button className='bg-purple-500 hover:bg-purple-600 transition-all rounded-lg shadow-lg px-3 py-1 font-bold'>
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className='bg-purple-500 hover:bg-purple-600 transition-all rounded-lg shadow-lg px-3 py-1 font-bold'>
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
