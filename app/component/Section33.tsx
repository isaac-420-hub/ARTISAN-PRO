import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const reviews = [
    {
      text: '"The team was respectful to our home and belongings. The walls look brand new. Highly recommend!"',
      name: 'John D.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      text: '"Transformative work on our office. Great communication and execution!"',
      name: 'Sarah M.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      text: '"Professional, punctual, and perfect results. They turned our dull walls into a masterpiece."',
      name: 'Mike T.',
      image: 'https://randomuser.me/api/portraits/men/85.jpg',
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="block text-sm md:text-base font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase mb-2 opacity-0 animate-fade-down">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1D3A] dark:text-white opacity-0 animate-fade-down" style={{ animationDelay: '0.1s' }}>
            What Our Clients Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-[0_30px_40px_-10px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_40px_-10px_rgba(0,0,0,0.3)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-700 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Stars and Google Logo */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                {/* Google Logo with brand colors */}
                <span className="text-xl font-bold tracking-tight select-none">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
              </div>

              {/* Review Text */}
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                {review.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50 dark:border-slate-700">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-[#0B1D3A] dark:text-white text-lg">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;