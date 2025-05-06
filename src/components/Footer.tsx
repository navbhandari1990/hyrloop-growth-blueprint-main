import React from 'react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  return <footer className="bg-hyrloop-gray-dark text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Hyrloop</h3>
            <p className="text-gray-300 mb-6">
              Strategic HR solutions for startups — from day one to hypergrowth.
            </p>
            
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('approach')} className="text-gray-300 hover:text-white transition-colors">
                  Our Approach
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-300 hover:text-white transition-colors">Talent Acquisition</li>
              <li className="text-gray-300 hover:text-white transition-colors">Employer Branding</li>
              <li className="text-gray-300 hover:text-white transition-colors">HR Tech Implementation</li>
              <li className="text-gray-300 hover:text-white transition-colors">People Strategy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <address className="not-italic text-gray-300 space-y-3">
              <p>Email: contact@hyrloop.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>123 Startup Street</p>
              <p>Innovation City, 94105</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Hyrloop. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;