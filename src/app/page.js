import Navbar from "@/common/layout/Navbar";
import CaseStudies from "@/pages/Home/CaseStudies";
import Hero from "@/pages/Home/Hero";
import Slider1 from "@/pages/Home/Testimonials";
import OurServices from "@/pages/Home/OurServices";
import UnleaseCard from "@/pages/Home/UnleaseCard";
import VideoPlayer from "@/pages/Home/VideoPlayer";
import WhyUs from "@/pages/Home/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <VideoPlayer/>
      <UnleaseCard />
      <CaseStudies />
      <WhyUs/>
      {/* <Slider1/>   */}
      <OurServices />
    </main>
  );
}
