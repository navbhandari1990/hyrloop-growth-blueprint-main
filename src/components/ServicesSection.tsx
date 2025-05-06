
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, MessageSquare, Star, ChartBar, Shield, Lightbulb } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Find and attract the right talent for your startup with our comprehensive recruitment strategies."
    },
    {
      icon: Star,
      title: "Employer Branding",
      description: "Build a compelling employer brand that attracts top candidates and reinforces your company culture."
    },
    {
      icon: Briefcase,
      title: "HR Tech Implementation",
      description: "Select and implement the right HR tools and systems to streamline your people operations."
    },
    {
      icon: ChartBar,
      title: "HR Operations",
      description: "Optimize day-to-day HR processes and create efficient workflows that scale with your growth."
    },
    {
      icon: MessageSquare,
      title: "Compensation & Benefits",
      description: "Design competitive and equitable compensation structures that attract and retain talent."
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Navigate complex employment laws and regulations with confidence as you expand your team."
    },
    {
      icon: Lightbulb,
      title: "People Strategy",
      description: "Develop a holistic people strategy aligned with your business goals and company values."
    },
  ];

  return (
    <section id="services" className="py-20 bg-white section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hyrloop-blue/10 text-hyrloop-blue hover:bg-hyrloop-blue/20 px-4 py-2 text-sm">What We Offer</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive HR solutions designed specifically for startups and growing companies. 
            Our services can be engaged individually or as a complete package.
          </p>
          <div className="w-20 h-1 bg-hyrloop-blue mx-auto mt-10 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-hyrloop-blue/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-hyrloop-blue" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
