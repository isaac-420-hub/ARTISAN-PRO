// components/BrandLogos.tsx
const BrandLogos = () => {
  const brands = [
    { name: 'Dulux', style: 'font-bold italic text-3xl md:text-4xl' },
    { name: 'Porters Paints', style: 'font-medium text-xl md:text-2xl' },
    { name: 'TAUBMANS', style: 'font-bold text-2xl md:text-3xl tracking-wide' },
    { name: 'Haymes Paint', style: 'font-serif text-xl md:text-2xl tracking-wider' },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-8">
        <p className="text-center text-sm md:text-base text-slate-400 dark:text-slate-500 font-medium uppercase tracking-widest">
          Trusted by Leading Paint Brands
        </p>
      </div>

      {/* ✅ GRID VIEW - Mobile Only (2x2 layout) */}
      <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-6 px-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors duration-300"
            >
              <span className={`${brand.style.split(' ').filter(c => !c.startsWith('md:')).join(' ')} text-slate-400 dark:text-slate-300 text-center filter grayscale opacity-60 dark:opacity-75`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ CENTERED ROW VIEW - Desktop Only (4 brands, centered, no loop) */}
      <div className="hidden md:block relative">
        {/* Fade edges - Light/Dark variants */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />

        {/* Centered Brands Row */}
        <div className="flex justify-center items-center gap-16 lg:gap-24 px-20">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[180px] lg:min-w-[220px]"
            >
              <span className={`${brand.style} text-slate-400 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300 cursor-default select-none filter grayscale opacity-60 dark:opacity-75 hover:grayscale-0 hover:opacity-100`}>
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