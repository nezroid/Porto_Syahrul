import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css"
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Tentang Saya</h2>
        <h1 className={styles.title}>
          Saya Syahrul Rachmat Hadiansyah
        </h1>
        <p className={styles.desc}>Lulusan SMK jurusan Rekayasa Perangkat Lunak yang memiliki minat bekerja dibidang manapun yang sesuai dengan kemampuan saya. Lulus dengan nilai baik. Pernah memiliki pengalaman Magang di perusahaan Software yang direkomendasikan Oleh pihak sekolah. Dan bekerja di salah satu Yayasan sekolah tk sebagai oprator atau sekertaris </p>
       
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt='About Image' fill/>
      </div>
    </div>
  )
}

export default AboutPage