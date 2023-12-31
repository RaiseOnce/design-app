'use client'

import { navLinks } from '@/constants'
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './Navbar.module.scss'
import ModeToggle from '../ModeToggle/ModeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        lamamia
      </Link>

      <div className={styles.links}>
        <ModeToggle />
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <button
          className={styles.logout}
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
