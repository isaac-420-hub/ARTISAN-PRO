// components/WhyChooseUs.tsx
import { Users, ShieldCheck, MapPin, Crown } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Experts:',
      description: 'Highly Skilled Team',
      delay: '0.1s',
    },
    {
      icon: ShieldCheck,
      title: 'Protected:',
      description: 'Fully insured & Licensed',
      delay: '0.2s',
    },
    {
      icon: MapPin,
      title: 'Local Team:',
      description: 'Melbourne Based',
      delay: '0.3s',
    },
    {
      icon: Crown,
      title: 'Proven Perfection:',
      description: '5-Star Reputation',
      delay: '0.4s',
    },
  ];

  return (
    <section className="w-full bg-[#0B1D3A] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 animate-fade-down">
          Why Choose Us
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30 animate-fade-up cursor-default"
                style={{ animationDelay: feature.delay }}
              >
                {/* Icon Container - No color change on hover */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl" />
                  <IconComponent className="relative w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                </div>

                {/* Title - No color change on hover */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description - No color change on hover */}
                <p className="text-base md:text-lg text-slate-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;