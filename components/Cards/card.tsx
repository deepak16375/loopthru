'use client'
import React, { useState, useEffect } from 'react';

interface HoverCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ imageSrc, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (isHovered) {
        const audio = new Audio('/pop.mp3');
        audio.play();
      }
    }, [isHovered]);
  return (
    <div className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-72 md:w-96 h-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div className="w-full h-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Overlay that will show on hover */}
        <div className="absolute inset-0 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="w-full h-1/2 bg-gradient-to-t from-[#FFD53D] to-black opacity-95 flex items-center justify-center text-white">
            <p className="text-center px-4 text-sm">{description}</p>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold p-10 text-center">{title}</h2>
    </div>
  );
};

export default HoverCard;
