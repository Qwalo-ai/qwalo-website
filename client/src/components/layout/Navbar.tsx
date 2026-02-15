import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "wouter";
import logoUrl from "@assets/qwalo-bg.png";

const navGroups = [
  { name: "Product", items: ["Features", "How It Works", "Languages Supported", "Security"] },
  { name: "Solutions", items: ["For Marketers", "For Product Managers", "For UX & Research", "For Startups"] },
  { name: "Resources", items: ["Blog", "Research Playbooks", "FAQs"] },
];

const HOVER_CLOSE_DELAY_MS = 150;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpenGroup(null), HOVER_CLOSE_DELAY_MS);
  };

  const handleTriggerEnter = (groupName: string) => {
    clearCloseTimeout();
    setOpenGroup(groupName);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4">
      <div className="relative bg-white/95 backdrop-blur-sm rounded-full lg:rounded-full shadow-sm border border-gray-100 pl-4 lg:pl-6 pr-2 py-2 flex items-center gap-4 lg:gap-8 max-w-6xl w-full mx-auto transition-all duration-300">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900 cursor-pointer">
          <img src={logoUrl} alt="Qwalo" className="h-8 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          {navGroups.map((group) => (
            <DropdownMenu
              key={group.name}
              open={openGroup === group.name}
              onOpenChange={(open) => setOpenGroup(open ? group.name : null)}
            >
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-brand-purple transition-colors cursor-pointer bg-transparent border-none p-0 outline-none focus:ring-0"
                  onMouseEnter={() => handleTriggerEnter(group.name)}
                  onMouseLeave={scheduleClose}
                >
                  {group.name} <ChevronDown className="w-4 h-4 opacity-50" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-[200px] rounded-2xl border border-gray-200 shadow-lg bg-white p-2"
                onMouseEnter={clearCloseTimeout}
                onMouseLeave={scheduleClose}
              >
                {group.items.map((item) => (
                  <DropdownMenuItem key={item} asChild>
                    <a
                      href="#"
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-purple focus:bg-gray-50 focus:text-brand-purple cursor-pointer"
                    >
                      {item}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
          <Link href="/waitlist">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white rounded-full px-6 h-10 font-semibold shadow-lg shadow-brand-purple/20 cursor-pointer">
              Join Waitlist
            </Button>
          </Link>
          {/* Try for Free – uncomment when ready to use
          <Link href="/sign-up">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white rounded-full px-6 h-10 font-semibold shadow-lg shadow-brand-purple/20 cursor-pointer">
              Try for Free
            </Button>
          </Link>
          */}
        </div>

        {mobileOpen && (
          <div className="absolute top-[calc(100%+10px)] left-0 right-0 bg-white rounded-2xl border border-gray-100 shadow-lg p-4 lg:hidden">
            <ul className="space-y-1 text-sm font-medium text-gray-700">
              {navGroups.map((group) => (
                <li key={group.name}>
                  <span className="block px-2 py-1.5 font-semibold text-gray-900">{group.name}</span>
                  <ul className="ml-3 space-y-0.5 pb-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="block py-1.5 text-gray-600 hover:text-brand-purple">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
              <Link href="/waitlist" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white rounded-full font-semibold">
                  Join Waitlist
                </Button>
              </Link>
              {/* Try for Free – uncomment when ready to use
              <Link href="/sign-up" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white rounded-full font-semibold">
                  Try for Free
                </Button>
              </Link>
              */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
