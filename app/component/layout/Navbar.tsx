// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Star, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/Show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setVisible(true);
      }
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#serveice' },
    { name: 'Portfolio', href: '#PORTFOLIO' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Check if link is active based on pathname
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '#';
    }
    return pathname.startsWith(href) && href !== '#';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transform transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50 10 L90 35 L90 75 L50 95 L10 75 L10 35 Z"
                  fill="#1e3a5f"
                  className="transition-all duration-300 group-hover:fill-orange-500"
                />
                <path
                  d="M50 25 L75 40 L75 70 L50 82 L25 70 L25 40 Z"
                  fill="#f97316"
                  className="transition-all duration-300"
                />
                <path
                  d="M50 40 L62 48 L62 62 L50 68 L38 62 L38 48 Z"
                  fill="#1e3a5f"
                  className="transition-all duration-300 group-hover:fill-white"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                ARTISAN PRO
              </span>
              <span className="text-sm font-semibold text-slate-600 tracking-wide">
                PAINTERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    active
                      ? 'text-orange-500'
                      : 'text-slate-700 hover:text-orange-500'
                  }`}
                >
                  {link.name}
                  
                  {/* Animated underline - improved version */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                  
                  {/* Hover background effect */}
                  <span
                    className={`absolute inset-0 bg-orange-50 rounded-lg transform transition-transform duration-300 -z-10 ${
                      active ? 'scale-100' : 'scale-0 group-hover:scale-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Side - Google Rating, Phone, CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Google Rating */}
            <div className="flex items-center space-x-1 group cursor-pointer">
              <span className="text-sm font-medium text-slate-600 group-hover:text-orange-500 transition-colors">
                Google
              </span>
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400 transform transition-transform duration-200 group-hover:scale-125"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+61494000555"
              className="flex items-center space-x-2 group"
            >
              <div className="p-2 rounded-full bg-slate-100 group-hover:bg-orange-100 transition-colors duration-300">
                <Phone className="w-4 h-4 text-slate-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-orange-500 transition-colors">
                +61 494 000 555
              </span>
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="relative px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  active
                    ? 'bg-orange-50 text-orange-500 border-l-4 border-orange-500'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-orange-500'
                }`}
                style={{
                  animation: isMobileMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="pt-4 border-t border-slate-200 space-y-4">
            <a
              href="tel:+61494000555"
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-100 rounded-lg text-slate-700 font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>+61 494 000 555</span>
            </a>
            <Link
              href="/"
              className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;