
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, Shield, Zap, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { number: "500+", label: "Startups Helped", icon: Users },
    { number: "95%", label: "Client Satisfaction", icon: TrendingUp },
    { number: "10+", label: "Years Experience", icon: Shield },
    { number: "24h", label: "Response Time", icon: Zap }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-hyrloop-blue/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-hyrloop-blue to-indigo-600 text-white px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                #1 HR Consulting for Startups
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  HR That
                </span>
                <br />
                <span className="bg-gradient-to-r from-hyrloop-blue via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Scales
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  With You
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed">
                Transform your startup's potential with strategic HR solutions designed for 
                <span className="font-semibold text-hyrloop-blue"> hypergrowth</span> — from day one to scale.
              </p>
            </div>

            {/* Dynamic Stats */}
            <div className="flex items-center space-x-8 py-6">
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
                <div className="p-2 rounded-full bg-gradient-to-r from-hyrloop-blue to-indigo-600">
                  {React.createElement(stats[currentStat].icon, { 
                    className: "w-5 h-5 text-white" 
                  })}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stats[currentStat].number}</div>
                  <div className="text-sm text-gray-600">{stats[currentStat].label}</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="group bg-gradient-to-r from-hyrloop-blue to-indigo-600 hover:from-hyrloop-blue-dark hover:to-indigo-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-hyrloop-blue hover:text-hyrloop-blue text-lg px-8 py-6 rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-hyrloop-blue/20 to-indigo-600/20 z-10"></div>
              <img 
                src="/images/hero_banner1.png"
                alt="HR Team Collaboration" 
                className="w-full h-auto object-cover"
              />
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Live Support</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                <div className="text-sm font-medium text-gray-700">✨ Strategic HR Solutions</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-hyrloop-blue rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
