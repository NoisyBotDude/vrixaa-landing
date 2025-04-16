import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AppProvider } from './contexts/AppProvider';
import Layout from './components/layout/Layout';

// Import pages
import Home from './pages/HomePage';
import Vision from './pages/VisionPage';
// import WhatWeAreBuilding from './pages/whatWeArePage';
import Team from './pages/TeamPage';
import Contact from './pages/ContactPage';

// Import components
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        {/* <Route path="/what-we-are-building" element={<WhatWeAreBuilding />} /> */}
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppProvider>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </AppProvider>
    </Router>
  );
}

export default App;
