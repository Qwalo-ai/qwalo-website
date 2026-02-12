import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages, Lightbulb, Search, AudioWaveform, Link2 } from "lucide-react";

export function MockupLeft() {
  return (
    <Card className="w-[340px] bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden absolute left-[-150px] top-24 opacity-95 rotate-[-4deg] hover:rotate-0 transition-transform duration-500 hidden xl:block z-10">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <div className="text-xs font-semibold text-gray-500 uppercase">Live Interview Mockup</div>
        <Badge variant="secondary" className="text-[10px] bg-brand-purple/10 text-brand-purple">In Progress</Badge>
      </div>
      <div className="p-4 space-y-3 text-left">
        <div className="text-xs text-gray-500">Respondent: Bengaluru, Kannada speaker</div>
        <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
          <span className="font-semibold">User:</span> "The checkout is fast, but I am not fully sure about delivery timelines."
        </div>
        <div className="rounded-lg bg-brand-purple/5 border border-brand-purple/20 p-3 text-sm text-gray-700">
          <span className="font-semibold text-brand-purple">AI Deep-dive follow-up:</span> "What made delivery trust a concern, and what proof would make you confident to complete your order?"
        </div>
      </div>
    </Card>
  );
}

export function MinorCards() {
  return (
    <>
      <Card className="absolute right-[5%] top-[20%] w-52 p-4 bg-white/90 backdrop-blur-md shadow-lg border border-white/50 rounded-2xl hidden lg:block rotate-[6deg] hover:rotate-0 transition-all duration-500 z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-brand-purple">
            <AudioWaveform className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase">Voice Analysis</div>
            <div className="text-sm font-bold text-gray-900">Dynamic Probing Active</div>
          </div>
        </div>
      </Card>

      <Card className="absolute right-[-20px] top-[45%] w-60 p-4 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl hidden lg:block rotate-[-3deg] hover:rotate-0 transition-all duration-500 z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
            <Lightbulb className="w-4 h-4 text-amber-500" /> Instant Themes
          </div>
          <div className="text-xs text-gray-500">Affordability, Delivery Trust, and Product Durability surfaced across interviews.</div>
        </div>
      </Card>

      <Card className="absolute right-[10%] bottom-[25%] w-56 p-3 bg-white/90 backdrop-blur-md shadow-lg border border-white/50 rounded-2xl hidden xl:block rotate-[4deg] hover:rotate-0 transition-all duration-500 z-10">
        <div className="flex items-center gap-2 text-[10px] font-semibold text-gray-600 mb-2">
          <Link2 className="w-3 h-3 text-brand-purple" /> Evidence Linking
        </div>
        <div className="space-y-1 text-xs text-gray-600">
          <div className="flex items-center gap-2"><Search className="w-3 h-3 text-gray-400" /> Insight mapped to source clip #14</div>
          <div className="flex items-center gap-2"><Languages className="w-3 h-3 text-gray-400" /> Hindi, Tamil, Marathi supported</div>
        </div>
      </Card>
    </>
  );
}
