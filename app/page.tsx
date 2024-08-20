'use client'
import Hero from "@/components/Sections/Hero/hero";
import Collaboration from "@/components/Sections/Collaboration/collab";
import Whatwedo from "@/components/Sections/What-we-do/what_we_do";
import Testimonial from "@/components/Sections/Testimonials/testimonial";
import About from '@/components/Sections/About/about';
import Team from '@/components/Sections/Team/team';
import Footer from '@/components/Sections/Footer/footer';


export default function Home() {

  return (
<main >
<Hero/>
<Whatwedo/>
<About/>
<Collaboration/>

<Testimonial/>
<Team/>
<Footer/>
</main>
  );
}
