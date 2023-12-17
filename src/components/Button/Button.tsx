import React from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'
import { ButtonProps } from '@/types'

const Button = ({ text, url }: ButtonProps) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  )
}

export default Button
