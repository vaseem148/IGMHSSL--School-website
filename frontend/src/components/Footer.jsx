import React from 'react';
import { Facebook, Instagram, Youtube, Heart } from 'lucide-react'; // Using lucide-react for icons

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Academics', href: '#' },
    { name: 'Admissions', href: '#' },
    { name: 'Facilities', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <footer className="bg-brand-blue text-white pt-12 pb-6 px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
        
        {/* Column 1: Branding & Mission */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-brand-green rounded-full">
              <span className="text-white font-bold text-sm">IG</span>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold">Imam Ghazzali School</h2>
              <p className="text-gray-400 text-sm">Lalpettai</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Nurturing minds and building character through quality education 
            rooted in values and modern learning methodologies.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social/Connect */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-4">Connect With Us</h3>
          <p className="text-gray-400 text-sm mb-6">
            Stay updated with our latest news and events.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons with circular background */}
            {[
              { icon: <Facebook size={18} />, label: 'F' },
              { icon: <Instagram size={18} />, label: 'I' },
              { icon: <Youtube size={18} />, label: 'Y' }
            ].map((social, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-gray-300 hover:text-white"
              >
                {/* You can use text letters like the image or real icons */}
                <span className="font-bold text-xs">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <p>© 2026 Imam Ghazzali School, Lalpettai. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={14} className="text-yellow-500 fill-yellow-500" /> for education
        </p>
      </div>
    </footer>
  );
};

export default Footer;