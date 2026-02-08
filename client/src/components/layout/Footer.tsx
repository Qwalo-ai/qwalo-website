import { Phone, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-gray-900 cursor-pointer">
                <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center text-white">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                Qwalo AI
            </Link>
            
            <div className="flex flex-col gap-3">
              <span className="text-gray-500 font-medium">Follow us on</span>
              <div className="flex gap-4">
                <a href="#" className="text-gray-900 hover:text-brand-purple transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-900 hover:text-brand-purple transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-lg">Product</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Power Dialer</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Parallel Dialer</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Predictive Dialer</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Ringless Dialer</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Auto Dialer</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-lg">Resources</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Compare</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Country</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-lg">Industries</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-brand-purple transition-colors">B2B Sales</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Pharma</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">HVAC Services</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Car Dealership</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Retail & E-Commerce</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Travel and Hospitality</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Financial Services</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Marketing & Advertising</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Education & E-Learning</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Healthcare</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Book A Demo</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            © copyright qwalo.ai 2026
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <a href="mailto:support@qwalo.ai" className="hover:text-brand-purple transition-colors">support@qwalo.ai</a>
            <a href="#" className="hover:text-brand-purple transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-brand-purple transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
