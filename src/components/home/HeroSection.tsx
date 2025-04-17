
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="bg-white pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-[40vh]">
          <div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compella-gray animate-fade-in">
              {t.homeHeroTitle}<br />
              <span className="text-compella-teal">{t.homeHeroSubtitle}</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 animate-fade-in-up">
              {t.homeHeroDescription}
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a href="#contact" className="btn-primary">
                {t.getStarted}
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10 w-1/2" />
            <img 
              src="/lovable-uploads/2de4355d-91ec-48c2-b1d1-30127afb8928.png" 
              alt="Transformation Tree" 
              className="rounded-lg w-full h-auto relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
