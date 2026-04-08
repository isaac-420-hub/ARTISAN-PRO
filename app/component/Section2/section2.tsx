// components/AboutContent.tsx
import Image from "next/image";
import { Check } from "lucide-react";

const AboutContent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
        
        {/* Left Side - Text Content */}
        <div className="order-2 lg:order-1">
          <h3
            className="text-sm font-bold text-black dark:text-slate-300 tracking-widest uppercase mb-3 animate-slide-right"
            style={{ animationDelay: "0.5s" }}
          >
            ABOUT US
          </h3>

          {/* Heading - Default Font (Same as other texts) */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1D3A] dark:text-white leading-tight mb-6 animate-slide-right"
            style={{ animationDelay: "0.6s" }}
          >
            Creating Beautiful Spaces, <br className="hidden sm:block" />
            One Wall at a Time
          </h2>

          <p
            className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl animate-slide-right"
            style={{ animationDelay: "0.7s" }}
          >
            Our team of dedicated professionals takes pride in transforming
            homes and businesses with precision and care. We use only the
            highest quality materials and proved techniques to ensure
            long-lasting, beautiful results.
          </p>

          {/* Features List */}
          <ul className="space-y-4 md:space-y-5">
            <li
              className="flex items-center gap-4 group animate-slide-right"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-slate-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-slate-500 transition-all duration-300 shadow-md dark:shadow-slate-900/40 group-hover:shadow-gray-500/40 dark:group-hover:shadow-slate-400/30">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-semibold group-hover:text-[#0B1D3A] dark:group-hover:text-white transition-colors duration-300">
                Licensed & Insured Painters
              </span>
            </li>

            <li
              className="flex items-center gap-4 group animate-slide-right"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-slate-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-slate-500 transition-all duration-300 shadow-md dark:shadow-slate-900/40 group-hover:shadow-gray-500/40 dark:group-hover:shadow-slate-400/30">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-semibold group-hover:text-[#0B1D3A] dark:group-hover:text-white transition-colors duration-300">
                Attention to Detail
              </span>
            </li>

            <li
              className="flex items-center gap-4 group animate-slide-right"
              style={{ animationDelay: "1.0s" }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-slate-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-slate-500 transition-all duration-300 shadow-md dark:shadow-slate-900/40 group-hover:shadow-gray-500/40 dark:group-hover:shadow-slate-400/30">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-semibold group-hover:text-[#0B1D3A] dark:group-hover:text-white transition-colors duration-300">
                Timely Completion
              </span>
            </li>

            <li
              className="flex items-center gap-4 group animate-slide-right"
              style={{ animationDelay: "1.1s" }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-slate-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-slate-500 transition-all duration-300 shadow-md dark:shadow-slate-900/40 group-hover:shadow-gray-500/40 dark:group-hover:shadow-slate-400/30">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-semibold group-hover:text-[#0B1D3A] dark:group-hover:text-white transition-colors duration-300">
                Clean & Tidy Service
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side - Image (Portrait Rectangle) */}
        <div
          className="order-1 lg:order-2 animate-fade-scale"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative w-full aspect-[3/4] md:aspect-[3/3] rounded-3xl overflow-hidden shadow-2xl dark:shadow-slate-900/40 group">
            <Image
              src="/images/Mockup Logo 1.jpg"
              alt="Professional Painter at Work"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay gradient on hover - Dark mode variant */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/60 dark:from-[#0B1D3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutContent;