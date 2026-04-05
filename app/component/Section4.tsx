// components/BrandLogos.tsx
const BrandLogos = () => {
  const brands = [
    { name: 'Dulux', style: 'font-bold italic text-3xl md:text-4xl' },
    { name: 'Porters Paints', style: 'font-medium text-xl md:text-2xl' },
    { name: 'TAUBMANS', style: 'font-bold text-2xl md:text-3xl tracking-wide' },
    { name: 'FARROW & BALL', style: 'font-serif text-xl md:text-2xl tracking-wider' },
  ];

  // Duplicate for infinite scroll effect
  const allBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-8">
        <p className="text-center text-sm md:text-base text-slate-400 font-medium uppercase tracking-widest">
          Trusted by Leading Paint Brands
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Brands */}
        <div className="flex animate-marquee">
          {allBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-16 lg:mx-24 flex items-center justify-center min-w-[160px] md:min-w-[200px]"
            >
              <span className={`${brand.style} text-slate-400 hover:text-slate-600 transition-colors duration-300 cursor-default select-none`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;