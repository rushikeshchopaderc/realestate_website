import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'builder':
        return <div className="p-8"><h1 className="text-2xl font-bold">Builder.io Demo Page</h1><p>This is the Builder.io demo page.</p></div>;
      case 'defence':
        return <div className="p-8"><h1 className="text-2xl font-bold">Defence Realtors</h1><p>This is the Defence Realtors page.</p></div>;
      default:
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">🏠 Elite Properties</h1>
            <p className="text-lg text-gray-600 mb-8">Your trusted partner in finding the perfect home.</p>
            <div className="space-y-4">
              <button 
                onClick={() => setCurrentPage('builder')} 
                className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600"
              >
                Builder.io Demo
              </button>
              <button 
                onClick={() => setCurrentPage('defence')} 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Defence Realtors
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <nav className="bg-gray-100 p-4 mb-4">
        <div className="flex space-x-4">
          <button 
            onClick={() => setCurrentPage('home')} 
            className={`px-4 py-2 rounded ${currentPage === 'home' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('builder')} 
            className={`px-4 py-2 rounded ${currentPage === 'builder' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            Builder.io Demo
          </button>
          <button 
            onClick={() => setCurrentPage('defence')} 
            className={`px-4 py-2 rounded ${currentPage === 'defence' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            Defence Realtors
          </button>
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
