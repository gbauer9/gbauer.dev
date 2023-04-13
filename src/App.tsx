import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './components/NavBar';
import About from './routes/About';
import Projects from './routes/Projects';
import NoMatch from './routes/NoMatch';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
