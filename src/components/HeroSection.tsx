import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm">
              <span className="text-sm font-medium text-gray-700">Strategic HR & Staffing Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Strategic HR
              </span>
              <br />
              <span className="text-gray-800">Growth, day one to</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                IPO journey
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Transform your workforce strategy with our comprehensive HR solutions. From startup foundations to enterprise scaling, we architect talent ecosystems that drive sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300">
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Side - Step Boxes */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            {/* Step Boxes Container */}
            <div className="relative w-full max-w-md">
              {/* Step 1: HR Base */}
              <div className="relative mb-6">
                <div className="w-24 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm text-center">HR<br/>Base</span>
                </div>
              </div>

              {/* Step 2: Staffing Solutions */}
              <div className="relative mb-6 ml-12">
                <div className="w-28 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm text-center">Staffing<br/>Solutions</span>
                </div>
              </div>

              {/* Step 3: GCC Services */}
              <div className="relative mb-6 ml-24">
                <div className="w-32 h-24 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm text-center">GCC<br/>Services</span>
                </div>
              </div>

              {/* Step 4: Strategic Growth */}
              <div className="relative ml-36">
                <div className="w-36 h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm text-center">Strategic<br/>Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
