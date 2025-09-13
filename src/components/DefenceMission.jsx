import React from 'react';

const DefenceMission = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-defence-dark mb-16">
          Our Mission and Vision
        </h2>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-cover bg-center bg-no-repeat"
                 style={{
                   backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop')`
                 }}>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-defence-dark mb-4">Mission and vision</h3>
              <p className="text-gray-600 leading-relaxed">
                The process begins with an initial consultation where a representative from inspired interiors meets.
              </p>
            </div>
          </div>

          {/* KPIs Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-cover bg-center bg-no-repeat"
                 style={{
                   backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop')`
                 }}>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-defence-dark mb-4">KPIs</h3>
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

export default DefenceMission;
