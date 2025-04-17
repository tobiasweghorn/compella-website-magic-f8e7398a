
import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  iconBgColor?: string;
}

const ProcessStep = ({ 
  number, 
  title, 
  description,
  iconBgColor = "bg-compella-teal" 
}: ProcessStepProps) => {
  return (
    <div className="flex">
      <div className="mr-6">
        <div className={`${iconBgColor} rounded-full h-10 w-10 flex items-center justify-center text-white font-bold`}>
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2 text-compella-gray">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
