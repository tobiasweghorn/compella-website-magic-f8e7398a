
import React from 'react';
import TestimonialCard from './TestimonialCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote: "I worked with Tobi and Max for the last year and their consulting was a game-changer for our business. We identified our 10x growth levers and are on our way with our first organizational chart. Excited to move forward!",
    author: "Johannes Decker",
    position: "Co-founder & CEO at Flatfox",
    rating: 5
  },
  {
    quote: "Eine transformative Erfahrung! Marcel hat uns mit exzellenter Beratung und Coaching durch einen komplexen Transformationsprozess geführt. Marcel Häbold versteht es, die individuellen Bedürfnisse der Führungskräfte zu erkennen und maßgeschneiderte Lösungen anzubieten. In seinen Workshops hat Marcel ein feines Gespür für die Gruppendynamik und kann seine Inhalte und Agenden kurzfristig anpassen. Das sorgte bei uns dafür, dass er genau die Themen angesprochen hat, die uns beschäftigten. Chapeau!",
    author: "Christian W.",
    position: "",
    rating: 5
  },
  {
    quote: "Als Einzelperson habe ich von den Personal Coaching-Sitzungen von Marcel enorm profitiert. Marcel Häbold hat mir geholfen, meine beruflichen Ziele zu klären und meine Selbstwahrnehmung zu verbessern. Die Mischung aus virtuellen und Naturerlebnis-Sitzungen hat eine positive und nachhaltige Veränderung in meinem Leben bewirkt.",
    author: "Svenja M.",
    position: "",
    rating: 5
  }
];

const TestimonialSlider = () => {
  return (
    <div className="relative py-8">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
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
