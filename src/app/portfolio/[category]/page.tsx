import React from 'react'
import styles from './page.module.scss'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'
import { PortfolioItemsType } from '@/types'

const getData = (cat: string | number) => {
  const data = items[cat as keyof typeof items]

  if (data) {
    return data
  }

  return notFound()
}

const Category = ({ params }: { params: { category: string } }) => {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item: PortfolioItemsType) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.subtitle}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image fill={true} src={item.image} className={styles.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category
