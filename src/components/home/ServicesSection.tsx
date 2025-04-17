
import React from 'react';
import { Target, Users, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import FeatureCard from '@/components/FeatureCard';

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="section-padding light-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.homeServicesTitle}</h2>
          <div className="w-20 h-1 bg-compella-teal mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FeatureCard 
              title={t.homeService1Title}
              description={t.homeService1Description}
              icon={<Target size={48} />}
            />
            <Link to="/leadership-assessment" className="mt-4 text-compella-teal hover:text-compella-teal-dark">
              {language === 'en' ? 'More on assessments' : 'Mehr zu Assessments'}
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <FeatureCard 
              title={t.homeService2Title}
              description={t.homeService2Description}
              icon={<Users size={48} />}
            />
            <Link to="/leadership-development" className="mt-4 text-compella-teal hover:text-compella-teal-dark">
              {language === 'en' ? 'More on leadership development' : 'Mehr zu Leadership Development'}
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <FeatureCard 
              title={t.homeService3Title}
              description={t.homeService3Description}
              icon={<RefreshCw size={48} />}
            />
            <a href="#contact" className="mt-4 text-compella-teal hover:text-compella-teal-dark">
              {language === 'en' ? 'Book a free consultation' : 'Kostenlose Beratung buchen'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
