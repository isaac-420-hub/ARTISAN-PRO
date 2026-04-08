// components/Footer.tsx
import { MapPin, Send, Phone, Mail } from 'lucide-react';

// آیکون‌های شبکه‌های اجتماعی به صورت SVG
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
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
              {/* Map Image */}
              <div className="relative w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21543859.113504503!2d121.35459261404685!3d-28.066962512323258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e1!3m2!1sen!2s!4v1775386314726!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%]"
                  title="Location Map - Melbourne VIC, Australia"
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
                  Melbourne VIC,<br />
                  Australia
                </p>
              </div>
            </div>

            {/* CTA Banner + Call Button + Email Link - Stacked Vertically */}
            <div className="bg-[#061224] rounded-xl p-5 text-center flex flex-col items-center gap-4">
              <p className="text-white text-lg md:text-xl font-medium tracking-wide">
                Contact Today For a <span className="text-[#F97316] font-bold">FREE</span> Quotation!
              </p>
              
              {/* Call Button with Phone Number - Color #e76f51 */}
              <a 
                href="tel:+61492482088" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e76f51] hover:bg-[#d45a42] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#e76f51]/30 hover:-translate-y-0.5 group w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>0492 482 088</span>
              </a>

              {/* ✅ Email Link - Native mailto (Server Component Compatible) - Stacked Below Phone */}
              <a 
                href="mailto:info@artisanpropainters.com.au"
                className="flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm underline decoration-slate-500 hover:decoration-white">info@artisanpropainters.com.au</span>
              </a>
            </div>

            {/* Footer Links - Main Navigation */}
            <div className="flex flex-col items-center gap-5 lg:gap-28 md:flex-row md:justify-left md:gap-x-6 md:gap-y-2 mt-6 ">
              <a href="/" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">Home</a>
              <a href="#serveice" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">Services</a>
              <a href="#PORTFOLIO" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">Portfolio</a>
              <a href="#about" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">About</a>
              <a href="#contact" className="text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-300">Contact</a>
            </div>

          </div>

          {/* Right Side - Contact Form with Labels */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <form className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="space-y-4">
                {/* Name Field with Label */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                  <input 
                    id="name"
                    type="text" 
                    placeholder="Your full name" 
                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all duration-300" 
                  />
                </div>

                {/* Email Field with Label */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all duration-300" 
                  />
                </div>

                {/* Phone Field with Label */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                  <input 
                    id="phone"
                    type="tel" 
                    placeholder="1234 567 890" 
                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all duration-300" 
                  />
                </div>

                {/* Message Field with Label */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea 
                    id="message"
                    placeholder="Tell us about your project..." 
                    rows={4} 
                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all duration-300 resize-none" 
                  />
                </div>
                
                {/* Submit Button - Color #e76f51 */}
                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#e76f51] hover:bg-[#d45a42] text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#e76f51]/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
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