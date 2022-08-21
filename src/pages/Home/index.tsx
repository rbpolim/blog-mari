import { Footer } from "../../components/Footer";
import { HeroSection } from "../../components/HeroSection";
import { PostsSection } from "../../components/PostsSection";

export function HomePage() {
  return (
    <div className="bg-[#f8f8f2] text-slate-800">
      <div className="font-poppins p-10 max-w-5xl mx-auto">
        <HeroSection />
        <PostsSection />
      </div>

      <Footer />
    </div>
  )
}
