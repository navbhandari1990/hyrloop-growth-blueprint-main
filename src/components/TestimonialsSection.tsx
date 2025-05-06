
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Hyrloop transformed our hiring process. We went from struggling to find the right candidates to having a streamlined pipeline of top talent.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      stars: 5
    },
    {
      quote: "Working with Hyrloop has been a game-changer for our startup. Their strategic guidance on compensation helped us attract and retain key talent in a competitive market.",
      author: "Michael Chen",
      role: "Founder, InnovateCo",
      stars: 5
    },
    {
      quote: "The team at Hyrloop truly understands the unique HR challenges that startups face. Their people-first approach aligned perfectly with our company values.",
      author: "Emily Rodriguez",
      role: "COO, GrowthLabs",
      stars: 5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-20 bg-hyrloop-gray/30 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hyrloop-blue/10 text-hyrloop-blue hover:bg-hyrloop-blue/20 px-4 py-2 text-sm">Client Success</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-hyrloop-blue mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="transition-opacity duration-500">
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 md:p-12">
                  <div className="flex space-x-1 mb-6 justify-center">
                    {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-center text-gray-700 italic mb-8">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                    <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrevious} 
              className="p-2 rounded-full bg-white border border-gray-200 shadow hover:bg-hyrloop-gray transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-hyrloop-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext} 
              className="p-2 rounded-full bg-white border border-gray-200 shadow hover:bg-hyrloop-gray transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
