
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-compella-gray text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/6323b77a-c58c-4252-aa84-54f684d7532b.png" 
              alt="Compella" 
              className="h-8 invert" 
            />
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://metaFox.eu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-compella-pink transition-colors"
            >
              {language === 'en' ? 'Discover Coaching Tools' : 'Coaching Tools entdecken'}
            </a>
            <Link 
              to="/imprint" 
              className="hover:text-compella-pink transition-colors"
            >
              Imprint
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Compella. {t.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
