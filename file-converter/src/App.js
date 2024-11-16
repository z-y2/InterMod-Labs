import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import {Home} from './Home'; // Adjust the path if Home.jsx is in a different folder.
import { Convert } from './convert';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route to Home */}
        <Route path="/" element={<Home />} />

        <Route path="/convert" element={<Convert />} />

        {/* Redirect any unknown paths to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
