
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Users, Handshake, Briefcase, Shield, CheckCircle, CheckCheck, Award, Target } from 'lucide-react';

const AboutSection = () => {
  const expertiseAreas = [
    { name: 'Talent Acquisition', icon: Users },
    { name: 'HR Tech', icon: Briefcase },
    { name: 'Compensation Design', icon: CheckCircle },
    { name: 'Compliance', icon: Shield },
    { name: 'People Strategy', icon: Handshake },
  ];

  const hrSolutions = [
    {
      title: "Scale Your Team Confidently",
      description: "Expert hiring strategies for high-growth startups",
      icon: Target,
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      title: "Compliance Without Complexity",
      description: "Navigate HR regulations with confidence",
      icon: Shield,
      color: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    {
      title: "Build A Winning Culture",
      description: "Create an environment where talent thrives",
      icon: Award,
      color: "bg-gradient-to-r from-amber-500 to-orange-500"
    },
    {
      title: "Future-Proof HR Systems",
      description: "Technology solutions that grow with you",
      icon: CheckCheck,
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hyrloop-blue/10 text-hyrloop-blue hover:bg-hyrloop-blue/20 px-4 py-2 text-sm">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Hyrloop</h2>
          <div className="w-20 h-1 bg-hyrloop-blue mx-auto mb-10 rounded-full"></div>
        </div>

        {/* HR Solution Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {hrSolutions.map((solution, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 text-white shadow-lg transform transition-transform hover:scale-105 ${solution.color}`}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <solution.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="opacity-90">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Team Collaboration" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-hyrloop-blue-dark/10 rounded-lg"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Hyrloop, we bring deep, hands-on HR expertise specifically tailored for startups and scale-ups. 
              We understand that startups face unique challenges when it comes to building and managing their teams.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of HR specialists has worked with companies at every stage—from pre-seed startups to 
              established tech companies—giving us the practical knowledge to help your business grow sustainably.
            </p>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Our Areas of Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg bg-hyrloop-gray hover:bg-hyrloop-blue/10 transition-colors">
                    <area.icon className="w-5 h-5 text-hyrloop-blue" />
                    <span className="text-gray-800 font-medium">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
