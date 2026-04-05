// components/FeaturesBar.tsx
import { ShieldCheck, Award, MapPin, MessageCircle } from 'lucide-react';

const FeaturesBar = () => {
  return (
    <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl md:p-8 lg:p-10 shadow-sm">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        
        {/* Feature 1 */}
        <div className="flex items-center gap-4 group animate-slide-down" style={{ animationDelay: '0.1s' }}>
          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] group-hover:bg-[#F97316] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-500/30">
            <ShieldCheck className="w-7 h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-base md:text-lg text-[#0B1D3A] group-hover:text-[#F97316] transition-colors duration-300">
              20+ Years Experience
            </span>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4 group animate-slide-down" style={{ animationDelay: '0.2s' }}>
          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] group-hover:bg-[#F97316] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-500/30">
            <Award className="w-7 h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-base md:text-lg text-[#0B1D3A] group-hover:text-[#F97316] transition-colors duration-300">
              Qulux Accredited
            </span>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4 group animate-slide-down" style={{ animationDelay: '0.3s' }}>
          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] group-hover:bg-[#F97316] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-500/30">
            <MapPin className="w-7 h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-base md:text-lg text-[#0B1D3A] group-hover:text-[#F97316] transition-colors duration-300">
              Master Painters Australia
            </span>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center gap-4 group animate-slide-down" style={{ animationDelay: '0.4s' }}>
          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-[#0B1D3A] group-hover:bg-[#F97316] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-500/30">
            <MessageCircle className="w-7 h-7 text-white transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-bold text-base md:text-lg text-[#0B1D3A] group-hover:text-[#F97316] transition-colors duration-300">
              Free Quotes
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesBar;