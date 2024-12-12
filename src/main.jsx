import React from 'react'; // Import React to avoid 'React is not defined' error
import { StrictMode } from 'react'; // StrictMode is also imported separately
import { createRoot } from 'react-dom/client'; // React 18 specific import

import App from './App.jsx'; // Import your main App component

// Create a root container and render your app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
