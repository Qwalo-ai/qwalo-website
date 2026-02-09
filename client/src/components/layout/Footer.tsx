import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl text-center flex flex-col items-center">
        
        {/* Logo */}
        <Link href="/" className="mb-6 inline-block">
             <img 
              src="/attached_assets/logo_qwalo_-_Edited_1770664578772.png" 
              alt="Qwalo AI" 
              className="h-12 w-auto object-contain mx-auto" 
            />
        </Link>

        {/* Tagline */}
        <p className="text-lg text-gray-900 font-medium mb-10 max-w-lg mx-auto">
          AI-powered qualitative research through voice-based interviews
        </p>

        {/* Links Row 1 */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-4 text-sm font-semibold text-gray-900">
          <a href="#" className="hover:text-brand-purple transition-colors">Product</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Solutions</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Resources</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Company</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Legal</a>
        </div>

        {/* Links Row 2 */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12 text-sm text-gray-600">
          <a href="#" className="hover:text-brand-purple transition-colors">Request a Demo</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-purple transition-colors">LinkedIn</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © 2026 Qwalo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
