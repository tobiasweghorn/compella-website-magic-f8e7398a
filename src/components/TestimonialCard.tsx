
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  imageUrl?: string;
  rating?: number;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  imageUrl,
  rating = 5 
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <p className="text-lg font-serif italic mb-6 text-center">"{quote}"</p>
      
      <div className="flex items-center justify-center">
        {imageUrl && (
          <div className="mr-4">
            <img 
              src={imageUrl} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        
        <div>
          <p className="font-bold text-compella-gray">{author}</p>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
      
      {rating > 0 && (
        <div className="flex justify-center mt-4">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
