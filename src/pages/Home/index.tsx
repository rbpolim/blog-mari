import { Footer } from "../../components/Footer";
import { HeroSection } from "../../components/HeroSection";
import { PostsSection } from "../../components/PostsSection";

export function Home() {
  return (
    <div className="bg-[##EFE6DD] text-slate-800">
      <div className="font-poppins p-10 max-w-5xl mx-auto">
        <HeroSection />
        <PostsSection />
      </div>

      <Footer />
    </div>
  )
}
