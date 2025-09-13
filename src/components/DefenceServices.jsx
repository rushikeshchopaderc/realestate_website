import React from 'react';

const DefenceServices = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-defence-dark mb-4 lg:mb-0">
            Services And News
          </h2>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <p className="text-lg text-defence-dark font-medium">
              Designing Interiors That Leave a Lasting Impression
            </p>
            <button className="bg-white border border-gray-300 p-3 rounded hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-defence-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tax Services */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-cover bg-center bg-no-repeat"
                 style={{
                   backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop')`
                 }}>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-defence-dark mb-4">Tax Services</h3>
              <p className="text-gray-600 leading-relaxed">
                The process begins with an initial consultation where a representative from inspired interiors meets.
              </p>
            </div>
          </div>

          {/* Defence News */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-cover bg-center bg-no-repeat"
                 style={{
                   backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop')`
                 }}>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-defence-dark mb-4">Defence News</h3>
              <p className="text-gray-600 leading-relaxed">
                The process begins with an initial consultation where a representative from inspired interiors meets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefenceServices;
