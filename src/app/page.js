import Navbar from "@/common/layout/Navbar";
import CaseStudies from "@/pages/Home/CaseStudies";
import Hero from "@/pages/Home/Hero";
import Slider1 from "@/pages/Home/Testimonials";
import OurServices from "@/pages/Home/OurServices";
import UnleaseCard from "@/pages/Home/UnleaseCard";
import VideoPlayer from "@/pages/Home/VideoPlayer";
import CaseStudyPage from "@/pages/Home/CaseStudyPage";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* <Hero />
      <VideoPlayer />
      <UnleaseCard />
      <CaseStudies />
      <Slider1 />
      <OurServices /> */}
      <CaseStudyPage />
    </main>
  );
}
