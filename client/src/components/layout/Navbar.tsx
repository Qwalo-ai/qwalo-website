import { Button } from "@/components/ui/button";
import { ChevronDown, Phone } from "lucide-react";
import { Link } from "wouter";
import logoUrl from "@assets/logo.png";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 pl-6 pr-2 py-2 flex items-center gap-8 max-w-6xl w-full mx-auto transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900 mr-4 cursor-pointer">
            <img 
              src={logoUrl} 
              alt="Qwalo" 
              className="h-8 w-auto object-contain" 
            />
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          <button className="flex items-center gap-1 hover:text-brand-purple transition-colors cursor-pointer bg-transparent border-none p-0">
            Product <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <button className="flex items-center gap-1 hover:text-brand-purple transition-colors cursor-pointer bg-transparent border-none p-0">
            Features <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <button className="flex items-center gap-1 hover:text-brand-purple transition-colors cursor-pointer bg-transparent border-none p-0">
            Solutions <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <button className="flex items-center gap-1 hover:text-brand-purple transition-colors cursor-pointer bg-transparent border-none p-0">
            Integrations <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <button className="flex items-center gap-1 hover:text-brand-purple transition-colors cursor-pointer bg-transparent border-none p-0">
            Resources <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <Link href="/pricing" className="hover:text-brand-purple transition-colors cursor-pointer">Pricing</Link>
        </div>

        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/demo" className="text-sm font-semibold text-gray-900 hover:text-brand-purple hidden sm:block cursor-pointer">
              Book demo
          </Link>
          <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white rounded-full px-6 h-10 font-semibold shadow-lg shadow-brand-purple/20 cursor-pointer">
            Try For Free
          </Button>
        </div>
      </div>
    </nav>
  );
}
