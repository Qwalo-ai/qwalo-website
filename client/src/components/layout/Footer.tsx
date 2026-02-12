import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import logoUrl from "@assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <div className="space-y-4 pr-8">
            <Link href="/" className="inline-block">
              <img src={logoUrl} alt="Qwalo AI" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              AI-powered qualitative research through multilingual voice interviews.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-brand-purple transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Use Cases</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Solutions</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Marketers</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">PMs</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">UX Teams</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-brand-purple transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Data Security</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
          <div className="mb-4 md:mb-0">© 2026 Qwalo. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
