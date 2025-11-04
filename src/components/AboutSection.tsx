import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Users, Handshake, Briefcase, Shield, CheckCircle, CheckCheck, Award, Target, Sparkles, TrendingUp, Brain, Rocket } from 'lucide-react';

const AboutSection = () => {
  const expertiseAreas = [
    { name: 'Talent Acquisition', icon: Users, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { name: 'HR Tech', icon: Briefcase, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'Compensation Design', icon: CheckCircle, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { name: 'Compliance', icon: Shield, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { name: 'People Strategy', icon: Handshake, color: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
    { name: 'Culture Building', icon: Brain, color: 'bg-gradient-to-r from-teal-500 to-blue-500' },
  ];

  const hrSolutions = [
    {
      title: "Scale Your Team Confidently",
      description: "Expert hiring strategies designed for hypergrowth startups",
      icon: Target,
      color: "bg-gradient-to-br from-pink-500 to-rose-500",
      features: ["Strategic hiring plans", "Candidate pipeline", "Interview optimization"]
    },
    {
      title: "Compliance Without Complexity",
      description: "Navigate HR regulations with confidence and clarity",
      icon: Shield,
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
      features: ["Regulatory compliance", "Policy development", "Risk management"]
    },
    {
      title: "Build A Winning Culture",
      description: "Create an environment where top talent thrives",
      icon: Award,
      color: "bg-gradient-to-br from-amber-500 to-orange-500",
      features: ["Culture assessment", "Values alignment", "Employee engagement"]
    },
    {
      title: "Future-Proof HR Systems",
      description: "Technology solutions that scale with your growth",
      icon: Rocket,
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      features: ["HR tech stack", "Process automation", "Data analytics"]
    }
  ];

  const stats = [
    { number: "500+", label: "Startups Helped" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-hyrloop-blue/10 to-indigo-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-hyrloop-blue to-indigo-600 text-white px-6 py-3 text-sm font-medium shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            About Hyrloop
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-hyrloop-blue to-indigo-600 bg-clip-text text-transparent">
              Transforming Startups Through
            </span>
            <br />
            <span className="bg-gradient-to-r from-hyrloop-blue via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Strategic HR Excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-hyrloop-blue to-indigo-600 mx-auto mb-12 rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="glass-effect rounded-2xl p-6 card-hover">
                <div className="text-4xl font-bold text-hyrloop-blue mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* HR Solution Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {hrSolutions.map((solution, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${solution.color} card-hover group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                    <p className="opacity-90 mb-4 text-lg">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 opacity-80">
                          <CheckCheck className="w-5 h-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-hyrloop-blue/20 to-indigo-600/20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Team Collaboration" 
              className="w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Floating badges */}
            <div className="absolute top-6 left-6 glass-effect rounded-2xl p-4 animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-hyrloop-blue" />
                <span className="text-sm font-semibold text-gray-700">10+ Years</span>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 glass-effect rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-hyrloop-blue" />
                <span className="text-sm font-semibold text-gray-700">500+ Clients</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                At <span className="font-bold text-hyrloop-blue">Hyrloop</span>, we are a team of seasoned HR professionals bringing over a 
                <span className="font-semibold text-hyrloop-blue"> decade of hands-on experience</span> in building and scaling startups. 
                We've been in the trenches, shaping teams from the ground up, navigating rapid growth, and solving complex people challenges.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our expertise spans the full spectrum of HR services, tailored for startups and high-growth companies. We understand the 
                <span className="font-semibold text-hyrloop-blue"> unique demands of fast-moving businesses</span> and offer strategic and operational support across:
              </p>
              
              {/* Key Services List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  "Talent Acquisition & Workforce Planning",
                  "Employer Branding & Talent Marketing", 
                  "Organizational Transition & Restructuring",
                  "Performance Management & OKR Systems",
                  "HR Tech Implementation & Automation",
                  "Job Architecture & Role Benchmarking",
                  "Compensation & Benefits Structuring",
                  "Onboarding & Offboarding Workflows",
                  "Diversity, Equity & Inclusion Initiatives"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 glass-effect rounded-xl p-4 card-hover">
                    <CheckCircle className="w-5 h-5 text-hyrloop-blue flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-hyrloop-blue/10 to-indigo-600/10 rounded-3xl p-8 border border-hyrloop-blue/20">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Whether you're building from scratch or refining existing systems, 
                <span className="font-bold text-hyrloop-blue"> Hyrloop partners with you</span> to design scalable, 
                future-ready HR solutions that align with your business goals. We don't just consult—we 
                <span className="font-bold text-hyrloop-blue"> collaborate, embed, and deliver impact</span>.
              </p>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Areas of Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="group card-hover">
                    <div className={`rounded-2xl p-6 text-white shadow-lg ${area.color} transform group-hover:scale-105 transition-all duration-300`}>
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="bg-white/20 p-3 rounded-full">
                          <area.icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-sm">{area.name}</span>
                      </div>
                    </div>
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