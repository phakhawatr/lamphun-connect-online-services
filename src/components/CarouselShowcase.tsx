
import React from 'react';
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Experience the thrill of climbing majestic peaks",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    color: "from-blue-500 to-purple-500"
  },
  {
    id: 2,
    title: "Beach Paradise",
    description: "Relax on pristine shores under swaying palms",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 3,
    title: "Desert Safari",
    description: "Explore endless dunes under starlit skies",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 4,
    title: "Forest Retreat",
    description: "Find peace among ancient trees and misty trails",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    color: "from-green-400 to-emerald-600"
  }
];

// Modern Gradient Carousel
const GradientCarousel = () => {
  return (
    <div className="w-full py-12 bg-gray-900">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className={cn(
                "relative h-[500px] rounded-xl overflow-hidden",
                "group cursor-pointer transition-all duration-500"
              )}>
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r",
                  slide.color,
                  "opacity-75 transition-opacity duration-500",
                  "group-hover:opacity-90"
                )} />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className={cn(
                    "text-3xl font-bold mb-2 transform translate-y-8 opacity-0",
                    "group-hover:translate-y-0 group-hover:opacity-100",
                    "transition-all duration-500"
                  )}>
                    {slide.title}
                  </h3>
                  <p className={cn(
                    "transform translate-y-8 opacity-0",
                    "group-hover:translate-y-0 group-hover:opacity-100",
                    "transition-all duration-500 delay-100"
                  )}>
                    {slide.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            onClick={() => document.querySelector('[data-carousel-prev]')?.click()}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            onClick={() => document.querySelector('[data-carousel-next]')?.click()}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

// 3D Card Carousel
const CardCarousel = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className={cn(
                "relative h-[400px] rounded-2xl overflow-hidden",
                "transform transition-transform duration-500 hover:scale-95",
                "hover:rotate-2 cursor-pointer"
              )}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent",
                  "flex flex-col justify-end p-6 text-white",
                  "transform transition-transform duration-500"
                )}>
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm opacity-90">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
        <div className="absolute -left-12 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
            onClick={() => document.querySelector('[data-carousel-prev]')?.click()}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
            onClick={() => document.querySelector('[data-carousel-next]')?.click()}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

export { GradientCarousel, CardCarousel };
