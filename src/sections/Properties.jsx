import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties, propertyTypes, locations } from '../data/properties';
import './Properties.css';

const Properties = () => {
  const [selectedType, setSelectedType] = useState('All Properties');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [priceRange, setPriceRange] = useState('Any Price');

  const filteredProperties = properties.filter(property => {
    const typeMatch = selectedType === 'All Properties' || property.type === selectedType;
    const locationMatch = selectedLocation === 'All Locations' || property.location === selectedLocation;
    
    // Simple price filtering (you can enhance this)
    let priceMatch = true;
    if (priceRange !== 'Any Price') {
      const price = parseInt(property.price.replace(/[$,]/g, ''));
      switch (priceRange) {
        case 'Under $500K':
          priceMatch = price < 500000;
          break;
        case '$500K - $1M':
          priceMatch = price >= 500000 && price <= 1000000;
          break;
        case '$1M - $2M':
          priceMatch = price >= 1000000 && price <= 2000000;
          break;
        case 'Above $2M':
          priceMatch = price > 2000000;
          break;
        default:
          priceMatch = true;
      }
    }
    
    return typeMatch && locationMatch && priceMatch;
  });

  return (
    <section id="properties" className="properties">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">
            Discover our handpicked selection of premium properties
          </p>
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="filter-group">
            <label>Property Type</label>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Location</label>
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range</label>
            <select 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="Any Price">Any Price</option>
              <option value="Under $500K">Under $500K</option>
              <option value="$500K - $1M">$500K - $1M</option>
              <option value="$1M - $2M">$1M - $2M</option>
              <option value="Above $2M">Above $2M</option>
            </select>
          </div>

          <div className="filter-results">
            <span>{filteredProperties.length} Properties Found</span>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="properties-grid">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="no-results">
            <h3>No properties found</h3>
            <p>Try adjusting your filters to see more results.</p>
          </div>
        )}

        {/* Load More Button */}
        <div className="load-more">
          <button className="btn-primary">
            Load More Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
