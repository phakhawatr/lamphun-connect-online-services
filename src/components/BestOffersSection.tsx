
import React, { useState } from 'react';
import { useIntersectionObserver } from '@/utils/animations';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const offerData = [
  {
    title: "Prambanan Temple",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bedugul",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Raja Ampat",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80"
  }
];

interface OfferCardProps {
  image: string;
  title: string;
  isVisible: boolean;
  index: number;
}

const OfferCard = ({ image, title, isVisible, index }: OfferCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-lg transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${300 + index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={3/2} className="bg-muted">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </AspectRatio>
      <div className="absolute bottom-0 left-0 right-0 bg-white p-3 text-center font-bold text-xl">
        {title}
      </div>
    </div>
  );
};

const BestOffersSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useIntersectionObserver((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-16 relative bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            BEST OFFERS
          </h2>
          <p className={`text-xl transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Check Out Our Top Rated Tours
          </p>
        </div>

        {/* Mobile carousel view */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {offerData.map((offer, index) => (
                <CarouselItem key={index}>
                  <OfferCard 
                    image={offer.image}
                    title={offer.title}
                    isVisible={isVisible}
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Desktop grid view */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {offerData.map((offer, index) => (
            <OfferCard
              key={index}
              image={offer.image}
              title={offer.title}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Carousel indicator dots */}
      <div className={`flex justify-center mt-8 transition-all duration-700 delay-900 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {offerData.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 mx-1 rounded-full bg-white"
          />
        ))}
      </div>
    </section>
  );
};

export default BestOffersSection;
