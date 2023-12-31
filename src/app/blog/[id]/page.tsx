import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id: number) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({ params }: any) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const BlogPost = async ({ params }: { params: { id: number } }) => {
  const data = await getData(params.id)

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.subtitle}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost
