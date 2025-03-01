import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import POPOSList from './POPOSList';
import POPOSDetails from './POPOSDetails';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
