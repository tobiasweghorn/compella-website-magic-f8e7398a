
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import Accordion from '@/components/Accordion';

const FAQSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="faq" className="section-padding colored-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.faqTitle}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.faqDescription}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            items={[
              {
                question: t.faq1Question,
                answer: t.faq1Answer
              },
              {
                question: t.faq2Question,
                answer: t.faq2Answer
              },
              {
                question: t.faq3Question,
                answer: t.faq3Answer
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
