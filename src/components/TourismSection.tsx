
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/utils/animations';

const TourismSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const sectionRef = useIntersectionObserver((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  });

  const tourismImages = [
    {
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      alt: "Wat Phra That Hariphunchai"
    },
    {
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
      alt: "Lamphun Landmark"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Lamphun Landscape"
    }
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          ท่องเที่ยวลำพูน เปิดประสบการณ์ใหม่<br />
          ออกเดินทางไปพร้อมกัน
        </h2>
        <p className={`text-center text-gray-600 max-w-3xl mx-auto mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          เที่ยวชมสถานที่ท่องเที่ยวทางศาสนา อาทิพุทธ หรือสถาปัตยกรรมเมืองเก่าแห่งล้านนา 
          สัมผัสประสบการณ์ที่น่าจดจำ ที่จะทำให้คุณประทับใจไม่รู้ลืม
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tourismImages.map((image, index) => (
            <div 
              key={index}
              className={`overflow-hidden rounded-lg shadow-md transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className={`w-full h-64 object-cover transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
              />
            </div>
          ))}
        </div>
        
        <div className={`text-center transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Button className="bg-lamphun-secondary hover:bg-lamphun-accent text-white transform transition-transform hover:scale-105">
            ท่องเที่ยวลำพูน (เพิ่มเติม)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
