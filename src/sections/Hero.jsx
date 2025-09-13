import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProperties = () => {
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Find Your <span className="highlight">Dream Home</span>
            </h1>
            <p className="hero-subtitle">
              Discover premium properties in the most desirable locations. 
              From luxury villas to modern apartments, we have the perfect home for you.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Properties Sold</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProperties}>
                Explore Properties
              </button>
              <button className="btn-secondary">
                Watch Video
              </button>
            </div>
          </div>
          
          <div className="hero-search">
            <div className="search-card">
              <h3>Search Properties</h3>
              <form className="search-form">
                <div className="form-group">
                  <label>Location</label>
                  <select>
                    <option>All Locations</option>
                    <option>Downtown District</option>
                    <option>Business District</option>
                    <option>Residential Area</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Property Type</label>
                  <select>
                    <option>All Types</option>
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Townhouse</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Price Range</label>
                  <select>
                    <option>Any Price</option>
                    <option>Under $500K</option>
                    <option>$500K - $1M</option>
                    <option>$1M - $2M</option>
                    <option>Above $2M</option>
                  </select>
                </div>
                
                <button type="submit" className="btn-search">
                  Search Properties
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
