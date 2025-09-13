import React, { useState, useEffect } from 'react';
import './BuilderIntegration.css';

// Simple Builder.io integration without SDK
const BuilderIntegration = ({ pageId, apiKey }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBuilderContent = async () => {
      try {
        setLoading(true);
        // Fetch content from Builder.io API
        const response = await fetch(
          `https://cdn.builder.io/api/v1/page/${pageId}?apiKey=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setContent(data);
      } catch (err) {
        console.error('Error fetching Builder.io content:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (pageId && apiKey) {
      fetchBuilderContent();
    } else {
      setLoading(false);
    }
  }, [pageId, apiKey]);

  if (loading) {
    return (
      <div className="builder-loading">
        <div className="loading-spinner"></div>
        <p>Loading Builder.io content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="builder-error">
        <h3>Error loading content</h3>
        <p>{error}</p>
        <p>Please check your Builder.io configuration.</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="builder-placeholder">
        <h3>Builder.io Integration Ready</h3>
        <p>Configure your Builder.io page ID and API key to see content here.</p>
        <div className="builder-setup">
          <h4>Setup Instructions:</h4>
          <ol>
            <li>Sign up at <a href="https://builder.io" target="_blank" rel="noopener noreferrer">builder.io</a></li>
            <li>Create a new page</li>
            <li>Get your API key from settings</li>
            <li>Pass pageId and apiKey props to this component</li>
          </ol>
        </div>
      </div>
    );
  }

  // Render Builder.io content
  return (
    <div className="builder-content">
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  );
};

export default BuilderIntegration;
