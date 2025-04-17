
import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import Navbar from '@/components/Navbar';
import TestimonialSlider from '@/components/TestimonialSlider';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TeamSection from '@/components/home/TeamSection';
import FoundationSection from '@/components/home/FoundationSection';
import JourneySection from '@/components/home/JourneySection';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <div className="section-padding colored-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-compella-gray">{t.testimonialsTitle}</h2>
          <TestimonialSlider />
        </div>
      </div>
      <JourneySection />
      <TeamSection />
      <FoundationSection />
      <div className="colored-section">
        <FAQSection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
