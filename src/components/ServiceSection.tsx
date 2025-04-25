
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useIntersectionObserver } from '@/utils/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  index: number;
}

const ServiceCard = ({ title, description, buttonText, buttonUrl, index }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const cardRef = useIntersectionObserver((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  });

  return (
    <Card 
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className={`flex flex-col h-full border-0 shadow-lg rounded-lg overflow-hidden transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <CardHeader className="bg-lamphun-light">
        <CardTitle className="text-xl font-bold text-lamphun-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="py-6 flex-grow">
        <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="bg-lamphun-primary hover:bg-lamphun-primary/90 text-white">
          <a href={buttonUrl}>{buttonText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServiceSection = () => {
  const services = [
    {
      title: "ยื่นแบบชำระภาษีออนไลน์",
      description: "ชำระภาษีง่ายๆได้ที่นี่ ไม่ต้องเสียเวลามายังสำนักงานข้อมูลของท่านจะถูกเก็บเป็นความลับ",
      buttonText: "ยื่นแบบภาษี",
      buttonUrl: "#tax",
    },
    {
      title: "ระบบร้องเรียนการทุจริต",
      description: "ต้องการร้องเรียนเรื่องการทุจริตภายในองค์กรหน่วยงานราชการ หรือเจ้าหน้าที่ทุจริต",
      buttonText: "แจ้งเรื่องทุจริต",
      buttonUrl: "#corruption",
    },
    {
      title: "การจองบริการสาธารณะ",
      description: "จองใช้บริการสาธารณะต่างๆ ของ อบจ. มีสถานที่หลากหลาย และบริการมากมายให้เลือกใช้",
      buttonText: "จองใช้บริการ",
      buttonUrl: "#service",
    },
  ];

  return (
    <section className="py-12 bg-white relative -mt-16 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              buttonUrl={service.buttonUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
