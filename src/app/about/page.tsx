import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h3 className={styles.imgSubtitle}>
            Handcrafting award winning digital experiences
          </h3>
        </div>
      </div>
      <div className={styles.textContaier}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who Are We?</h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            explicabo porro inventore velit earum possimus quia quisquam non
            aliquam eos pariatur, aperiam, quasi, reprehenderit amet itaque! Et
            ab unde iure!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            consequuntur blanditiis corrupti corporis obcaecati, totam sapiente
            nemo vitae aspernatur earum maiores libero quia alias cupiditate
            dolores eligendi dolor quidem modi?
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What We Do?</h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam
            corporis, et repudiandae eum maiores aut dolorem, blanditiis
            incidunt commodi in unde magnam laudantium. Pariatur aliquam numquam
            voluptates placeat maiores?
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About
