import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { FAQ } from "@/components/home/FAQ";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Solutions } from "@/components/home/Solutions";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-purple/20">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Solutions />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
