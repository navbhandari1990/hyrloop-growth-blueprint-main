import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Users, TrendingUp, Star } from 'lucide-react';

const TestimonialsSection = () => {
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

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="text-center">
          <Badge className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-sm font-medium shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-16 rounded-full"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-20 h-20 object-contain mx-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="text-sm text-gray-300 mt-3 font-medium group-hover:text-white transition-colors">{logo.name}</div>
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
