
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-hyrloop-blue-dark">
            Hyrloop
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 hover:text-hyrloop-blue transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('approach')} 
            className="text-gray-700 hover:text-hyrloop-blue transition-colors"
          >
            Our Approach
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-gray-700 hover:text-hyrloop-blue transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-700 hover:text-hyrloop-blue transition-colors"
          >
            Contact
          </button>
          <Button onClick={() => scrollToSection('contact')} className="bg-hyrloop-blue hover:bg-hyrloop-blue-dark text-white">
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-hyrloop-blue py-2 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('approach')} 
              className="text-gray-700 hover:text-hyrloop-blue py-2 transition-colors"
            >
              Our Approach
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-hyrloop-blue py-2 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-hyrloop-blue py-2 transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-hyrloop-blue hover:bg-hyrloop-blue-dark text-white">
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
