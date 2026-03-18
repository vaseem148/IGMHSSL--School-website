import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"}
      `}
    >
      <div className="flex items-center px-6 md:px-12">
        {/* LOGO SECTION */}
        <div className="flex items-center gap-3 backdrop-blur-md bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
          <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center font-bold text-white text-base">
            IG
          </div>
          <div>
            <h1 className="text-base font-bold text-white drop-shadow-lg leading-tight">
              Imam Ghazzali School
            </h1>
            <p className="text-[10px] uppercase tracking-wider text-gray-300">
              Lalpettai
            </p>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="ml-auto flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-gray-200 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ADMISSIONS BUTTON */}
          <a 
            href="#admisstionopen"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-300 transition-transform active:scale-95 shadow-lg inline-block"
          >
            Admissions Open
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;