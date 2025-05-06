
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Handshake, ArrowUp, Users, Check } from 'lucide-react';

const ApproachSection = () => {
  const pillars = [
    {
      icon: Handshake,
      title: "Collaborative",
      description: "We work as an extension of your team, not just consultants. Your success is our success."
    },
    {
      icon: ArrowUp,
      title: "Scalable",
      description: "Our solutions grow with you, adapting to each new phase of your company's development."
    },
    {
      icon: Check,
      title: "Customizable",
      description: "No cookie-cutter approaches. We tailor our services to your unique needs and culture."
    },
    {
      icon: Users,
      title: "People-First",
      description: "We believe that businesses succeed when their people thrive. Human-centered HR is our core philosophy."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-hyrloop-gray/50 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hyrloop-blue/10 text-hyrloop-blue hover:bg-hyrloop-blue/20 px-4 py-2 text-sm">Our Philosophy</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe that effective HR isn't just about policies and procedures. It's about building 
            a foundation for your company's growth that puts people at the center.
          </p>
          <div className="w-20 h-1 bg-hyrloop-blue mx-auto mt-10 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-hyrloop-blue/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-hyrloop-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
