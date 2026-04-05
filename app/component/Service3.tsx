// components/PortfolioSection.tsx
import Image from 'next/image';

const Section3= () => {
  const projects = [
    {
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Modern Kitchen',
    },
    {
      src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'House Exterior',
    },
    {
      src: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Store Front',
    },
    {
      src: 'https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Warehouse',
    },
    {
      src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Interior Space',
    },
    {
      src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Apartment Complex',
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* عنوان بخش */}
        <div className="text-center mb-12 md:mb-16">
          <span className="block text-sm md:text-base font-bold text-slate-400 tracking-widest uppercase mb-2 opacity-0 animate-fade-down">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1D3A] opacity-0 animate-fade-down" style={{ animationDelay: '0.1s' }}>
            Recent Projects
          </h2>
        </div>

        {/* گرید تصاویر - 2 ستونه و 3 ردیفه */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* لایه تاریک روی هاور */}
                <div className="absolute inset-0 bg-[#0B1D3A]/0 group-hover:bg-[#0B1D3A]/20 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section3;