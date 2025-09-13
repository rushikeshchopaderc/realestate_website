import React from 'react';

const DefenceTeam = () => {
  const teamMembers = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: 'Design Development',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop'
  }));

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-defence-dark mb-16">
          Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center bg-no-repeat"
                   style={{ backgroundImage: `url('${member.image}')` }}>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-defence-dark mb-4">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  The process begins with an initial consultation where a representative from inspired interiors meets.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefenceTeam;
