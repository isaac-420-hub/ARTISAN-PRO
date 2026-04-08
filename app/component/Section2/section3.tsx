// components/AboutSection.tsx

import FeaturesBar from "./section1";
import AboutContent from "./section2";


const AboutSection = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-10 md:py-20 lg:py-5 overflow-hidden">
      
      {/* Top Features Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-12 md:mb-16">
        <FeaturesBar/>
      </div>

      {/* Bottom About Content */}
      <AboutContent/>
    </section>
  );
};

export default AboutSection;