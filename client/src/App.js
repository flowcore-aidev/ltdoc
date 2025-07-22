import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<div className='text-center p-20 text-3xl font-bold text-blue-600'>Welcome to Lydell Tech</div>} />
      </Routes>
    </Router>
  );
}
export default App;
