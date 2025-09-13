import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-badge">
          {property.type}
        </div>
        <div className="property-price">
          {property.price}
        </div>
      </div>
      
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">📍 {property.location}</p>
        
        <div className="property-details">
          <div className="detail">
            <span className="detail-icon">🛏️</span>
            <span>{property.bedrooms} Bedrooms</span>
          </div>
          <div className="detail">
            <span className="detail-icon">🚿</span>
            <span>{property.bathrooms} Bathrooms</span>
          </div>
          <div className="detail">
            <span className="detail-icon">📐</span>
            <span>{property.area}</span>
          </div>
        </div>
        
        <p className="property-description">{property.description}</p>
        
        <div className="property-features">
          {property.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="property-actions">
          <button className="btn-view">View Details</button>
          <button className="btn-contact">Contact Agent</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
