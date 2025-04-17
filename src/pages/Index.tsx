
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 h-full">
          <img 
            src="/lovable-uploads/632fc182-f9a1-47d3-a06f-cd76afa9e907.png" 
            alt="Colorful plants" 
            className="w-full h-full object-cover opacity-20" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compella-gray animate-fade-in">
              Right person, right seat.<br />
              <span className="text-compella-teal">Promised.</span>
            </h1>
            <p className="text-lg mb-8 max-w-2xl text-gray-700 animate-fade-in-up">
              The Compella Assessment provides deep insights into a candidate's strengths and skills for development. This approach is specifically testing for the role you're recruiting for, ensuring that you're hiring the right person for your organization's needs and goals.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden md:block">
          <img 
            src="/lovable-uploads/6323b77a-c58c-4252-aa84-54f684d7532b.png" 
            alt="Compella Butterfly" 
            className="w-32 opacity-30" 
          />
        </div>
      </section>
      
      {/* Features Section */}
      <section id="services" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Assessing what matters. With accuracy."
              description="Our assessments are designed to identify what truly matters for each unique position in your team. They're built on decades of leadership research and expertise."
              icon={<Target size={48} />}
            />
            <FeatureCard 
              title="Diagnostic reports. Actionable recommendations."
              description="Receive clear, insightful reports that highlight candidate strengths and areas for growth. Each report includes specific, actionable recommendations."
              icon={<FileBarChart size={48} />}
            />
            <FeatureCard 
              title="Efficient Processes. Competitive service."
              description="Save time with streamlined assessment processes. Rapid turnaround times ensure you can make hiring decisions quickly without compromising quality."
              icon={<BarChart3 size={48} />}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="section-padding colored-section">
        <div className="container mx-auto px-4">
          <TestimonialCard 
            quote="I worked with Tobi and Max for the last year and their consulting was a game-changer for our business. We identified our 10x growth levers and are on our way with our first organizational chart. Excited to move forward!"
            author="Johannes Decker"
            position="Co-founder & CEO at Flatfox"
            rating={5}
          />
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">How Our Leadership Assessment Works</h2>
            <div className="w-20 h-1 bg-compella-teal mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="space-y-8">
              <ProcessStep 
                number={1}
                title="Understanding your needs"
                description="We take the time to fully understand your organization's culture, values, and the specific requirements of the leadership role you're filling."
              />
              <ProcessStep 
                number={2}
                title="Adapting your competency model"
                description="Based on your input and our expertise, we customize our assessment approach to evaluate the specific competencies that matter most for success in your context."
              />
              <ProcessStep 
                number={3}
                title="Assessment Center Day"
                description="Your candidates participate in carefully designed scenarios and exercises that reveal their natural leadership tendencies, strengths and development areas."
              />
              <ProcessStep 
                number={4}
                title="Results and Development Plan"
                description="We provide comprehensive reports with clear insights and practical recommendations for both selection decisions and future development."
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/bfa758bf-eeb7-4a4e-afa0-a290492d33ef.png" 
                alt="Team meeting" 
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
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We are experts in people development and organizational development, and we're here to help you build extraordinary teams.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <TeamMember 
              name="David Miller"
              position="Leadership Specialist"
              bio="Over 15 years of experience in executive assessment and leadership coaching."
            />
            <TeamMember 
              name="Rebecca Krauss"
              position="Organizational Psychologist"
              bio="Specializes in team dynamics and creating high-performing organizational cultures."
            />
            <TeamMember 
              name="Tobias Wagnera"
              position="Assessment Expert"
              bio="Developed our proprietary assessment methodology using the latest research."
            />
            <TeamMember 
              name="Sara Richard"
              position="Client Relations"
              bio="Your dedicated point of contact throughout the entire assessment process."
            />
          </div>
        </div>
      </section>
      
      {/* Development Section */}
      <section id="development" className="section-padding light-section">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <div className="text-compella-teal mb-2 font-medium">Our Development Services</div>
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">Inside-out development</h2>
            <p className="text-gray-600">In addition to assessments for selecting perfect candidates, we work to grow your high-potential employees and leaders into outstanding performers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-compella-pink flex items-center justify-center mr-3">
                      <Sparkles size={20} className="text-compella-teal" />
                    </div>
                    <h3 className="font-semibold">Development Center</h3>
                  </div>
                  <p className="text-sm text-gray-600">Structured programs designed to identify and enhance leadership capabilities of your existing talent pool.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-compella-pink flex items-center justify-center mr-3">
                      <Users size={20} className="text-compella-teal" />
                    </div>
                    <h3 className="font-semibold">Team Development</h3>
                  </div>
                  <p className="text-sm text-gray-600">Custom workshops and ongoing support to strengthen team dynamics and collaborative performance.</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center text-compella-teal hover:underline">
                  Contact us <ChevronRight size={16} className="ml-1" />
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
            <h2 className="text-3xl font-bold mb-4 text-compella-gray">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to know about our leadership assessment process.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion 
              items={[
                {
                  question: "How long does an assessment typically take?",
                  answer: "Our standard assessment process takes one full day for the assessment center activities. The preparation and report delivery typically add another week to the complete process. We can also offer accelerated timelines when needed."
                },
                {
                  question: "What's included in the cost?",
                  answer: "Our assessment packages include the pre-assessment consultation, all assessment materials and exercises, facilitator time, comprehensive reports with detailed analysis, and a follow-up consultation to discuss results and recommendations."
                },
                {
                  question: "How many candidates can you assess at once?",
                  answer: "We can assess up to 6 candidates in a single assessment center day. For larger groups, we can arrange multiple sessions or customize a more efficient process depending on your specific needs."
                },
                {
                  question: "Do you offer virtual assessments?",
                  answer: "Yes! We've developed robust virtual assessment methodologies that maintain the quality and depth of insights while accommodating remote participants. Our virtual assessments use secure platforms and are designed to evaluate the same competencies as our in-person centers."
                },
                {
                  question: "Can assessments be customized for our industry?",
                  answer: "Absolutely. We specialize in tailoring our assessments to specific industries and organizational contexts. We'll work closely with you to understand your industry challenges and customize scenarios that reflect real situations your leaders will face."
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
            <h2 className="text-3xl font-bold text-compella-gray mb-4">Get in touch</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Our experts are ready to help! Tell us how.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 max-w-md">
                <img 
                  src="/lovable-uploads/5988edbc-5ead-434e-b8b2-cfbb15e850dd.png"
                  alt="Team collaboration" 
                  className="rounded-lg shadow-sm w-full h-auto" 
                />
                <img 
                  src="/lovable-uploads/4a989efc-7c94-460a-b45b-40bf840611c8.png"
                  alt="Team development" 
                  className="rounded-lg shadow-sm w-full h-auto row-span-2" 
                />
                <img 
                  src="/lovable-uploads/632fc182-f9a1-47d3-a06f-cd76afa9e907.png"
                  alt="Colorful plants" 
                  className="rounded-lg shadow-sm w-full h-auto" 
                />
                <img 
                  src="/lovable-uploads/bfa758bf-eeb7-4a4e-afa0-a290492d33ef.png"
                  alt="Team meeting" 
                  className="rounded-lg shadow-sm w-full h-auto col-span-2" 
                />
              </div>
            </div>
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
            © {new Date().getFullYear()} Compella. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
