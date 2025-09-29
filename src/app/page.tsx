'use client'
import Hero from "@/components/home/Hero";
import MarqueNew from "@/components/home/MarqueNew";
import Services from "@/components/home/Services";
import WelcomeSection from "@/components/home/WelcomeSection";
import CounterSection from "@/components/home/CounterSection";
import RecentBlogs from "@/components/home/RecentBlogs";
import ClientMarque from "@/components/home/ClientMarque";
// import Clientmarque2 from "@/components/home/Clientmarque2";
import CTA from "@/components/home/CTA";
import Ctav2 from "@/components/home/Ctav2";
import Vision from "@/components/Vision";
import HomeTestimonials from "@/components/home/HomeTestimonials";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <MarqueNew />
      <WelcomeSection />
      <div className="pt-12 pb-4">
        <Vision />
      </div>
      <CounterSection />
      <RecentBlogs />
   <div className="pt-12 pb-4">
        <Ctav2 />
      </div>
      <Services />
      
      <HomeTestimonials />
      <ClientMarque />
      {/* <Clientmarque2 /> */}
      <CTA />
 
    </div>
  );
}
