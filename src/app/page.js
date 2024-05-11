import CaseStudies from "@/pages/Home/CaseStudy/CaseStudies";
import UnleaseCard from "@/pages/Home/CaseStudy/UnleaseCard";
import FAQs from "@/pages/Home/FAQs/FAQs";
import Hero from "@/pages/Home/Hero";
import OurServices from "@/pages/Home/OurServices/OurServices";
import Testimonials from "@/pages/Home/Testimonial/Testimonials";
import VideoPlayer from "@/pages/Home/VideoPlayer";
import WhyUs from "@/pages/Home/WhyUS/WhyUs";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <VideoPlayer/>
      <UnleaseCard/>
      <WhyUs/>
      <CaseStudies />
      <OurServices />
      <Testimonials/>
      <FAQs/>
    </main>
  );
}
