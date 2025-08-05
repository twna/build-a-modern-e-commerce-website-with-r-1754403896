import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{
  "checklist": [
    {
      "step": "Install React Router",
      "description": "Use npm or yarn to install react-router-dom package."
    },
    {
      "step": "Import React Router components",
      "description": "Import BrowserRouter, Routes, and Route from react-router-dom."
    },
    {
      "step": "Define routes",
      "description": "Use the Route component to define paths and corresponding components."
    },
    {
      "step": "Wrap application with BrowserRouter",
      "description": "Enclose the Routes component within BrowserRouter to enable routing."
    }
  ]
}