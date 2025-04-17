
import React from 'react';
import TestimonialCard from './TestimonialCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = {
  en: [
    {
      quote: "I worked with Tobi and Max for the last year and their consulting was a game-changer for our business. We identified our 10x growth levers and are on our way with our first organizational chart. Excited to move forward!",
      author: "Johannes Decker",
      position: "Co-Founder & CEO at Feldling GmbH",
      rating: 5
    },
    {
      quote: "Tobias' ability to create interactive and engaging workshops was particularly valued. His expert guidance enabled our participants to gain profound personal and professional insights. His techniques effectively promote self-reflection and perspective change.",
      author: "Benjamin Lambeck",
      position: "Co-founder and Managing Director at Coachingspace",
      rating: 5
    },
    {
      quote: "Maximilian from Metafox really transformed the vision I had of my organization. He helped me draw baselines, job descriptions, RACI matrix, to enhance the communication between the team and myself. Clear roles for everyone, which brought a lot more involvement from everyone as well!",
      author: "Jean-Yves Lontie",
      position: "CEO of Rhizome Network",
      rating: 5
    },
    {
      quote: "As an individual, I benefited enormously from Marcel's personal coaching sessions. Marcel Häbold helped me clarify my career goals and improve my self-perception. The mix of virtual and nature experience sessions brought about a positive and sustainable change in my life.",
      author: "Svenja M.",
      position: "",
      rating: 5
    }
  ],
  de: [
    {
      quote: "Ich habe im letzten Jahr mit Tobi und Max zusammengearbeitet, und ihre Beratung war ein Game-Changer für unser Unternehmen. Wir haben unsere 10x Wachstumshebel identifiziert und sind mit unserem ersten Organigramm auf dem Weg. Ich freue mich auf die weitere Entwicklung!",
      author: "Johannes Decker",
      position: "Co-Founder & CEO bei Feldling GmbH",
      rating: 5
    },
    {
      quote: "Tobias' Fähigkeit, interaktive und einbeziehende Workshops zu gestalten, wurde besonders geschätzt. Seine kompetente Anleitung haben es unseren Teilnehmern ermöglicht, tiefgreifende persönliche und professionelle Einsichten zu gewinnen. Seine Techniken fördern effektiv die Selbstreflexion und den Perspektivenwechsel",
      author: "Benjamin Lambeck",
      position: "Mitgründer und Geschäftsführer von Coachingspace",
      rating: 5
    },
    {
      quote: "Maximilian von Metafox hat die Vision, die ich von meiner Organisation hatte, wirklich transformiert. Er half mir dabei, Grundlinien, Stellenbeschreibungen und RACI-Matrix zu erstellen, um die Kommunikation zwischen dem Team und mir zu verbessern. Klare Rollen für alle, was auch zu viel mehr Engagement von allen führte!",
      author: "Jean-Yves Lontie",
      position: "CEO von Rhizome Network",
      rating: 5
    },
    {
      quote: "Als Einzelperson habe ich von den Personal Coaching-Sitzungen von Marcel enorm profitiert. Marcel Häbold hat mir geholfen, meine beruflichen Ziele zu klären und meine Selbstwahrnehmung zu verbessern. Die Mischung aus virtuellen und Naturerlebnis-Sitzungen hat eine positive und nachhaltige Veränderung in meinem Leben bewirkt.",
      author: "Svenja M.",
      position: "",
      rating: 5
    }
  ]
};

const TestimonialSlider = () => {
  const { language } = useLanguage();
  
  return (
    <div className="relative py-4">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials[language].map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-4/5 lg:basis-3/4">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                rating={testimonial.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex">
          <CarouselPrevious className="left-0 bg-white" />
          <CarouselNext className="right-0 bg-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
