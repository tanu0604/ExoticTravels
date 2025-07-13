import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import IndianTrips from './pages/IndianTrips';
import ForeignTrips from './pages/ForeignTrips';
import DestinationDetail from './pages/DestinationDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indian-trips" element={<IndianTrips />} />
          <Route path="/foreign-trips" element={<ForeignTrips />} />
          <Route path="/indian-trips/:id" element={<DestinationDetail />} />
          <Route path="/foreign-trips/:id" element={<DestinationDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;