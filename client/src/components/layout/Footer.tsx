import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          
          {/* Brand Column - Spans 2 cols on large screens */}
          <div className="col-span-2 lg:col-span-2 space-y-4 pr-8">
            <Link href="/" className="inline-block">
                <img 
                  src="/attached_assets/logo_qwalo_-_Edited_1770664578772.png" 
                  alt="Qwalo AI" 
                  className="h-10 w-auto object-contain" 
                />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              AI-powered qualitative research through voice-based interviews
            </p>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
               {/* Column contents removed as requested */}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Solutions</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
               {/* Column contents removed as requested */}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
               {/* Column contents removed as requested */}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
             <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Company</h4>
             <ul className="space-y-3 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-brand-purple transition-colors">Request a Demo</a></li>
                <li><a href="#" className="hover:text-brand-purple transition-colors">LinkedIn</a></li>
             </ul>
          </div>
          
           {/* Legal Column - using a new column if space allows or merging */}
           {/* The previous grid was 6 cols: 2 for brand, 4 for links. We have 5 link categories now.
               Product, Solutions, Resources, Company, Legal.
               That needs 5 columns + 2 branding = 7 columns. 
               Or we can adjust the grid. Let's make it flex or just 6 cols and squeeze?
               Let's just add Legal under Company or make a new column?
               Let's stick to the grid. 
               Let's try to fit Legal in.
           */}
        </div>
        
        {/* Helper for the 5th column if needed, but let's just put Legal next to Company or in a new row if grid wraps */}
        {/* Actually, I'll just add the Legal header to the grid. The grid is lg:grid-cols-6. 
            Brand takes 2. Leaves 4. 
            We have Product, Solutions, Resources, Company, Legal (5 items).
            One will wrap. That's fine.
        */}

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            © 2026 Qwalo. All rights reserved.
          </div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
