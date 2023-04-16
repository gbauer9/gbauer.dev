import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import About from './routes/About';
import NoMatch from './routes/NoMatch';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="d-flex h-100 p-3 mx-auto flex-column text-center">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
