'use client';
import React from 'react';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    
    console.log('Contact Section:', contactSection); 
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Contact section not found');
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full flex justify-between items-center p-4 md:px-10 bg-white z-50' id='home'>
      <div className='cursor-pointer'>
        <Link href="#home" >  
          <Image src="/logo.svg" height={120} width={120} alt='logo' className='cursor-pointer'/>
        </Link>
      </div>
      <div className='flex justify-center items-center gap-5 w-auto'>
        <div>
          <button
            onClick={handleScrollToContact}
            className='bg-black text-white rounded-md md:px-5 md:p-2 px-3 p-2 text-xs md:text-base'
          >
            Contact
          </button>
        </div>
        <Header />
      </div>
    </div>
  );
};

export default Navbar;
