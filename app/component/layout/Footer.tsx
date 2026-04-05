// components/Footer.tsx
import { MapPin, Send, Phone } from 'lucide-react';

// آیکون‌های شبکه‌های اجتماعی به صورت SVG
const FacebookIcon = () => (
  <svg   xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer id='contact' className="w-full bg-[#0B1D3A] pt-16 md:pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 md:mb-16">
          
          {/* Left Side - Info & Map */}
          <div className="opacity-0 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
              Get in Touch
            </h2>

            {/* Map & Address Row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Map Image - Updated */}
              <div className="relative w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7593.337621916543!2d-76.58657918591203!3d39.34385424580931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c805bb6adeb895%3A0x3035e29e2ad87f3f!2sMorgan%20State%20University!5e1!3m2!1sen!2s!4v1775380627549!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale-[20%]"
                  title="Location Map"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-[#061224] rounded-xl p-5 flex-1">
                <h3 className="text-white font-bold mb-2">Office:</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  350 Fifth Avenue,<br />
                  New York, NY 10118
                </p>
              </div>
            </div>

            {/* CTA Banner + Call Button */}
            <div className="bg-[#061224] rounded-xl p-5 text-center space-y-4">
              <p className="text-white text-lg md:text-xl font-medium tracking-wide">
                Contact Today For a <span className="text-[#F97316] font-bold">FREE</span> Quotation!
              </p>
              
              {/* Call Button with Phone Number */}
              <a 
                href="tel:+15415550192" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 group"
              >
                <Phone className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>(541) 555-0192</span>
              </a>
            </div>

            {/* Footer Links - Main Navigation */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
              <a href="/" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">Home</a>
              <a href="#serveice" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">Services</a>
              <a href="#PORTFOLIO" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">Portfolio</a>
              <a href="#about" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">About</a>
              <a href="#contact" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">Contact</a>
            </div>

            {/* Footer Links - Legal */}
            
          </div>

          {/* Right Side - Contact Form */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <form className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all duration-300" />
                <input type="email" placeholder="Email" className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all duration-300" />
                <input type="tel" placeholder="Phone" className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all duration-300" />
                <textarea placeholder="Message" rows={4} className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all duration-300 resize-none" />
                
                <button type="submit" className="w-full py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                  <span>Send Message</span>
                  <Send className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-700/50 mb-8" />

        {/* Bottom Bar - Social Icons & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-700 hover:bg-[#F97316] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <FacebookIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-700 hover:bg-[#F97316] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <InstagramIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-700 hover:bg-[#F97316] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <LinkedinIcon />
            </a>
          </div>

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Artisan Pro Painters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;