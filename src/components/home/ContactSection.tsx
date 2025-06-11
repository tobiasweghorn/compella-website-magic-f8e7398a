
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import CalendlyWidget from '@/components/CalendlyWidget';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="section-padding light-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-compella-gray mb-8">{t.contactTitle}</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            <Avatar className="w-32 h-32 mb-4 md:mb-0">
              <AvatarImage 
                src="/lovable-uploads/38a2bd3b-3092-4ada-85a3-e8605f6d8e54.png" 
                alt="Marcel Häbold" 
              />
              <AvatarFallback>MH</AvatarFallback>
            </Avatar>
            
            <div className="text-left max-w-lg">
              <p className="text-gray-600 whitespace-pre-line">{t.contactDescription}</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <CalendlyWidget />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
