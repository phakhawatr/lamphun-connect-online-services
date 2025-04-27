
import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

interface SlideType {
  id: number;
  title: string;
  tagline: string;
  description: string;
  mainImage: string;
  thumbnailImage: string;
}

const slides: SlideType[] = [
  {
    id: 1,
    title: "TRAVEL FAR, FIND YOURSELF",
    tagline: "Embark On The Journey Of A Lifetime",
    description: "Embark On A Thrilling Adventure Across Diverse Landscapes With Us. Explore Pristine Beaches And Lush Rainforests While Immersing Yourself In Local Cultures. Join Us For Unique, Unforgettable Experiences You'll Treasure Forever!",
    mainImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    thumbnailImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "DISCOVER WILDLIFE WONDERS",
    tagline: "Connect With Nature's Creatures",
    description: "Venture Into The Heart Of Lush Jungles And Encounter Extraordinary Wildlife In Their Natural Habitats. Our Expert Guides Will Lead You Through Pristine Ecosystems For Close Encounters With Fascinating Creatures While Ensuring Conservation Remains A Priority.",
    mainImage: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
    thumbnailImage: "https://images.unsplash.com/photo-1501286353178-1ec881214838?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "DESERT SAFARI EXPEDITION",
    tagline: "Conquer Majestic Sand Dunes",
    description: "Experience The Mystique Of Vast Desert Landscapes On Our Signature Camel Treks. Witness Breathtaking Sunsets Over Golden Dunes, Camp Under Star-Filled Skies, And Learn About Ancient Desert Cultures From Local Nomadic Guides.",
    mainImage: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    thumbnailImage: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "ALPINE PEAK ADVENTURES",
    tagline: "Challenge The Mountain Summits",
    description: "Take On The World's Most Spectacular Mountain Ranges With Our Expert Climbing Teams. Whether You're A Novice Or Seasoned Mountaineer, Our Tailored Expeditions Offer Thrilling Ascents, Breathtaking Views, And The Ultimate Sense Of Achievement.",
    mainImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    thumbnailImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const AdventureCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pauseAutoplay, setPauseAutoplay] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Format slide index to display as "01", "02", etc.
  const formatSlideIndex = (index: number) => {
    return (index + 1).toString().padStart(2, '0');
  };

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Handle auto-rotation
  useEffect(() => {
    if (!emblaApi || pauseAutoplay) return;
    
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, pauseAutoplay]);

  // Track selected slide index
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Component mount check for animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden bg-gray-900 text-white"
      onMouseEnter={() => setPauseAutoplay(true)}
      onMouseLeave={() => setPauseAutoplay(false)}
      aria-label="Adventure destinations carousel"
    >
      {/* Main carousel container */}
      <div ref={emblaRef} className="overflow-hidden h-[700px] md:h-[600px]">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className="relative flex-grow-0 flex-shrink-0 w-full h-full"
              style={{
                flexBasis: '100%',
              }}
            >
              {/* Background image with overlay and zoom effect */}
              <div 
                className={`absolute inset-0 bg-center bg-cover transition-transform duration-700 ${selectedIndex === index ? 'scale-105' : 'scale-100'}`}
                style={{ 
                  backgroundImage: `url(${slide.mainImage})`,
                  transition: 'transform 6s ease-in-out'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              
              <div className="container mx-auto h-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  {/* Left side - Main content */}
                  <div className="flex flex-col justify-center z-10 space-y-6">
                    <span 
                      className={`text-lg md:text-xl opacity-0 ${isMounted && selectedIndex === index ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '0.3s' }}
                    >
                      {slide.tagline}
                    </span>
                    
                    <h2 
                      className={`text-4xl md:text-6xl font-bold leading-tight opacity-0 ${isMounted && selectedIndex === index ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '0.6s' }}
                    >
                      {slide.title}
                    </h2>
                    
                    <p 
                      className={`text-sm md:text-base max-w-xl opacity-0 ${isMounted && selectedIndex === index ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '0.9s' }}
                    >
                      {slide.description}
                    </p>
                    
                    <div className={`flex space-x-4 items-center opacity-0 ${isMounted && selectedIndex === index ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '1.2s' }}
                    >
                      <Button 
                        className="bg-gray-900 bg-opacity-70 hover:bg-gray-800 text-white border border-gray-700 px-8 py-6 hover-scale"
                        aria-label="Start your adventure"
                      >
                        START YOUR ADVENTURE
                      </Button>
                      
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-gray-900">
                        <AlertCircle size={24} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Thumbnails */}
                  <div className="hidden md:flex flex-col justify-center items-end z-10">
                    <div className="grid grid-cols-2 gap-4 max-w-md">
                      {slides.map((thumbSlide, thumbIndex) => (
                        <div 
                          key={thumbSlide.id}
                          onClick={() => scrollTo(thumbIndex)}
                          className={cn(
                            "relative cursor-pointer overflow-hidden rounded-lg w-36 h-36 transition-all duration-300 hover:scale-105",
                            selectedIndex === thumbIndex ? "ring-4 ring-yellow-500 ring-opacity-70" : "opacity-70"
                          )}
                          aria-label={`View ${thumbSlide.title.toLowerCase()} adventure`}
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src={thumbSlide.thumbnailImage}
                            alt={`Thumbnail for ${thumbSlide.title}`}
                            className="w-full h-full object-cover"
                          />
                          {selectedIndex === thumbIndex && (
                            <div className="absolute inset-0 bg-yellow-500 bg-opacity-20 animate-pulse-soft"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-4">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-40 transition-all text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 stroke-2" />
        </button>
        
        {/* Progress bar */}
        <div className="relative w-40 h-1 bg-white bg-opacity-30">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-in-out"
            style={{ width: `${((selectedIndex + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
        
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-40 transition-all text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 stroke-2" />
        </button>
        
        <div className="w-16 text-3xl font-bold">
          {formatSlideIndex(selectedIndex)}
        </div>
      </div>
      
      {/* Accessibility controls */}
      <div className="sr-only">
        <button onClick={() => setPauseAutoplay(!pauseAutoplay)}>
          {pauseAutoplay ? "Resume" : "Pause"} slideshow
        </button>
        <select aria-label="Go to slide" onChange={(e) => scrollTo(parseInt(e.target.value, 10))}>
          {slides.map((slide, index) => (
            <option key={slide.id} value={index}>
              Slide {index + 1}: {slide.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AdventureCarousel;
