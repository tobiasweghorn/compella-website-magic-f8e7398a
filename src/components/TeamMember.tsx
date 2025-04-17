
import React from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  imageUrl?: string;
  linkedInUrl?: string;
}

const TeamMember = ({ name, position, bio, imageUrl, linkedInUrl }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-40 h-40 object-cover rounded-full border-2 border-compella-teal"
          />
        ) : (
          <div className="w-40 h-40 bg-compella-pink rounded-full flex items-center justify-center text-compella-gray text-2xl font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>
      
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-compella-teal mb-2">{position}</p>
      <p className="text-sm text-gray-600 mb-3">{bio}</p>
      
      {linkedInUrl && (
        <a 
          href={linkedInUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-compella-teal transition-colors"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <Linkedin size={20} />
        </a>
      )}
    </div>
  );
};

export default TeamMember;
