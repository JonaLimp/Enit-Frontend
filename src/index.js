import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Optional CSS file (make sure this exists)
import App from './App';  // Your main App component

// Create the root element where React will mount
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React app
root.render(
  <React.StrictMode>
    <App />  {/* Your App component here */}
  </React.StrictMode>
);
