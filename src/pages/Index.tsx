
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import NewsSection from '@/components/NewsSection';
import TourismSection from '@/components/TourismSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServiceSection />
        <NewsSection />
        <TourismSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
