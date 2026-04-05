// components/ServicesSection.tsx
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      title: 'Residential Painting',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      href: '/services/residential',
    },
    {
      title: 'Commercial Painting',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      href: '/services/commercial',
    },
    {
      title: 'Industrial Painting',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop',
      href: '/services/industrial',
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1D3A] text-center mb-10 md:mb-12 opacity-0 animate-fade-down">
          Services
        </h2>

        {/* Top Large Card */}
        <div className="mb-6 md:mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <Link
            href="/services/residential"
            className="group relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden block"
          >
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
              alt="Residential Painting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/90 via-[#0B1D3A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 transform transition-transform duration-500 group-hover:-translate-y-2">
                Residential Painting
              </h3>
              <span className="inline-flex items-center px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg transition-all duration-300 group-hover:bg-[#EA580C] group-hover:shadow-lg group-hover:shadow-orange-500/30 group-hover:-translate-y-1">
                Learn More
                <svg
                  className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Bottom Three Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden block opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/90 via-[#0B1D3A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                <span className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-[#F97316] text-white font-semibold rounded-lg text-sm sm:text-base transition-all duration-300 group-hover:bg-[#EA580C] group-hover:shadow-lg group-hover:shadow-orange-500/30 group-hover:-translate-y-1">
                  Learn More
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;