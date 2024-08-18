'use client'
import styles from '@/components/style.module.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Nav from '@/components/Nav/Nav';
export default function Home() {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
   
    <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
      <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
    </div>
    <AnimatePresence mode="wait">

           {isActive && <Nav />}

       </AnimatePresence>
    </>
  )
}