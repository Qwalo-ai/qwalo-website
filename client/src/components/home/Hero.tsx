import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { MockupLeft, MockupRight } from "./ProductMockups";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white pt-32 pb-32">
      
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div 
            className="absolute top-[-10%] left-[-10%] w-[120%] h-[85%] rounded-[50%_50%_100%_100%/100%_100%_40%_40%] bg-gradient-to-b from-[#FDF4F5] via-[#FFF0F5] to-white opacity-80"
            style={{
                background: "radial-gradient(ellipse at top, #ffe4e6 0%, #fff1f2 40%, transparent 70%)"
            }}
        />
        {/* Subtle decorative blob */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        
        {/* Mockups positioned absolute relative to container */}
        <div className="relative">
            <MockupLeft />
            <MockupRight />
            
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center max-w-3xl mx-auto space-y-8 mt-10">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Boost Your Connect Rates by <span className="text-brand-purple">10x</span>
                <br />
                with our AI Automated Dialer
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Transcribe live calls with AI and push notes to your CRM.
                <br className="hidden md:block" />
                Get back 10 hours of your time every week.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Button variant="outline" className="h-14 px-8 rounded-full text-lg font-semibold border-2 border-white bg-white/50 backdrop-blur-sm hover:bg-white text-gray-900 shadow-sm transition-all hover:scale-105">
                Schedule Demo
                </Button>
                <Button className="h-14 px-8 rounded-full text-lg font-semibold bg-brand-purple hover:bg-brand-purple-dark text-white shadow-xl shadow-brand-purple/20 transition-all hover:scale-105 group">
                Try For Free
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col items-center gap-3 pt-12">
                <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img 
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                    />
                    </div>
                ))}
                </div>
                <p className="text-sm font-medium text-gray-500">
                Join hundreds of other B2B sales teams and agencies
                </p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
