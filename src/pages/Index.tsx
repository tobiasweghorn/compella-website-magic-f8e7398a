
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialSlider />
      <TeamSection />
      <FoundationSection />
      <JourneySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
