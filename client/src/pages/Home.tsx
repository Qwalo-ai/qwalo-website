import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-purple/20">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
