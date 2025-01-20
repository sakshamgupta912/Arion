import Image from "next/image";
import { Button } from "@/components/ui/button"
import Hero from "./_components/Hero";
import Service from "./_components/OurServices";
import WhyChooseUs from "./_components/WhyChooseUs";
import AboutUs from "./_components/AboutUs";

export default function Home() {
  return (
    <div>
      {/* Hero Section*/}
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Service />
      
     
    </div>
  );
}
