
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-compella-gray">{question}</span>
        {isOpen ? <ChevronUp className="text-compella-teal" /> : <ChevronDown className="text-compella-teal" />}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion = ({ items }: AccordionProps) => {
  return (
    <div className="bg-transparent rounded-lg">
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          question={item.question} 
          answer={item.answer} 
        />
      ))}
    </div>
  );
};

export default Accordion;
