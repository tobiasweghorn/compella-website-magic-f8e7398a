import React from 'react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import ProcessStep from '@/components/ProcessStep';
import Accordion from '@/components/Accordion';
import ContactForm from '@/components/ContactForm';
import { Users, Activity, LineChart, RefreshCw, Lightbulb, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const LeadershipDevelopment = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white pt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-[40vh]">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compella-gray animate-fade-in">
                {t.leadershipDevHeroTitle}<br />
                <span className="text-compella-teal">{t.leadershipDevHeroSubtitle}</span>
              </h1>
              <p className="text-lg mb-8 text-gray-700 animate-fade-in-up">
                {t.leadershipDevHeroDescription}
              </p>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary">
                  {t.leadershipDevHeroCta}
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img 
                src="/lovable-uploads/4a989efc-7c94-460a-b45b-40bf840611c8.png" 
                alt="Leadership Development" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenges Section */}
      <section className="section-padding colored-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.leadershipDevChallengesTitle}</h2>
            <div className="w-20 h-1 bg-compella-teal mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title={t.leadershipDevChallenge1Title}
              description={t.leadershipDevChallenge1Description}
              icon={<Activity size={48} />}
            />
            <FeatureCard 
              title={t.leadershipDevChallenge2Title}
              description={t.leadershipDevChallenge2Description}
              icon={<Users size={48} />}
            />
            <FeatureCard 
              title={t.leadershipDevChallenge3Title}
              description={t.leadershipDevChallenge3Description}
              icon={<LineChart size={48} />}
            />
          </div>
        </div>
      </section>
      
      {/* Development Journey Section with new image */}
      <section className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.leadershipDevJourneyTitle}</h2>
            <div className="w-20 h-1 bg-compella-teal mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="space-y-8">
              <ProcessStep 
                number={1}
                title={t.leadershipDevJourney1Title}
                description={t.leadershipDevJourney1Description}
              />
              <ProcessStep 
                number={2}
                title={t.leadershipDevJourney2Title}
                description={t.leadershipDevJourney2Description}
              />
              <ProcessStep 
                number={3}
                title={t.leadershipDevJourney3Title}
                description={t.leadershipDevJourney3Description}
              />
              <ProcessStep 
                number={4}
                title={t.leadershipDevJourney4Title}
                description={t.leadershipDevJourney4Description}
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/abc0017a-b26a-4181-b8db-0fd570f51940.png"
                alt="Development Journey" 
                className="rounded-lg shadow-lg max-w-full h-[400px] object-cover"
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

export default LeadershipDevelopment;
