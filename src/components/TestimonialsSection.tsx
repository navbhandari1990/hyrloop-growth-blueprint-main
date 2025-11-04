import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Star, Quote, Sparkles, Users, TrendingUp } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Hyrloop transformed our hiring process completely. We went from struggling to find the right candidates to having a streamlined pipeline of top talent that perfectly fits our culture.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      company: "TechStart",
      stars: 5,
      impact: "Reduced hiring time by 60%"
    },
    {
      quote: "Working with Hyrloop has been a game-changer for our startup. Their strategic guidance on compensation helped us attract and retain key talent in a competitive market.",
      author: "Michael Chen",
      role: "Founder, InnovateCo",
      company: "InnovateCo",
      stars: 5,
      impact: "Improved retention by 40%"
    },
    {
      quote: "The team at Hyrloop truly understands the unique HR challenges that startups face. Their people-first approach aligned perfectly with our company values and growth objectives.",
      author: "Emily Rodriguez",
      role: "COO, GrowthLabs",
      company: "GrowthLabs",
      stars: 5,
      impact: "Scaled team 3x in 12 months"
    }
  ];

  const clientLogos = [
    { src: "/images/client_logo.jpeg", alt: "QTEN", name: "QTEN" },
    { src: "/images/sterco_client.png", alt: "Sterco", name: "Sterco" },
    { src: "/images/logo_appzlogic.png", alt: "Appzlogic", name: "Appzlogic" },
    { src: "/images/liberin_logo.png", alt: "Liberin", name: "Liberin" },
    { src: "/images/Mrida hi-res Logo.avif", alt: "Mrida", name: "Mrida" },
    { src: "/images/2careai.svg", alt: "2Care.ai", name: "2Care.ai" }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "50+", label: "Industries", icon: Star }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-hyrloop-blue/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-hyrloop-blue to-indigo-600 text-white px-6 py-3 text-sm font-medium shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent">
              Trusted by Forward-Thinking
            </span>
            <br />
            <span className="bg-gradient-to-r from-hyrloop-blue via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Startups Worldwide
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-hyrloop-blue to-indigo-600 mx-auto mb-12 rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="glass-effect rounded-2xl p-8 card-hover border border-white/10">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-hyrloop-blue to-indigo-600">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-hyrloop-blue mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                    <CardContent className="p-12">
                      <div className="text-center">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-8">
                          <div className="p-4 rounded-full bg-gradient-to-r from-hyrloop-blue to-indigo-600">
                            <Quote className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Stars */}
                        <div className="flex justify-center space-x-1 mb-8">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Quote Text */}
                        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-gray-100">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        {/* Impact Badge */}
                        <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
                          {testimonial.impact}
                        </div>
                        
                        {/* Author */}
                        <div className="border-t border-white/20 pt-8">
                          <div className="text-xl font-bold text-white mb-2">{testimonial.author}</div>
                          <div className="text-hyrloop-blue font-medium">{testimonial.role}</div>
                          <div className="text-gray-400 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <div className="flex space-x-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-gradient-to-r from-hyrloop-blue to-indigo-600 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-12 text-gray-300">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="group">
                <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 card-hover border border-white/10">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-16 h-16 object-contain mx-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="text-xs text-gray-400 mt-2 font-medium">{logo.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;