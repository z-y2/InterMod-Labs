import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { Home } from './pages/home'; 
import { Convert } from './pages/convert';
import { Loading } from './pages/loading';
import { Download } from './pages/download';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route to Home */}
        <Route path="/" element={<Home />} />

        <Route path="/convert" element={<Convert />} />

        <Route path="/loading" element={<Loading />} />

        <Route path="/download" element={<Download />} />

        {/* Redirect any unknown paths to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
