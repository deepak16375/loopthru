'use client';
import styles from './hero.module.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [windowsWidth, setWindowsWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowsWidth(window.innerWidth);
    
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => (
      <div
        onMouseEnter={(e) => colorize(e.target as HTMLDivElement)}
        key={index}
        className={styles.block}
      ></div>
    ));
  };

  const colorize = (el: HTMLDivElement) => {
    el.style.backgroundColor = 'black';
    setTimeout(() => {
      el.style.backgroundColor = 'transparent';
    }, 300);
  };

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <motion.p
          
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5, delay: 2.8
          }}
          
          
          
        >
          Connecting Brands with the Voices that Matter
        </motion.p>
      </div>
      <div className={styles.grid}>
        {windowsWidth > 0 && [...Array(20).keys()].map((_, index) => (
          <div key={index} className={styles.column}>
            {getBlocks()}
          </div>
        ))}
      </div>
    </div>
  );
}
