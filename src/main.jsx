import React from 'react'; 
import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 

import App from './App.jsx'; // Import your main App component


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
