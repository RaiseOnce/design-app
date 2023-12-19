import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import { portfolioItems } from '@/constants'

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        {portfolioItems.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className={styles.item}
            style={{ backgroundImage: item.bg }}
          >
            <span className={styles.title}>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
