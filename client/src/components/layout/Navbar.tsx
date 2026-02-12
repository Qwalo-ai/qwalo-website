import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "wouter";
import logoUrl from "@assets/logo.png";

const navGroups = [
  { name: "Product", items: ["Features", "How It Works", "Languages Supported", "Security"] },
  { name: "Solutions", items: ["For Marketers", "For Product Managers", "For UX & Research", "For Startups"] },
  { name: "Resources", items: ["Blog", "Research Playbooks", "FAQs"] }
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4">
      <div className="relative bg-white/95 backdrop-blur-sm rounded-full lg:rounded-full shadow-sm border border-gray-100 pl-4 lg:pl-6 pr-2 py-2 flex items-center gap-4 lg:gap-8 max-w-6xl w-full mx-auto transition-all duration-300">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900 cursor-pointer">
          <img src={logoUrl} alt="Qwalo" className="h-8 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          {navGroups.map((group) => (
            <button key={group.name} className="flex items-center gap-1 hover:text-brand-purple transition-colors cursor-pointer bg-transparent border-none p-0">
              {group.name} <ChevronDown className="w-4 h-4 opacity-50" />
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <button
          type="button"
          className="lg:hidden h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/demo" className="text-sm font-semibold text-gray-900 hover:text-brand-purple cursor-pointer">
            Book demo
          </Link>
          <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white rounded-full px-6 h-10 font-semibold shadow-lg shadow-brand-purple/20 cursor-pointer">
            Start Your Study
          </Button>
        </div>

        {mobileOpen && (
          <div className="absolute top-[calc(100%+10px)] left-0 right-0 bg-white rounded-2xl border border-gray-100 shadow-lg p-4 lg:hidden">
            <ul className="space-y-3 text-sm font-medium text-gray-700">
              {navGroups.map((group) => (
                <li key={group.name}>{group.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
