import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { MockupLeft, MinorCards } from "./ProductMockups";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-white pt-32 pb-48 flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[95%] rounded-[0%_0%_50%_50%/0%_0%_30%_30%] bg-gradient-to-b from-[#FDF4F5] via-[#FFF0F5] to-[#ffe4e6] opacity-80"
          style={{ background: "radial-gradient(ellipse at top, #ede9fe 0%, #f5f3ff 60%, #fff0f5 100%)" }}
        />
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <div className="relative w-full h-full min-h-[400px]">
          <MockupLeft />
          <MinorCards />

          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto space-y-8 mt-10 relative z-20 px-4 md:px-10 xl:px-36">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Capture the "Why" with <span className="text-brand-purple">AI-Powered Voice Interviews</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conduct in-depth, multilingual qualitative research at scale. Qwalo uses AI to ask adaptive follow-up
              questions, uncovering rich consumer insights in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button variant="outline" className="h-14 px-8 rounded-full text-lg font-semibold border-2 border-white bg-white/50 backdrop-blur-sm hover:bg-white text-gray-900 shadow-sm transition-all hover:scale-105 cursor-pointer">
                Schedule Demo
              </Button>
              <Button className="h-14 px-8 rounded-full text-lg font-semibold bg-brand-purple hover:bg-brand-purple-dark text-white shadow-xl shadow-brand-purple/20 transition-all hover:scale-105 group cursor-pointer">
                Start Your Study
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-col items-center gap-3 pt-12">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">Trusted by research and product teams across India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
