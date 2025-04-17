
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-compella-gray text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/6323b77a-c58c-4252-aa84-54f684d7532b.png" 
              alt="Compella" 
              className="h-8 invert" 
            />
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link 
              to="/" 
              className="hover:text-compella-pink transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/leadership-assessment" 
              className="hover:text-compella-pink transition-colors"
            >
              Assessment
            </Link>
            <Link 
              to="/leadership-development" 
              className="hover:text-compella-pink transition-colors"
            >
              Development
            </Link>
            <Link 
              to="/imprint" 
              className="hover:text-compella-pink transition-colors"
            >
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
