
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-hyrloop-gray min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-hyrloop-gray-dark mb-6">
                HR That <span className="text-hyrloop-blue">Scales</span> With You
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-xl">
                Strategic HR solutions for startups — from day one to hypergrowth.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex items-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-hyrloop-blue hover:bg-hyrloop-blue-dark text-white text-lg px-8 py-6 shadow-lg transition-all hover:shadow-xl"
              >
                Book a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-hyrloop-blue text-hyrloop-blue hover:bg-hyrloop-gray text-lg px-8 py-6"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative rounded-xl overflow-hidden shadow-2xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <img 
              src="/images/hero_banner1.png"
              alt="HR Team Collaboration" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-hyrloop-blue-dark/10 rounded-xl"></div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-hyrloop-blue opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
