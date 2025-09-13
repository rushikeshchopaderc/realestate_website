import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Elite Properties</h2>
            <p className="section-subtitle">
              Your trusted partner in finding the perfect home
            </p>
            
            <div className="about-description">
              <p>
                With over 15 years of experience in the real estate industry, 
                Elite Properties has been helping families find their dream homes 
                and investors discover profitable opportunities. Our team of expert 
                agents combines local market knowledge with cutting-edge technology 
                to deliver exceptional results.
              </p>
              
              <p>
                We pride ourselves on our commitment to transparency, integrity, 
                and personalized service. Every client receives dedicated attention 
                and expert guidance throughout their property journey.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🏆</div>
                <h4>Award Winning</h4>
                <p>Recognized as the best real estate agency for 3 consecutive years</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <h4>Trusted Service</h4>
                <p>Over 500 satisfied clients and counting</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">💼</div>
                <h4>Expert Team</h4>
                <p>Licensed professionals with deep market knowledge</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" 
                alt="Professional real estate team" 
              />
              <div className="image-overlay">
                <div className="stats-card">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
