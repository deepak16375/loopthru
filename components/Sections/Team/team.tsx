import React, { useRef } from 'react';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  instagramUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'James Henry',
    role: 'Web Analyst',
    imageSrc: '/pic01.avif',
    instagramUrl: '#',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'John Doe',
    role: 'UI/UX Designer',
    imageSrc: '/pic02.avif',
    instagramUrl: '#',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Mykel Smith',
    role: 'Front-End Web Developer',
    imageSrc: '/pic01.avif',
    instagramUrl: '#',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Alex Morgan',
    role: 'Back-End Web Developer',
    imageSrc: '/pic02.avif',
    instagramUrl: '#',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

const Team: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5" id='team'>
      <div className="text-center mb-10">
        <h4 className="inline-block p-5 text-black text-3xl md:text-5xl font-semibold">
          Our Team
        </h4>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-72 h-96 overflow-hidden shadow-lg rounded-lg flex justify-center items-center group"
            onMouseEnter={playSound} // Play sound on hover
          >
            <div className="w-full h-full">
              <Image
                src={member.imageSrc}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <div className="absolute bottom-0 w-full h-40 bg-[#FFD53D]/90 backdrop-blur-sm rounded-b-lg transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <div className="flex flex-col justify-center items-center h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-lg font-medium uppercase mb-2">
                  {member.name} <br />
                  <span className="text-sm font-light normal-case">{member.role}</span>
                </h3>
                <ul className="flex justify-center items-center gap-5 mt-2">
                  <li>
                    <a href={member.instagramUrl} className="text-white text-xl">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href={member.twitterUrl} className="text-white text-xl">
                      <BsTwitterX />
                    </a>
                  </li>
                  <li>
                    <a href={member.linkedinUrl} className="text-white text-xl">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <audio ref={audioRef} src="/whoosh.mp3" preload="auto" />
    </div>
  );
};

export default Team;
