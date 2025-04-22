
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import TeamMember from '@/components/TeamMember';

const TeamSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="team" className="section-padding pb-8 light-section">
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
            imageUrl="/lovable-uploads/38a2bd3b-3092-4ada-85a3-e8605f6d8e54.png"
            linkedInUrl="https://www.linkedin.com/in/marcel-h%C3%A4bold-aa1326153/"
          />
          <TeamMember 
            name="Tobias Weghorn"
            position={t.teamPosition2}
            bio={t.teamBio2}
            imageUrl="/lovable-uploads/2585bb13-a24c-4419-a6e3-22cbd53d4d1e.png"
            linkedInUrl="https://www.linkedin.com/in/maximilianfriedle/"
          />
          <TeamMember 
            name="Maximilian Friedle"
            position={t.teamPosition3}
            bio={t.teamBio3}
            imageUrl="/lovable-uploads/bc158a9b-d5e3-456e-bbaa-e6c03f63b8e5.png"
            linkedInUrl="https://www.linkedin.com/in/tobiasweghorn/"
          />
          <TeamMember 
            name="Susanne Häbold"
            position={t.teamPosition4}
            bio={t.teamBio4}
            imageUrl="/lovable-uploads/7e4c2fb5-e076-445b-b1f8-6770213246ef.png"
            linkedInUrl="https://www.linkedin.com/in/susanne-h%C3%A4bold-a594b5175/"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
