// Link.tsx
import styles from '@/components/style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '@/components/Header/anim';

type Data = {
  title: string;
  href: string;
  index: number;
};

type LinkProps = {
  data: Data;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  setIsActive: (active: boolean) => void; // Add setIsActive as a prop
};

export default function LinkComponent({ data, isActive, setSelectedIndicator, setIsActive }: LinkProps) {
  const { title, href, index } = data;

  const handleClick = () => {
    setSelectedIndicator(href); // Update the active indicator on click
    setIsActive(false); // Close the navbar on link click
  };

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      />
      <Link href={href} onClick={handleClick}>{title}</Link>
    </motion.div>
  );
}
