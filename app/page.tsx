import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Vision from "@/components/sections/Vision";
import Team from "@/components/sections/Team";
import Talents from "@/components/sections/Talents";
import Contact from "@/components/sections/Contact";
import Investments from "@/components/sections/Invesment";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Vision />
      <Team />
      <Talents />
      <Investments />
      <Contact />
    </main>
  );
}
