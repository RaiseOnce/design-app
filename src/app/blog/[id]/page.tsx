import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.subtitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            dignissimos quas nesciunt, officia, magni eum reiciendis architecto
            adipisci beatae aliquid nam itaque labore ea qui doloremque
            obcaecati ad vero? Voluptatum.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Alex Smith</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
          cupiditate molestias doloribus facere modi. Officiis, eos molestias
          exercitationem impedit ullam maxime sapiente reiciendis sed esse
          excepturi? Laborum cum iusto nostrum.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
          cupiditate molestias doloribus facere modi. Officiis.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          voluptatum veniam error, officiis, facere sint maiores, dicta nobis
          voluptas eveniet commodi culpa quasi eaque quia aperiam recusandae
          quibusdam provident velit.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
