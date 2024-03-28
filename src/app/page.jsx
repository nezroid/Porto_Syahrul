"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

    const handleSendClick = () => {
      alert("Nama saya syahrul "); // Menampilkan alert ketika tombol diklik
    };
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Selamat Datang Di Website Syahrul R.H</h2>
        <p className={styles.desc}>Mohon maaf apabila ada kesalahan dan tidak sempurna di karenakan kesempurnaan hanya milik Allah SWT</p>
        <h2 className='bold-28 lg-32 text-[0.8rem] capitalize'>Hanya Seorang yang bercita cita menjadi {''}
          <span>
            <Typewriter
              words={['Editor', 'Frontend dev', 'Gamer', 'Trader']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              />
          </span>
        </h2>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => window.open("/Cv_Syahrul.pdf", "_blank")}>Download Cv</button>
         
        </div>
    
      </div>
      <div className={styles.imageContainer}>
        <Image onClick={handleSendClick} src="/hero.gif" alt="" fill className={styles.heroImage}/>
      </div>
    </div>
  );
};

export default Home;
