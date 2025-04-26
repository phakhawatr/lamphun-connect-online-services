
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import AdventureCarousel from '@/components/AdventureCarousel';
import ServiceSection from '@/components/ServiceSection';
import NewsSection from '@/components/NewsSection';
import BestOffersSection from '@/components/BestOffersSection';
import TourismSection from '@/components/TourismSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add padding to body to account for fixed header
  useEffect(() => {
    const updateBodyPadding = () => {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      document.body.style.paddingTop = `${headerHeight}px`;
    };

    // Initial call and event listener for window resize
    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateBodyPadding);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AdventureCarousel />
        <ServiceSection />
        <NewsSection />
        <BestOffersSection />
        <TourismSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
