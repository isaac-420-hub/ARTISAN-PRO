// components/PortfolioSection.tsx
import Image from 'next/image';

const PortfolioSection = () => {
  return (
    <section id='PORTFOLIO' className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* عنوان بخش */}
        <div className="text-center mb-12 md:mb-16">
          <span className="block text-sm md:text-base font-bold text-slate-400 tracking-widest uppercase mb-2 opacity-0 animate-fade-down">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1D3A] opacity-0 animate-fade-down">
            Recent Projects
          </h2>
        </div>

        {/* گرید تصاویر */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* 1. عکس بالا چپ */}
          <div className="group relative overflow-hidden rounded-2xl cursor-pointer opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10]">
              <Image
                src="/images/Image_in_background_202604051200.jpeg"
                alt="Modern Kitchen"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* 2. عکس بالا راست */}
          <div className="group relative overflow-hidden rounded-2xl cursor-pointer opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10]">
              <Image
                src="/images/Image_in_background_202604051201.jpeg"
                alt="House Exterior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* 3. عکس بزرگ چپ (اشغال 2 ردیف) */}
          {/* h-full باعث می‌شود عکس دقیقاً به اندازه ارتفاع دو عکس سمت راست کش بیاید */}
          <div className="group relative overflow-hidden rounded-2xl cursor-pointer opacity-0 animate-fade-up md:row-span-2 h-full" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full h-full">
              <Image
                src="/images/Image_in_background_202604051208.jpeg"
                alt="Industrial Warehouse"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* 4. عکس وسط راست */}
          <div className="group relative overflow-hidden rounded-2xl cursor-pointer opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10]">
              <Image
                src="/images/Image_background_humans_202604051214.jpeg"
                alt="Store Front"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* 5. عکس پایین راست */}
          <div className="group relative overflow-hidden rounded-2xl cursor-pointer opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10]">
              <Image
                src="/images/Image_in_background_202604051215.jpeg"
                alt="Apartment Complex"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;