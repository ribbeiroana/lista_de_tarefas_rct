import React from 'react';
// iMPORTANTO O REACT PORQUE ESTÁ USANDO O JSX/ SEMELHANTE AO HTML
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

