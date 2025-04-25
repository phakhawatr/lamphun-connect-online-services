
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation on component mount
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gray-900">
      {/* The background image container with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content overlay */}
      <div className={`relative container mx-auto px-4 md:px-0 py-20 md:py-32 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className={`text-3xl md:text-5xl font-bold text-white mb-4 thai-text transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          บริการประชาชน
        </h1>
        <h2 className={`text-2xl md:text-4xl font-bold text-white mb-8 thai-text transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          โปร่งใสใส่ใจทุกพื้นที่
        </h2>
        <p className={`text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto thai-text transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          ขอใช้บริการออนไลน์ง่ายๆ ด้วยระบบ e-service ทันสมัย ทำงานรวดเร็ว
        </p>
        <div className={`flex justify-center transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white hover:text-lamphun-dark transition-colors"
          >
            บริการออนไลน์
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
