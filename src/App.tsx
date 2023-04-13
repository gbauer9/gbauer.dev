import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HashRouter basename="/homebase">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NoMatch />} />
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
