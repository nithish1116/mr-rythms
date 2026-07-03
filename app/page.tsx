import { Navbar } from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import { MarqueeFeatures } from "@/components/sections/marquee-features";
import WhyHome from "@/components/sections/why-home";
import Instruments from "@/components/sections/instruments";
import HowItWorks from "@/components/sections/how-it-works";
import Courses from "@/components/sections/courses";
import Benefits from "@/components/sections/benefits";
import Tutor from "@/components/sections/tutor";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeFeatures />
      <WhyHome />
      <Instruments />
      <HowItWorks />
      <Courses />
      <Benefits />
      <Tutor />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
export default Home;
