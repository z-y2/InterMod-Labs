import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { Home } from './pages/Home';
import { Convert } from './pages/Convert';
import { Loading } from './pages/Loading';
import { Download } from './pages/Download';

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
