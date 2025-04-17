
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <div className={cn("flex flex-col items-center p-6 text-center", className)}>
      <div className="mb-4 text-compella-teal">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-compella-gray">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
