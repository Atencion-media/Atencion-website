import Navbar from "@/common/layout/Navbar";
import CaseStudies from "@/pages/Home/CaseStudies";
import Hero from "@/pages/Home/Hero";
<<<<<<< HEAD
import Slider1 from "@/pages/Home/Testimonials";
=======
import OurServices from "@/pages/Home/OurServices";
>>>>>>> 2148b7a549c64640a549e89f0eda17066f47ea1d
import UnleaseCard from "@/pages/Home/UnleaseCard";
import VideoPlayer from "@/pages/Home/VideoPlayer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <VideoPlayer/>
      <UnleaseCard />
      <CaseStudies />
      <Slider1/>  
      <OurServices />
    </main>
  );
}
