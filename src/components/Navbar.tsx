import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Sparkles } from 'lucide-react';

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

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Our Approach', id: 'approach' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-md py-3 border-b border-gray-100' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a 
            href="#" 
            className="transition-transform duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src="/images/logo_hyrloop.webp" 
              alt="Hyrloop Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className={`relative font-medium transition-all duration-300 group ${
                isScrolled ? 'text-gray-700 hover:text-hyrloop-blue' : 'text-gray-800 hover:text-hyrloop-blue'
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-hyrloop-blue to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="bg-gradient-to-r from-hyrloop-blue to-indigo-600 hover:from-hyrloop-blue-dark hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-4 h-4 mr-2" />
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
            isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-800 hover:bg-white/20'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden`}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
          <div className="flex flex-col space-y-2 p-6">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="text-left py-3 px-4 text-gray-700 hover:text-hyrloop-blue hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-hyrloop-blue to-indigo-600 hover:from-hyrloop-blue-dark hover:to-indigo-700 text-white shadow-lg"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;