import { HeroSection } from "@/components/home/HeroSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <Footer />
    </div>
  );
}
