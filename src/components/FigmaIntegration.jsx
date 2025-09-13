import React, { useState, useEffect } from 'react';
import './FigmaIntegration.css';

const FigmaIntegration = () => {
  const [figmaData, setFigmaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Figma API integration
  const fetchFigmaData = async (figmaFileId, figmaToken) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.figma.com/v1/files/${figmaFileId}`, {
        headers: {
          'X-Figma-Token': figmaToken
        }
      });
      
      if (!response.ok) {
        throw new Error(`Figma API error: ${response.status}`);
      }
      
      const data = await response.json();
      setFigmaData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Convert Figma data to Builder.io format
  const convertFigmaToBuilder = (figmaData) => {
    // This would convert Figma design data to Builder.io format
    // Implementation depends on your specific Figma structure
    return {
      blocks: [
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'figma-import',
          component: {
            name: 'Text',
            options: {
              text: 'Figma Design Imported Successfully!'
            }
          }
        }
      ]
    };
  };

  return (
    <div className="figma-integration">
      <div className="container">
        <header className="integration-header">
          <h2>🎨 Figma to Builder.io Integration</h2>
          <p>Connect your Figma designs directly to Builder.io for real-time editing</p>
        </header>

        <div className="integration-methods">
          <div className="method-card">
            <div className="method-icon">🔌</div>
            <h3>Method 1: Figma Plugin</h3>
            <p>Use the official Builder.io Figma plugin to export designs directly</p>
            <div className="method-steps">
              <ol>
                <li>Install Builder.io plugin in Figma</li>
                <li>Select your design frames</li>
                <li>Export to Builder.io</li>
                <li>Edit in real-time</li>
              </ol>
            </div>
            <button className="method-button">Get Plugin</button>
          </div>

          <div className="method-card">
            <div className="method-icon">🎨</div>
            <h3>Method 2: Visual Editor</h3>
            <p>Recreate your Figma design in Builder.io's visual editor</p>
            <div className="method-steps">
              <ol>
                <li>Open Builder.io visual editor</li>
                <li>Import your Figma assets</li>
                <li>Recreate the design</li>
                <li>Publish and edit</li>
              </ol>
            </div>
            <button className="method-button">Open Editor</button>
          </div>

          <div className="method-card">
            <div className="method-icon">⚡</div>
            <h3>Method 3: API Integration</h3>
            <p>Connect Figma API to Builder.io for automated updates</p>
            <div className="method-steps">
              <ol>
                <li>Get Figma API token</li>
                <li>Configure webhook</li>
                <li>Auto-sync changes</li>
                <li>Real-time updates</li>
              </ol>
            </div>
            <button className="method-button">Setup API</button>
          </div>
        </div>

        <div className="figma-setup">
          <h3>🔧 Quick Setup Guide</h3>
          
          <div className="setup-section">
            <h4>Step 1: Get Your Figma File ID</h4>
            <p>Copy the file ID from your Figma URL:</p>
            <code>https://www.figma.com/file/[FILE_ID]/[FILE_NAME]</code>
          </div>

          <div className="setup-section">
            <h4>Step 2: Get Figma API Token</h4>
            <p>Generate a personal access token from Figma:</p>
            <ol>
              <li>Go to Figma → Account Settings</li>
              <li>Click "Personal Access Tokens"</li>
              <li>Generate new token</li>
              <li>Copy the token</li>
            </ol>
          </div>

          <div className="setup-section">
            <h4>Step 3: Connect to Builder.io</h4>
            <p>Use the Builder.io Figma plugin or visual editor to connect your designs.</p>
          </div>
        </div>

        <div className="integration-demo">
          <h3>🎯 Live Demo</h3>
          <p>Test the integration with your Figma design:</p>
          
          <div className="demo-form">
            <input 
              type="text" 
              placeholder="Figma File ID" 
              className="demo-input"
            />
            <input 
              type="text" 
              placeholder="Figma API Token" 
              className="demo-input"
            />
            <button className="demo-button">Connect Figma</button>
          </div>

          {loading && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Connecting to Figma...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <p>Error: {error}</p>
            </div>
          )}

          {figmaData && (
            <div className="success-state">
              <p>✅ Figma design connected successfully!</p>
              <p>Ready to sync with Builder.io</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FigmaIntegration;
