'use client';
import Image from "next/image";

import Pic2 from '@/public/2.jpeg';
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef, RefObject } from "react";
import Lenis from 'lenis';

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-[#FFD53D] text-[3.5vw] flex flex-col items-center justify-center text-black pb-[10vh]"
    >
      <p className="text-4xl md:text-5xl lg:text-9xl ">About Us</p>
     
    </motion.div>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen"
    >
     
      <div className="bg-white w-full h-screen">
      <h1 className=" text-4xl  lg:text-9xl text-black ">About us</h1>

      </div>
    </motion.div>
  );
};
