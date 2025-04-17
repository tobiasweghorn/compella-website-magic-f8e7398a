
import React from 'react';
import { CheckCircle, Target, FileBarChart, BarChart3, Users, ChevronRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessStep from '@/components/ProcessStep';
import TeamMember from '@/components/TeamMember';
import ContactForm from '@/components/ContactForm';
import Accordion from '@/components/Accordion';
import { Toaster } from "@/components/ui/sonner";
import TestimonialSlider from '@/components/TestimonialSlider';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center min-h-[40vh]">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center pl-6 lg:pl-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compella-gray animate-fade-in">
                {t.heroTitle}<br />
                <span className="text-compella-teal">{t.heroTitleHighlight}</span>
              </h1>
              <p className="text-lg mb-8 text-gray-700 animate-fade-in-up">
                {t.heroDescription}
              </p>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary">
                  {t.getStarted}
                </a>
              </div>
            </div>

            {/* Image - desktop only */}
            <div className="hidden lg:flex w-full lg:w-1/2 justify-end items-center pr-0">
              <div className="w-full max-w-[500px] aspect-[4/5] overflow-hidden">
                <img 
                  src="/lovable-uploads/two plants.png" 
                  alt="two plants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="services" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title={t.feature1Title}
              description={t.feature1Description}
              icon={<Target size={48} />}
            />
            <FeatureCard 
              title={t.feature2Title}
              description={t.feature2Description}
              icon={<FileBarChart size={48} />}
            />
            <FeatureCard 
              title={t.feature3Title}
              description={t.feature3Description}
              icon={<BarChart3 size={48} />}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="section-padding colored-section">
        <div className="container mx-auto px-4">
          <TestimonialSlider />
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.howItWorksTitle}</h2>
            <div className="w-20 h-1 bg-compella-teal mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="space-y-8">
              <ProcessStep 
                number={1}
                title={t.process1Title}
                description={t.process1Description}
              />
              <ProcessStep 
                number={2}
                title={t.process2Title}
                description={t.process2Description}
              />
              <ProcessStep 
                number={3}
                title={t.process3Title}
                description={t.process3Description}
              />
              <ProcessStep 
                number={4}
                title={t.process4Title}
                description={t.process4Description}
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/bfa758bf-eeb7-4a4e-afa0-a290492d33ef.png" 
                alt="Colorful plants" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="section-padding colored-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.teamTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.teamDescription}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <TeamMember 
              name="Marcel Häbold"
              position="Visionary & Lead consultant"
              bio="Leads our consulting practice with strategic vision and deep expertise in organizational development."
              linkedInUrl="https://www.linkedin.com/in/marcel-h%C3%A4bold-aa1326153/"
            />
            <TeamMember 
              name="Maximilian Friedle"
              position="Integrator & Senior Consultant"
              bio="Brings together our solutions and methodologies to deliver cohesive client experiences."
              linkedInUrl="https://www.linkedin.com/in/maximilianfriedle/"
            />
            <TeamMember 
              name="Tobias Weghorn"
              position="Product & Marketing"
              bio="Shapes our product offerings and communicates our value proposition to the market."
              linkedInUrl="https://www.linkedin.com/in/tobiasweghorn/"
            />
            <TeamMember 
              name="Susanne Häbold"
              position="Sales & Client Success"
              bio="Ensures our clients receive exceptional value and achieve their desired outcomes."
              linkedInUrl="https://www.linkedin.com/in/susanne-h%C3%A4bold-a594b5175/"
            />
          </div>
        </div>
      </section>
      
      {/* Development Section */}
      <section id="development" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <div className="text-compella-teal mb-2 font-medium">{t.developmentSectionTitle}</div>
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.developmentTitle}</h2>
            <p className="text-gray-600">{t.developmentDescription}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-compella-pink flex items-center justify-center mr-3">
                      <Sparkles size={20} className="text-compella-teal" />
                    </div>
                    <h3 className="font-semibold">{t.developmentCenter}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{t.developmentCenterDescription}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-compella-pink flex items-center justify-center mr-3">
                      <Users size={20} className="text-compella-teal" />
                    </div>
                    <h3 className="font-semibold">{t.teamDevelopment}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{t.teamDevelopmentDescription}</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center text-compella-teal hover:underline">
                  {t.contactUs} <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/4a989efc-7c94-460a-b45b-40bf840611c8.png" 
                alt="Team development" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                style={{ maxHeight: "350px" }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
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
                },
                {
                  question: t.faq4Question,
                  answer: t.faq4Answer
                },
                {
                  question: t.faq5Question,
                  answer: t.faq5Answer
                }
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-compella-gray mb-4">{t.contactTitle}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{t.contactDescription}</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Footer */}
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
              <a href="#" className="hover:text-compella-pink transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-compella-pink transition-colors">Twitter</a>
              <a href="#" className="hover:text-compella-pink transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-compella-pink transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Compella. {t.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
