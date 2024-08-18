'use client'
import Hero from "@/components/Sections/Hero/hero";
import Collaboration from "@/components/Sections/Collaboration/collab";
import Whatwedo from "@/components/Sections/What-we-do/what_we_do";
import Testimonial from "@/components/Sections/Testimonials/testimonial";
import Work from "@/components/Sections/Work/work";
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader/preloader';
import About from '@/components/Sections/About/about';
import Team from '@/components/Sections/Team/team';
import Footer from '@/components/Sections/Footer/footer';

import { useEffect, useState } from 'react';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  
  return (
    <main >
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
<Hero/>
<Whatwedo/>
<About/>
<Collaboration/>
<Work/>
<Testimonial/>
<Team/>
<Footer/>
    </main>
  );
}
