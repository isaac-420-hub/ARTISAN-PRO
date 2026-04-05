// components/FeaturesBar.tsx
import { ShieldCheck, Award, MapPin, MessageCircle } from 'lucide-react';

const FeaturesBar = () => {
  return (
    <div id="about" className="bg-[#F8FAFC] border border-slate-100 rounded-2xl md:p-8 lg:p-10 shadow-sm">
      {/* ✅ grid-cols-2 برای موبایل (2 آیتم در هر سطر) + justify-center */}
      <div className="grid grid-cols-2 lg:grid-cols-4 py-10 lg:py-0 md:pt-5 gap-4 md:gap-6 justify-center">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4 group animate-slide-down text-center" style={{ animationDelay: '0.1s' }}>
          {/* ✅ آیکون باکس: کوچک در موبایل، بزرگ در دسکتاپ */}
          <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] group-hover:bg-[#F97316] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-500/30">
            {/* ✅ آیکون داخلی: کوچک در موبایل */}
            <ShieldCheck className="w-5 h-5 md:w-7 md:h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            {/* ✅ متن: کوچک در موبایل */}
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#0B1D3A] group-hover:text-[#F97316] transition-colors duration-300">
              20+ Years Experience
            </span>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4 group animate-slide-down text-center" style={{ animationDelay: '0.2s' }}>
          <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] group-hover:bg-[#F97316] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-500/30">
            <Award className="w-5 h-5 md:w-7 md:h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#0B1D3A] group-hover:text-[#F97316] transition-colors duration-300">
              Qulux Accredited
            </span>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4 group animate-slide-down text-center" style={{ animationDelay: '0.3s' }}>
          <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] group-hover:bg-[#F97316] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-500/30">
            <MapPin className="w-5 h-5 md:w-7 md:h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#0B1D3A] group-hover:text-[#F97316] transition-colors duration-300">
              Master Painters Australia
            </span>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4 group animate-slide-down text-center" style={{ animationDelay: '0.4s' }}>
          <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] group-hover:bg-[#F97316] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-500/30">
            <MessageCircle className="w-5 h-5 md:w-7 md:h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#0B1D3A] group-hover:text-[#F97316] transition-colors duration-300">
              Free Quotes
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesBar;