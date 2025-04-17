
import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="/lovable-uploads/6323b77a-c58c-4252-aa84-54f684d7532b.png" alt="Compella" className="h-8" />
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            {t.services}
          </a>
          <a href="#how-it-works" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            {t.howItWorks}
          </a>
          <a href="#team" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            {t.team}
          </a>
          <a href="#development" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            {t.development}
          </a>
          <a href="#faq" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            {t.faq}
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          
          <a href="#contact" className="btn-primary">
            {t.getInTouch}
          </a>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-compella-gray">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {t.services}
            </a>
            <a 
              href="#how-it-works" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {t.howItWorks}
            </a>
            <a 
              href="#team" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {t.team}
            </a>
            <a 
              href="#development" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {t.development}
            </a>
            <a 
              href="#faq" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {t.faq}
            </a>
            
            <div className="flex items-center pt-2">
              <LanguageSwitcher />
            </div>
            
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              {t.getInTouch}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
