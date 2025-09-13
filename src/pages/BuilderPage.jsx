import React from 'react';
import BuilderIntegration from '../components/BuilderIntegration';
import FigmaIntegration from '../components/FigmaIntegration';
import './BuilderPage.css';

const BuilderPage = () => {
  // Replace these with your actual Builder.io credentials
  const BUILDER_API_KEY = '6996dc1fa2444cff9994ea13907adb22'; // Replace with your Builder.io API key
  const BUILDER_PAGE_ID = 'homepage'; // Try 'homepage' as a common page ID

  return (
    <div className="builder-page">
      <div className="container">
        <header className="page-header">
          <h1>Figma + Builder.io Integration</h1>
          <p>Real-time editing for your real estate website</p>
        </header>

        <div className="integration-demo">
          <div className="demo-section">
            <h2>🎨 Figma Integration</h2>
            <p>Connect your Figma designs directly to Builder.io:</p>
            
            <FigmaIntegration />
          </div>

          <div className="demo-section">
            <h2>Builder.io Content</h2>
            <p>This section will display content from Builder.io when configured:</p>
            
            <BuilderIntegration 
              pageId={BUILDER_PAGE_ID}
              apiKey={BUILDER_API_KEY}
            />
          </div>

          <div className="demo-section">
            <h2>How to Set Up</h2>
            <div className="setup-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Create Figma Design</h3>
                  <p>Design your real estate website in Figma with all sections and components.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Sign up for Builder.io</h3>
                  <p>Create a free account at <a href="https://builder.io" target="_blank" rel="noopener noreferrer">builder.io</a> and create a new space.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Import to Builder.io</h3>
                  <p>Use the Builder.io Figma plugin or manually recreate your design in Builder.io's visual editor.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Configure Integration</h3>
                  <p>Get your API key and page ID from Builder.io, then update the constants in this file.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Real-time Editing</h3>
                  <p>Edit your content in Builder.io and see changes instantly on your website!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="demo-section">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon">🎨</div>
                <h3>Visual Editor</h3>
                <p>Drag and drop interface for easy content management</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">📱</div>
                <h3>Responsive Design</h3>
                <p>Test and optimize for all device sizes</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <h3>Real-time Updates</h3>
                <p>See changes instantly without code deployment</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">👥</div>
                <h3>Team Collaboration</h3>
                <p>Share and collaborate with your team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
