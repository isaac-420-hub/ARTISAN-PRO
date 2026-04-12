// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Star, Menu, X, Mail } from 'lucide-react';
import { ThemeToggle } from '@/Them-them';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }
      
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // ✅ تابع کمکی برای بستن منوی موبایل
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#serveice' },
    { name: 'Portfolio', href: '#PORTFOLIO' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href) && href !== '#';
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* ===== TOP BAR ===== */}
        <div className={`${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm dark:bg-slate-950/95' : 'bg-slate-900 dark:bg-slate-950'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end py-2 space-x-6">
              {/* Google Rating */}
              <div className="hidden sm:flex items-center space-x-1">
                <span className="text-xs font-medium text-slate-300 dark:text-slate-400">Google</span>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+61492482088" className="flex items-center space-x-1.5 group">
                <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                  0492 482 088
                </span>
              </a>

              {/* Email */}
              <a href="mailto:info@artisanpropainters.com.au" className="flex items-center space-x-1.5 group">
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors hidden md:inline">
                  sayed@artisanpropainters.com.au
                </span>
                <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors md:hidden">
                   Send Email
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ===== MAIN NAVBAR ===== */}
        <nav className={`${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg dark:bg-slate-800/95 dark:shadow-slate-900/30' : 'bg-white dark:bg-slate-800'} py-5 transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-12 h-12 flex items-center justify-center bg-white dark:bg-white rounded-full p-1.5 transform transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src="/Logo.png" 
                    alt="Artisan Pro Painters Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-slate-800 dark:text-white tracking-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    ARTISAN PRO
                  </span>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 tracking-wide">
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
                          ? 'text-[#e76f51] dark:text-[#e76f51]' 
                          : 'text-slate-700 dark:text-slate-200 hover:text-[#e76f51] dark:hover:text-[#e76f51]'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#e76f51] transition-all duration-300 ease-out ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                      <span className={`absolute inset-0 bg-[#e76f51]/10 dark:bg-[#e76f51]/20 rounded-lg transform transition-transform duration-300 -z-10 ${active ? 'scale-100' : 'scale-0 group-hover:scale-100'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Right Side - Desktop: ThemeToggle + CTA Button */}
              <div className="hidden lg:flex items-center space-x-4">
                <ThemeToggle />
                <Link
                  href="#contact"
                  className="relative px-6 py-3 bg-[#e76f51] text-white font-semibold rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[#e76f51]/30 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Get a Free Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d45a42] to-[#e76f51] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10" />
                </Link>
              </div>

              {/* Mobile: ThemeToggle + Menu Button */}
              <div className="flex lg:hidden items-center space-x-2">
                <ThemeToggle />
                
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-900/50 transition-all duration-300 ease-in-out overflow-hidden ${
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
                    onClick={handleMobileLinkClick} // ✅ اضافه شد: بستن منو با کلیک
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      active 
                        ? 'bg-[#e76f51]/10 dark:bg-[#e76f51]/20 text-[#e76f51] border-l-4 border-[#e76f51]' 
                        : 'text-slate-700 dark:text-slate-200 hover:text-[#e76f51] dark:hover:text-[#e76f51]'
                    }`}
                    style={{ animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none' }}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-4">
                <a 
                  href="tel:+61492482088" 
                  onClick={handleMobileLinkClick} // ✅ برای لینک تلفن هم اضافه شد
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>0492 482 088</span>
                </a>
                <a 
                  href="mailto:sayed@artisanpropainters.com.au" 
                  onClick={handleMobileLinkClick} // ✅ برای لینک ایمیل هم اضافه شد
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>sayed@artisanpropainters.com.au</span>
                </a>
                <Link 
                  href="#contact" 
                  onClick={handleMobileLinkClick} // ✅ برای دکمه CTA هم اضافه شد
                  className="block w-full text-center px-6 py-3 bg-[#e76f51] text-white font-semibold rounded-lg hover:bg-[#d45a42] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-[112px]" /> 

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;