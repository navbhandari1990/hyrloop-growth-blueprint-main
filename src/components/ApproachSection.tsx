
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Handshake, ArrowUp, Users, Check } from 'lucide-react';


const ApproachSection = () => {
  const pillars = [
    {
      icon: Handshake,
      title: "Listen First",
      description:
        "We start with discovery—understanding your business context, team dynamics, and growth ambitions.",
    },
    {
      icon: ArrowUp,
      title: "Build for Scale",
      description:
        "We focus on creating HR structures and processes that are flexible, future-proof, and ready to grow with you.",
    },
    {
      icon: Check,
      title: "Customize, Not Copy-Paste",
      description:
        "Every company is different. We tailor strategies, frameworks, and tools that work for your needs—not off-the-shelf templates.",
    },
    {
      icon: Users,
      title: "Partner, Not Just Advise",
      description:
        "We don't just recommend—we roll up our sleeves, execute with your teams, and stay accountable for outcomes.",
    },
  ];

  return (
    <section id="approach" className="py-20 bg-hyrloop-gray/50 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hyrloop-blue/10 text-hyrloop-blue hover:bg-hyrloop-blue/20 px-4 py-2 text-sm">
            Our Philosophy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At hyrloop, we believe that great companies are built on strong people foundations. Our
            approach is rooted in understanding your business inside out—its culture, goals, and
            challenges—so we can design HR solutions that are not just strategic, but deeply practical
            and aligned with your stage of growth. We partner closely with founders, leaders, and
            people teams to co-create systems that scale. Our model blends advisory with hands-on
            execution—whether it's hiring your first 10 employees, rolling out HR tech, building
            performance frameworks, or navigating organizational change.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here’s how we work:
          </p>
          <div className="w-20 h-1 bg-hyrloop-blue mx-auto mt-10 rounded-full">
          
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
              <div
                className="w-16 h-16 rounded-full bg-hyrloop-blue/10 flex items-center justify-center mb-6"
              >
                <pillar.icon className="w-8 h-8 text-hyrloop-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {pillar.title}
              </h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
