
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations } from '@/utils/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-compella-gray hover:text-compella-teal"
    >
      <Globe size={18} />
      <span className="hidden md:inline">
        {language === 'en' ? 'DE' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
