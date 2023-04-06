import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuote from './components/DisplayQuote';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<DisplayQuote />} />
      </Routes>
    </Router>
  );
}

export default App;
