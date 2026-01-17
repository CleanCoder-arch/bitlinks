"use client"

import React, { useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="h-16 bg-purple-700 text-white flex items-center justify-between px-4 sm:px-6 lg:px-10 relative">
      
      {/* LOGO */}
      <div className="font-bold text-xl sm:text-2xl">
        <Link href="/">BitLinks</Link>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/shorten">Shorten</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>

        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 hover:bg-purple-600 transition rounded-lg shadow-lg px-4 py-1 font-bold">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-purple-500 hover:bg-purple-600 transition rounded-lg shadow-lg px-4 py-1 font-bold">
              GitHub
            </button>
          </Link>
        </li>
      </ul>

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center items-center gap-1"
        aria-label="Toggle menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-purple-700 md:hidden shadow-lg">
          <ul className="flex flex-col items-center gap-5 py-6 font-medium">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/shorten" onClick={() => setOpen(false)}>Shorten</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
            </li>

            <li className="flex flex-col gap-3 w-full px-6">
              <Link href="/shorten" onClick={() => setOpen(false)}>
                <button className="w-full bg-purple-500 rounded-lg shadow-lg py-2 font-bold">
                  Try Now
                </button>
              </Link>
              <Link href="/github" onClick={() => setOpen(false)}>
                <button className="w-full bg-purple-500 rounded-lg shadow-lg py-2 font-bold">
                  GitHub
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
