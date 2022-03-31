import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import { GlobalStorage } from './Components/GlobalContext';

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/:name" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
