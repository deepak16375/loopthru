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
  { imageSrc: "/influencermarketing.PNG", title: "Influencer Marketing", description: "At LoopThru, we connect brands with audiences through authentic influencer partnerships. Our mission is to create impactful campaigns that resonate, driving real results. With a focus on creativity, transparency, and innovation, we help brands and creators forge lasting connections that inspire." },
  { imageSrc: "/media.png", title: "Talent Management", description: "Our Talent Management service offers personalized, strategic support designed to elevate your brand and career. We combine innovation with a tailored approach to ensure authentic growth and impactful success." },
  { imageSrc: "/websitedevelopment.PNG", title: "Website Development", description: "Our Website Development service focuses on turning your vision into a vibrant reality. We create websites that reflect your goals and drive your success, blending creativity with functionality to achieve your unique objectives." },
  { imageSrc: "/performancemarketing.PNG", title: "Performance Marketing", description: "Our Performance Marketing service is dedicated to ensuring our clients achieve the best possible results. We focus on optimizing every campaign to drive measurable success. By leveraging data-driven strategies and personalized approaches, we maximize ROI and deliver impactful, results-oriented marketing solutions." },
  { imageSrc: "/videoproduction.PNG", title: "Video Production", description: "Our Video Production service is dedicated to bringing our clients' vision to life, ensuring they achieve the best possible results. We focus on every detail, from concept to execution to create impactful, high-quality content that resonates with their target audience." },
  { imageSrc: "/ssm.PNG", title: "Social Media Management", description: "Our Social Media Management service is focused on crafting tailored strategies, managing content, and engaging with audiences to maximize online presence and drive meaningful growth for our clients' brands.Create stunning visual designs!" }
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const what_we_do = () => {
  return (
    <div className="flex flex-col md:px-10 p-5 gap-10" id="work">
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
