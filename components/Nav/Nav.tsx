'use client';
import React, { useState } from 'react';
import styles from '@/components/style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '@/components/Header/anim';
import Link from '@/components/Link/link';
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "What we do",
    href: "#work",
  },
  {
    title: "About Us",
    href: "#about",
  },
  {
    title: "Collaboration",
    href: "#Collaboration",
  },
  {
    title: "Testimonials",
    href: "#Testimonials",
  },
  {
    title: "Our Team",
    href: "#Our Team",
  },
  {
    title: "Contact Us",
    href: "#contact",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <div className={styles.footer}>
          <a><FaXTwitter  size={30}/></a>
          <a><GrInstagram size={30} /></a>
          <a><TiSocialFacebook size={30} /></a>
          <a><SiLinkedin size={30}/></a>
        </div>
      </div>
    </motion.div>
  );
}
