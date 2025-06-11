
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import CalendlyWidget from '@/components/CalendlyWidget';

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="section-padding light-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-compella-gray mb-4">{t.contactTitle}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{t.contactDescription}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <CalendlyWidget />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
