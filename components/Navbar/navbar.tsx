import React from 'react'
import Header from '@/components/Header/Header'
import Image from 'next/image'
import Link from 'next/link'

const navbar = () => {


  return (
    <div className='flex justify-between items-center p-4 md:px-10'>
        <div>
        <Image src="/logo.webp" height={100} width={100} alt='logo'/>
        </div>
        <div className='flex justify-center items-center gap-5 w-auto '>
            <div>
         <Link href="#contact" ></Link>   <button className='bg-black text-white rounded-md md:px-5 md:p-2  px-3 p-2 text-xs md:text-base'>Contact</button>
            </div>
            <Header/>
        </div>



    </div>
  )
}

export default navbar