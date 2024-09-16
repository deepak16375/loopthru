// Nav.tsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/components/style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '@/components/Header/anim';
import LinkComponent from '@/components/Link/link'; // Import the updated Link component
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "What we do", href: "#work" },
  { title: "About Us", href: "#about" },
  { title: "Collaboration", href: "#Collaboration" },
  { title: "Testimonials", href: "#Testimonials" },
  { title: "Our Team", href: "#team" },
  { title: "Contact Us", href: "#Contact" },
];

type NavProps = {
  setIsActive: (active: boolean) => void; // Add setIsActive as a prop
};

export default function Nav({ setIsActive }: NavProps) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);

  // Update selectedIndicator whenever pathname changes
  useEffect(() => {
    setSelectedIndicator(window.location.hash || pathname); // Include hash fragment if any
  }, [pathname]);

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
          onMouseLeave={() => setSelectedIndicator(window.location.hash || pathname)} // Reset to the current section
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <LinkComponent
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href} // Check if current indicator is active
              setSelectedIndicator={setSelectedIndicator}
              setIsActive={setIsActive} // Pass setIsActive to the Link component
            />
          ))}
        </div>
        <div className={styles.footer}>
          <a><FaXTwitter size={30} /></a>
          <a><GrInstagram size={30} /></a>
          <a><TiSocialFacebook size={30} /></a>
          <a><SiLinkedin size={30} /></a>
        </div>
      </div>
    </motion.div>
  );
}
