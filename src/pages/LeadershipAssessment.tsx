
import React from 'react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import ProcessStep from '@/components/ProcessStep';
import Accordion from '@/components/Accordion';
import CalendlyWidget from '@/components/CalendlyWidget';
import Footer from '@/components/home/Footer';
import { CheckCircle, Target, FileBarChart, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const LeadershipAssessment = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="bg-white pt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-[50vh]">
            
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

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/34aa5aaf-8a11-4b58-b430-bf99ddea202b.png" 
                  alt="Leadership Assessment"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding colored-section">
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
      
      <section className="section-padding light-section">
        <div className="container mx-auto px-4">
          <TestimonialSlider />
        </div>
      </section>
      
      <section className="section-padding colored-section">
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
                src="/lovable-uploads/5542954b-0566-4677-80c3-6bc7a0c24076.png"
                alt="Leadership Assessment Process" 
                className="rounded-lg shadow-lg max-w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">{t.faqTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.faqDescription}</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion 
              items={[
                {
                  question: "What is included in the assessment?",
                  answer: "Our comprehensive assessment package includes: 1) A thorough needs assessment to understand your organization's requirements, 2) Customization of your competency model, 3) A full assessment day featuring tailored role-plays and exercises, and 4) A detailed report with clear recommendations."
                },
                {
                  question: "What if the recommended candidate is not a fit?",
                  answer: "We stand behind our recommendations. We only recommend candidates when we are fully convinced of their fit. If a hired candidate leaves within the first 3 months after hire, you receive another assessment completely free of charge. We also offer a money-back guarantee for your peace of mind."
                },
                {
                  question: "How long does the assessment process take?",
                  answer: "The typical timeline from initial contact to final report is 2-3 weeks. The assessment day itself is a full day, and you receive the detailed report within 5 working days after the assessment."
                },
                {
                  question: "Can you assess multiple candidates simultaneously?",
                  answer: "Yes, we can conduct assessments for multiple candidates. Our process is designed to maintain the same high quality whether we're assessing one candidate or a group, ensuring fair and comprehensive evaluation for all."
                }
              ]}
            />
          </div>
        </div>
      </section>
      
      <section className="section-padding colored-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-compella-gray mb-4">{t.contactTitle}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{t.contactDescription}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <CalendlyWidget />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LeadershipAssessment;
