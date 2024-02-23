import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
