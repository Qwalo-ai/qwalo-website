import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mic, FileText, User, Clock, CheckCircle2, MoreHorizontal } from "lucide-react";

export function MockupLeft() {
  return (
    <Card className="w-[300px] bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden absolute left-[-180px] top-20 opacity-90 rotate-[-4deg] hover:rotate-0 transition-transform duration-500 hidden xl:block">
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

export function MockupRight() {
  return (
    <Card className="w-[380px] bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden absolute right-[-100px] top-32 z-10 rotate-[2deg] hover:rotate-0 transition-transform duration-500 hidden lg:block">
      {/* Header */}
      <div className="h-12 bg-brand-purple/5 border-b border-brand-purple/10 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">CONNECTED</Badge>
          <span className="text-sm font-mono text-gray-500">00:45</span>
        </div>
        <div className="text-xs font-medium text-gray-500">+1 (555) 012-3456</div>
      </div>
      
      {/* Call Content */}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-white shadow-sm overflow-hidden shrink-0">
            <img src="https://ui-avatars.com/api/?name=Jason+Clark&background=random" alt="Jason" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Jason Clark</h3>
            <p className="text-brand-purple font-medium text-sm">Hello, who's speaking?</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b text-xs font-medium text-gray-500 mb-4 pb-1">
          <span className="text-brand-purple border-b-2 border-brand-purple pb-1">Dashboard</span>
          <span>Prospect History</span>
          <span>Account History</span>
          <span>Transcript</span>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Prospect Fields</span>
            </div>
            
            <div className="grid gap-3">
                <div className="bg-gray-50 p-2 rounded border border-gray-100">
                    <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Task Notes</div>
                    <div className="text-sm text-gray-600 italic">Interested in the enterprise plan...</div>
                </div>
                
                 <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-xs text-gray-500">Title</span>
                    <span className="text-xs font-medium">VP of Sales</span>
                </div>
                 <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-xs text-gray-500">Email</span>
                    <span className="text-xs font-medium">jason@company.com</span>
                </div>
            </div>
        </div>

        {/* Floating Action Button */}
        <div className="absolute bottom-6 right-6">
             <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <Mic className="w-6 h-6" />
             </div>
        </div>
      </div>
    </Card>
  );
}
