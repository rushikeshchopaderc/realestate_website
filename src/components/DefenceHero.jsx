import React from 'react';

const DefenceHero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Heading */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
              Welcome to the world of Defence Realtors Group
            </h1>
          </div>

          {/* Right Side - Description and CTA */}
          <div className="text-white">
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
              We aim to be the most desired company for clients and realtors by building lasting relationships and delivering simple, responsive, and innovative home and financial solutions beyond expectations.
            </p>
            
            <button className="bg-white text-defence-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
              <span>Contact Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefenceHero;
