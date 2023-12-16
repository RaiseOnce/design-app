'use client'

import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Link href="/">lamamia</Link>
      <div>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button
          onClick={() => {
            console.log('logged out')
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
