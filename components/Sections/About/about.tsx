'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
    <button 
      className="flex justify-between items-center w-full text-left"
      onClick={toggle}
    >
      <h3 className="text-lg font-semibold text-black">{question}</h3>
      <span className="text-black">
        {isOpen ? <FaMinus /> : <FaPlus />}
      </span>
    </button>
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <motion.p className="mt-2 text-black text-sm">
        {answer}
      </motion.p>
    </motion.div>
  </div>
  );
};

interface FAQ {
  question: string;
  answer: string;
}

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: 'Journey to 650K: An Extraordinary Milestone',
      answer: 'Never in our wildest dreams could we have imagined that it would transform into a platform with over 650K followers, amassing an incredible 126 million+ impressions and a monthly reach of 66 million!',
    },
    {
      question: 'Powerhouse in Media and Branding',
      answer: 'We are recognized as a powerhouse in media and branding, leading with creativity and innovation.',
    },
    {
      question: 'Driving Media Excellence',
      answer: 'Our mission is to drive media excellence through our passionate community and engaging content.',
    },
  ];
  return (
    <div className="w-full h-auto lg:h-[600px] flex flex-col lg:flex-row justify-center items-center  " id='about'>
    <div className="w-full lg:w-1/2 bg-red-400 h-[300px] lg:h-full overflow-hidden">
      <img 
        src="/about.svg" 
        alt="illustration" 
        className="w-full h-full object-cover" 
      />
    </div>
    <div className="w-full lg:w-1/2 bg-gray-100 h-auto lg:h-full p-6 lg:p-10 flex flex-col justify-center items-center gap-8 lg:gap-10">
      <p className="text-2xl lg:text-3xl text-black text-left">
        <span className="font-bold">Loopthru</span> started as a modest platform, driven by a deep passion for connecting <span className="font-bold">brands</span> with influential <span className="text-black font-bold">storytellers</span>.
      </p>
      <div className="space-y-4 w-full">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
            isOpen={openIndex === index} 
            toggle={() => setOpenIndex(openIndex === index ? null : index)} 
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default About


