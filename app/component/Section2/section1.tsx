// components/FeaturesBar.tsx
import { ShieldCheck, Award, MapPin, MessageCircle } from "lucide-react";

const FeaturesBar = () => {
  return (
    <div
      id="about"
      className="bg-[#F8FAFC] dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl md:p-8 lg:p-10 shadow-sm dark:shadow-slate-900/20"
    >
      {/* ✅ grid-cols-2 برای موبایل (2 آیتم در هر سطر) + justify-center */}
      <div className="grid grid-cols-2 lg:grid-cols-4 py-10 lg:py-0 md:pt-5 gap-4 md:gap-6 justify-center">
        
        {/* Feature 1 */}
        <div
          className="flex flex-col items-center justify-center gap-2 md:gap-4 group animate-slide-down text-center"
          style={{ animationDelay: "0.1s" }}
        >
          {/* ✅ آیکون باکس */}
          <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] dark:bg-[#1e3a5f] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg dark:shadow-slate-900/40">
            <ShieldCheck className="w-5 h-5 md:w-7 md:h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            {/* ✅ متن با پشتیبانی دارک مود */}
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#0B1D3A] dark:text-slate-200 transition-colors duration-300">
              20+ Years Experience
            </span>
          </div>
        </div>

        {/* Feature 2 */}
        <div
          className="flex flex-col items-center justify-center gap-2 md:gap-4 group animate-slide-down text-center"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] dark:bg-[#1e3a5f] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg dark:shadow-slate-900/40">
            <Award className="w-5 h-5 md:w-7 md:h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#0B1D3A] dark:text-slate-200 transition-colors duration-300">
              Dulux Accredited
            </span>
          </div>
        </div>

        {/* Feature 3 */}
        <div
          className="flex flex-col items-center justify-center gap-2 md:gap-4 group animate-slide-down text-center"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] dark:bg-[#1e3a5f] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg dark:shadow-slate-900/40">
            <MapPin className="w-5 h-5 md:w-7 md:h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#0B1D3A] dark:text-slate-200 transition-colors duration-300">
              Master Painters Australia
            </span>
          </div>
        </div>

        {/* Feature 4 */}
        <div
          className="flex flex-col items-center justify-center gap-2 md:gap-4 group animate-slide-down text-center"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] dark:bg-[#1e3a5f] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg dark:shadow-slate-900/40">
            <MessageCircle className="w-5 h-5 md:w-7 md:h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#0B1D3A] dark:text-slate-200 transition-colors duration-300">
              Free Quotes
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FeaturesBar;