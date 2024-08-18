'use client';
import styles from './project.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  title1: string;
  title2: string;
  src: string;
}

const anim = {
  initial: { width: 0 },
  open: { width: 'auto', transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
  closed: { width: 0 }
};

interface Props {
  project: Project;
}

export default function Index({ project }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { title1, title2, src } = project;
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={styles.project}
    >
      <p>{title1}</p>
      <motion.div
        variants={anim}
        animate={isActive ? 'open' : 'closed'}
        className={styles.imgContainer}
      >
        <img src={`/medias/${src}`} alt={title1} />
      </motion.div>
      <p>{title2}</p>
    </div>
  );
}
