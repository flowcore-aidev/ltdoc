import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-4xl font-bold">
    Lydell Tech — Live and Running
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
