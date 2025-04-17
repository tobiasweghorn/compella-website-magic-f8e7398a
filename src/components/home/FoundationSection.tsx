
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const FoundationSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="foundation" className="section-padding light-section">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <div className="text-compella-teal mb-2 font-medium">{t.homeFoundationSectionTitle}</div>
          <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.homeFoundationTitle}</h2>
          <p className="text-gray-600">{t.homeFoundationDescription}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/d424b86f-2075-46d9-a933-50405db536cd.png"
                alt="metaFox Coaching Tools"
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-semibold mb-3 text-compella-gray">{t.homeFoundation1Title}</h3>
            <p className="text-gray-600">{t.homeFoundation1Description}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/558f50a3-a219-46bc-baf8-f82dcf692fb6.png"
                alt="Diagnostics & Consulting"
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-semibold mb-3 text-compella-gray">{t.homeFoundation2Title}</h3>
            <p className="text-gray-600">{t.homeFoundation2Description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
