import React from 'react';
import { Target, Users, RefreshCw, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import ProcessStep from '@/components/ProcessStep';
import TeamMember from '@/components/TeamMember';
import ContactForm from '@/components/ContactForm';
import Accordion from '@/components/Accordion';
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import { Link } from 'react-router-dom';

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Navbar />
      
      {/* Hero Section - Updated with reversed gradient */}
      <section className="bg-white pt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-[40vh]">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compella-gray animate-fade-in">
                {t.homeHeroTitle}<br />
                <span className="text-compella-teal">{t.homeHeroSubtitle}</span>
              </h1>
              <p className="text-lg mb-8 text-gray-700 animate-fade-in-up">
                {t.homeHeroDescription}
              </p>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary">
                  {t.getStarted}
                </a>
              </div>
            </div>
            
            {/* Image with Reversed Gradient */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10" />
              <img 
                src="/lovable-uploads/2de4355d-91ec-48c2-b1d1-30127afb8928.png" 
                alt="Transformation Tree" 
                className="rounded-lg w-full h-auto relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.homeServicesTitle}</h2>
            <div className="w-20 h-1 bg-compella-teal mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FeatureCard 
                title={t.homeService1Title}
                description={t.homeService1Description}
                icon={<Target size={48} />}
              />
              <Link to="/leadership-assessment" className="mt-4 text-compella-teal hover:text-compella-teal-dark">
                {language === 'en' ? 'More on assessments' : 'Mehr zu Assessments'}
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <FeatureCard 
                title={t.homeService2Title}
                description={t.homeService2Description}
                icon={<Users size={48} />}
              />
              <Link to="/leadership-development" className="mt-4 text-compella-teal hover:text-compella-teal-dark">
                {language === 'en' ? 'More on leadership development' : 'Mehr zu Leadership Development'}
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <FeatureCard 
                title={t.homeService3Title}
                description={t.homeService3Description}
                icon={<RefreshCw size={48} />}
              />
              <a href="#contact" className="mt-4 text-compella-teal hover:text-compella-teal-dark">
                {language === 'en' ? 'Book a free consultation' : 'Kostenlose Beratung buchen'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding colored-section">
        <div className="container mx-auto px-4">
          <TestimonialSlider />
        </div>
      </section>

      {/* Team Section - Moved above What we build on */}
      <section id="team" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.teamTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.teamDescription}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <TeamMember 
              name="Marcel Häbold"
              position={t.teamPosition1}
              bio={t.teamBio1}
              imageUrl="/lovable-uploads/marcel.jpg"
              linkedInUrl="https://www.linkedin.com/in/marcel-h%C3%A4bold-aa1326153/"
            />
            <TeamMember 
              name="Maximilian Friedle"
              position={t.teamPosition2}
              bio={t.teamBio2}
              imageUrl="/lovable-uploads/maximilian.jpg"
              linkedInUrl="https://www.linkedin.com/in/maximilianfriedle/"
            />
            <TeamMember 
              name="Tobias Weghorn"
              position={t.teamPosition3}
              bio={t.teamBio3}
              imageUrl="/lovable-uploads/tobias.jpg"
              linkedInUrl="https://www.linkedin.com/in/tobiasweghorn/"
            />
            <TeamMember 
              name="Susanne Häbold"
              position={t.teamPosition4}
              bio={t.teamBio4}
              imageUrl="/lovable-uploads/susanne.jpg"
              linkedInUrl="https://www.linkedin.com/in/susanne-h%C3%A4bold-a594b5175/"
            />
          </div>
        </div>
      </section>

      {/* What we build on */}
      <section id="foundation" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <div className="text-compella-teal mb-2 font-medium">{t.homeFoundationSectionTitle}</div>
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.homeFoundationTitle}</h2>
            <p className="text-gray-600">{t.homeFoundationDescription}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/d424b86f-2075-46d9-a933-50405db536cd.png"
                  alt="metaFox Coaching Tools"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="font-semibold mb-3 text-compella-gray">{t.homeFoundation1Title}</h3>
              <p className="text-gray-600">{t.homeFoundation1Description}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/558f50a3-a219-46bc-baf8-f82dcf692fb6.png"
                  alt="Diagnostics & Consulting"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="font-semibold mb-3 text-compella-gray">{t.homeFoundation2Title}</h3>
              <p className="text-gray-600">{t.homeFoundation2Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How our journey could look like - Updated with new image */}
      <section id="journey" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.homeJourneyTitle}</h2>
            <div className="w-20 h-1 bg-compella-teal mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="space-y-8">
              {/* Process steps */}
              <ProcessStep 
                number={1}
                title={t.homeJourney1Title}
                description={t.homeJourney1Description}
              />
              <ProcessStep 
                number={2}
                title={t.homeJourney2Title}
                description={t.homeJourney2Description}
              />
              <ProcessStep 
                number={3}
                title={t.homeJourney3Title}
                description={t.homeJourney3Description}
              />
              <ProcessStep 
                number={4}
                title={t.homeJourney4Title}
                description={t.homeJourney4Description}
              />
              <ProcessStep 
                number={5}
                title={t.homeJourney5Title}
                description={t.homeJourney5Description}
              />
              <ProcessStep 
                number={6}
                title={t.homeJourney6Title}
                description={t.homeJourney6Description}
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/a830d452-1370-4452-9910-a233f544c43f.png" 
                alt="Our Journey" 
                className="rounded-lg shadow-lg max-w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated with new questions */}
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
      
      {/* Updated Footer */}
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
    </div>
  );
};

export default Index;
