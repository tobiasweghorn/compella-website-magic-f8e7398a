
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import ProcessStep from '@/components/ProcessStep';

const JourneySection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="journey" className="section-padding light-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.homeJourneyTitle}</h2>
          <div className="w-20 h-1 bg-compella-teal mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div className="space-y-8">
            <ProcessStep 
              number={1}
              title={t.homeJourney1Title}
              description={t.homeJourney1Description}
            />
            <ProcessStep 
              number={2}
              title={t.homeJourney2Title}
              description={t.homeJourney2Description}
            />
            <ProcessStep 
              number={3}
              title={t.homeJourney3Title}
              description={t.homeJourney3Description}
            />
            <ProcessStep 
              number={4}
              title={t.homeJourney4Title}
              description={t.homeJourney4Description}
            />
            <ProcessStep 
              number={5}
              title={t.homeJourney5Title}
              description={t.homeJourney5Description}
            />
            <ProcessStep 
              number={6}
              title={t.homeJourney6Title}
              description={t.homeJourney6Description}
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/a830d452-1370-4452-9910-a233f544c43f.png" 
              alt="Our Journey" 
              className="rounded-lg shadow-lg max-w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
