
import React from 'react';
import { Button } from '@/components/ui/button';

const TourismSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">
          ท่องเที่ยวลำพูน เปิดประสบการณ์ใหม่<br />
          ออกเดินทางไปพร้อมกัน
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          เที่ยวชมสถานที่ท่องเที่ยวทางศาสนา อาทิพุทธ หรือสถาปัตยกรรมเมืองเก่าแห่งล้านนา 
          สัมผัสประสบการณ์ที่น่าจดจำ ที่จะทำให้คุณประทับใจไม่รู้ลืม
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80" 
              alt="Wat Phra That Hariphunchai" 
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80" 
              alt="Lamphun Landmark" 
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
              alt="Lamphun Landscape" 
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-lamphun-secondary hover:bg-lamphun-accent text-white">
            ท่องเที่ยวลำพูน (เพิ่มเติม)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
