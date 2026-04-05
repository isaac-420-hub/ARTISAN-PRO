// components/HeroSection.tsx
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-auto py-[200px] min-h-[600px] overflow-hidden bg-slate-900">
      {/* 1. Background Image with Zoom Animation */}
      <div className="absolute inset-0 z-0 animate-zoom-slow">
        <Image
          src="/images/Need_the_exact_202604051152.jpg" // ✅ مسیر لوکال: عکس را در public/images/hero-bg.jpg قرار دهید
          alt="Modern House Painting"
          fill
          priority
          className="object-cover object-right md:object-center"
        />
      </div>

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B1D3A] via-[#0B1D3A]/80 to-transparent md:via-[#0B1D3A]/60 md:to-transparent" />

      {/* 3. Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center">
        <div className="max-w-3xl pt-20 md:pt-0">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight animate-fade-up">
            <span className="whitespace-nowrap">Transform Your Space with</span>{" "}
            <br className="hidden md:block" />
            Melbourne's Expert Painters
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed animate-fade-up-delay-1">
            Quality professional painting services for residential and
            commercial properties. We deliver precision, style, and lasting
            results with expert workmanship.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            {/* Primary Button (Orange) */}
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-lg text-center transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
            >
              Get a Free Quote
            </a>

            {/* Secondary Button (Outline White) */}
            <a
              href="tel:+61494000555"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-lg text-center hover:bg-white hover:text-[#0B1D3A] transition-all duration-300 hover:-translate-y-1"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;