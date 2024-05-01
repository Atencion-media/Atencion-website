import Navbar from "@/common/layout/Navbar";
import Hero from "@/pages/Home/Hero";
import VideoPlayer from "@/pages/Home/VideoPlayer";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <VideoPlayer/>
    </main>
  );
}
