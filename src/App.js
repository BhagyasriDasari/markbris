import React from 'react';


import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Service from './pages/Services';
import './App.css';

const App = () => (
  <div className='bg'>
  <Router>
  
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Service />} />
    </Routes>
    <Footer />
  </Router>
  </div>
);

export default App;
