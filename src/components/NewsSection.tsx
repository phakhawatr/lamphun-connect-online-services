
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useIntersectionObserver } from '@/utils/animations';

interface NewsItemProps {
  title: string;
  date: string;
  image: string;
  url: string;
  isFirst?: boolean;
  index: number;
}

const NewsItem = ({ title, date, image, url, isFirst = false, index }: NewsItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const itemRef = useIntersectionObserver((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  });

  return (
    <Card 
      ref={itemRef as React.RefObject<HTMLDivElement>}
      className={`overflow-hidden border-0 shadow-md h-full transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <CardHeader className="pt-4 pb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="pb-4 pt-0">
        {isFirst ? (
          <Button 
            variant="outline" 
            asChild 
            className="border-lamphun-primary text-lamphun-primary hover:bg-lamphun-primary hover:text-white transition-colors"
          >
            <a href={url}>อ่านเพิ่มเติม</a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
};

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useIntersectionObserver((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  });

  const news = [
    {
      title: "ประกาศองค์การบริหารส่วนจังหวัดลำพูน เรื่อง รับสมัครบุคคลเพื่อสรรหาเป็นพนักงานจ้าง สังกัดองค์การบริหารส่วนจังหวัดลำพูน",
      date: "3 มกราคม 2568",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      url: "#news1",
    },
    {
      title: "ประกาศผลการรประเมินองค์การบริหารส่วนจังหวัดลำพูน ครั้งที่ 1",
      date: "5 มีนาคม 2568",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      url: "#news2",
    },
    {
      title: "เชิญร่วมแสดงความคิดเห็นต่อ ร่างพรบ. รัฐธรรมนูญ ว่าด้วยการปกครองส่วนท้องถิ่น",
      date: "28 กุมภาพันธ์ 2568",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      url: "#news3",
    },
    {
      title: "ประชาสัมพันธ์ จังหวัดลำพูน ท่านสามารถโหลดเอกสารดาวน์โหลดได้ที่นี่เเล้ว",
      date: "13 มกราคม 2568",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      url: "#news4",
    },
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 underline-heading transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>ข่าวสาร</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <NewsItem
              key={index}
              title={item.title}
              date={item.date}
              image={item.image}
              url={item.url}
              isFirst={index === 0}
              index={index}
            />
          ))}
        </div>
        <div className={`text-center mt-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button variant="outline" className="border-lamphun-primary text-lamphun-primary hover:bg-lamphun-primary hover:text-white">
            ดูข่าวทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
