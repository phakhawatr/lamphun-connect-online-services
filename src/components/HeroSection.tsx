
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
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
      <div className="relative container mx-auto px-4 md:px-0 py-20 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 thai-text">
          บริการประชาชน
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 thai-text">
          โปร่งใสใส่ใจทุกพื้นที่
        </h2>
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto thai-text">
          ขอใช้บริการออนไลน์ง่ายๆ ด้วยระบบ e-service ทันสมัย ทำงานรวดเร็ว
        </p>
        <div className="flex justify-center">
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
