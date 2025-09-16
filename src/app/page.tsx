import Hero from "@/components/home/Hero";
import MarqueNew from "@/components/home/MarqueNew";
import Services from "@/components/home/Services";
import WelcomeSection from "@/components/home/WelcomeSection";
import CounterSection from "@/components/home/CounterSection";
import RecentBlogs from "@/components/home/RecentBlogs";
import ClientMarque from "@/components/home/ClientMarque";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <MarqueNew />
      <WelcomeSection />
      <CounterSection />
      <RecentBlogs />
      <Services />
      <ClientMarque />
      <CTA />
   
    </div>
  );
}
