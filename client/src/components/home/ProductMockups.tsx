import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MoreHorizontal, Zap, Sparkles, Activity, CheckCircle } from "lucide-react";

export function MockupLeft() {
  return (
    <Card className="w-[300px] bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden absolute left-[-150px] top-24 opacity-90 rotate-[-4deg] hover:rotate-0 transition-transform duration-500 hidden xl:block z-10">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <div className="text-xs font-semibold text-gray-500 uppercase">Recent Dials</div>
        <MoreHorizontal className="w-4 h-4 text-gray-400" />
      </div>
      <div className="divide-y">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
              <User className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">Prospect {i}</div>
              <div className="text-xs text-gray-500">Called 2m ago</div>
            </div>
            <Badge variant="secondary" className="text-[10px] bg-green-50 text-green-600">
              Connected
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function MinorCards() {
  return (
    <>
      {/* Top Right Floating Card - Speed */}
      <Card className="absolute right-[5%] top-[20%] w-48 p-4 bg-white/90 backdrop-blur-md shadow-lg border border-white/50 rounded-2xl hidden lg:block rotate-[6deg] hover:rotate-0 transition-all duration-500 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Zap className="w-4 h-4" />
            </div>
            <div>
                <div className="text-xs font-semibold text-gray-500 uppercase">Speed</div>
                <div className="text-sm font-bold text-gray-900">10x Faster</div>
            </div>
        </div>
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 w-[85%]" />
        </div>
      </Card>

      {/* Right Middle - AI Status */}
      <Card className="absolute right-[-20px] top-[45%] w-56 p-4 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl hidden lg:block rotate-[-3deg] hover:rotate-0 transition-all duration-500 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
         <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-lg shadow-brand-purple/30">
                <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex-1">
                <div className="text-sm font-bold text-gray-900 mb-1">AI Assistant</div>
                <div className="text-xs text-gray-500 leading-tight">Transcribing call notes & updating CRM...</div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-medium text-green-600">Active</span>
                </div>
            </div>
         </div>
      </Card>

      {/* Bottom Right - Analytics */}
      <Card className="absolute right-[10%] bottom-[25%] w-40 p-3 bg-white/90 backdrop-blur-md shadow-lg border border-white/50 rounded-2xl hidden xl:block rotate-[4deg] hover:rotate-0 transition-all duration-500 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
         <div className="flex items-center justify-between mb-2">
             <div className="text-[10px] font-semibold text-gray-500">Connect Rate</div>
             <Activity className="w-3 h-3 text-green-500" />
         </div>
         <div className="text-2xl font-bold text-gray-900 mb-1">28%</div>
         <div className="text-[10px] text-green-600 flex items-center gap-1">
             <CheckCircle className="w-3 h-3" /> +12% this week
         </div>
      </Card>
    </>
  );
}
