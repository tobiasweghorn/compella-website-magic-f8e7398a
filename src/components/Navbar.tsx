import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();

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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={scrollToTop}>
          <img src="/lovable-uploads/6323b77a-c58c-4252-aa84-54f684d7532b.png" alt="Compella" className="h-8" />
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`text-compella-gray hover:text-compella-teal transition-colors duration-200 ${
              location.pathname === '/' ? 'text-compella-teal' : ''
            }`}
            onClick={scrollToTop}
          >
            {t.home}
          </Link>
          <Link 
            to="/leadership-assessment" 
            className={`text-compella-gray hover:text-compella-teal transition-colors duration-200 ${
              location.pathname === '/leadership-assessment' ? 'text-compella-teal' : ''
            }`}
            onClick={scrollToTop}
          >
            {t.leadershipAssessment}
          </Link>
          <Link 
            to="/leadership-development" 
            className={`text-compella-gray hover:text-compella-teal transition-colors duration-200 ${
              location.pathname === '/leadership-development' ? 'text-compella-teal' : ''
            }`}
            onClick={scrollToTop}
          >
            {t.leadershipDevelopment}
          </Link>
          
          {location.pathname === '/' && (
            <>
              <a href="#team" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
                {t.team}
              </a>
              <a href="#faq" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
                {t.faq}
              </a>
            </>
          )}
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
      
      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => {
                handleLinkClick();
                scrollToTop();
              }}
            >
              {t.home}
            </Link>
            <Link 
              to="/leadership-assessment" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => {
                handleLinkClick();
                scrollToTop();
              }}
            >
              {t.leadershipAssessment}
            </Link>
            <Link 
              to="/leadership-development" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => {
                handleLinkClick();
                scrollToTop();
              }}
            >
              {t.leadershipDevelopment}
            </Link>
            
            {location.pathname === '/' && (
              <>
                <a 
                  href="#team" 
                  className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
                  onClick={() => {
                    handleLinkClick();
                    scrollToTop();
                  }}
                >
                  {t.team}
                </a>
                <a 
                  href="#faq" 
                  className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
                  onClick={() => {
                    handleLinkClick();
                    scrollToTop();
                  }}
                >
                  {t.faq}
                </a>
              </>
            )}
            
            <div className="flex items-center pt-2">
              <LanguageSwitcher />
            </div>
            
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => {
                handleLinkClick();
                scrollToTop();
              }}
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
