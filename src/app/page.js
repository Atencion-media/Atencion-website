import Navbar from "@/common/layout/Navbar";
import CaseStudies from "@/pages/Home/CaseStudies";
import Hero from "@/pages/Home/Hero";
import UnleaseCard from "@/pages/Home/UnleaseCard";
import VideoPlayer from "@/pages/Home/VideoPlayer";
import CaseStudyPage from "@/pages/CaseStudyPage";

export default function Home() {
  return (
    <main className="flex flex-col  justify-between">
      {/* <Hero />
      <VideoPlayer />
      <UnleaseCard />
      <CaseStudies /> */}
      <CaseStudyPage />
    </main>
  );
}
