'use client'

import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { socials } from '@/constants'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>

      <div className={styles.social}>
        {socials.map((social) => (
          <Image
            key={social.id}
            src={social.url}
            alt={social.title}
            className={styles.icon}
            width={15}
            height={15}
          />
        ))}
      </div>
    </div>
  )
}

export default Footer
