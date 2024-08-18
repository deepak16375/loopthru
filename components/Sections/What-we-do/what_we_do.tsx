'use client';
import HoverCard from "@/components/Cards/card";
import Line from "@/components/Line/line";
import { motion } from 'framer-motion';
import React from "react";

interface CardData {
  imageSrc: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  { imageSrc: "/media.png", title: "Media Promotions", description: "Go Viral with our promotions!" },
  { imageSrc: "/media.png", title: "Web Development", description: "Build modern web applications!" },
  { imageSrc: "/media.png", title: "Design", description: "Create stunning visual designs!" },
  { imageSrc: "/media.png", title: "Media Promotions", description: "Go Viral with our promotions!" },
  { imageSrc: "/media.png", title: "Web Development", description: "Build modern web applications!" },
  { imageSrc: "/media.png", title: "Design", description: "Create stunning visual designs!" }
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const what_we_do = () => {
  return (
    <div className="flex flex-col md:px-10 p-5 gap-10">
      <div>
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-xl md:text-6xl pb-5 font-semibold"
        >
          What we do
        </motion.p>
        <Line />
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-xs md:text-base"
        >
          While our primary services revolve around media promotions and
          branding, our content is centered on the captivating realms of
          filmmaking and photography. With a dedicated following of over 650K on
          Instagram, our journey continues to unfold through the lens of
          creativity.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <HoverCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default what_we_do;
