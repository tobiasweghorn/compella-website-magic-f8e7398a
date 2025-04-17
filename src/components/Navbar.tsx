
import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="/lovable-uploads/6323b77a-c58c-4252-aa84-54f684d7532b.png" alt="Compella" className="h-8" />
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            Services
          </a>
          <a href="#how-it-works" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            How it Works
          </a>
          <a href="#team" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            Team
          </a>
          <a href="#development" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            Development
          </a>
          <a href="#faq" className="text-compella-gray hover:text-compella-teal transition-colors duration-200">
            FAQ
          </a>
        </div>
        
        <a href="#contact" className="hidden md:block btn-primary">
          Get in Touch
        </a>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-compella-gray">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#team" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
            <a 
              href="#development" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Development
            </a>
            <a 
              href="#faq" 
              className="text-compella-gray hover:text-compella-teal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
