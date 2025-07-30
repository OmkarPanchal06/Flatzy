import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import WorkWithUs from './pages/WorkWithUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TenancyPolicy from './pages/TenancyPolicy';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/tenancy-policy" element={<TenancyPolicy />} />
            {/* Placeholder routes - you can create these pages later */}
            <Route path="/list-property" element={<div className="py-20 text-center"><h1 className="text-2xl">List Property - Coming Soon</h1></div>} />
            <Route path="/contact" element={<div className="py-20 text-center"><h1 className="text-2xl">Contact - Coming Soon</h1></div>} />
            <Route path="/refer" element={<div className="py-20 text-center"><h1 className="text-2xl">Refer & Earn - Coming Soon</h1></div>} />
            <Route path="/terms" element={<div className="py-20 text-center"><h1 className="text-2xl">Terms & Conditions - Coming Soon</h1></div>} />
            <Route path="/faqs" element={<div className="py-20 text-center"><h1 className="text-2xl">FAQs - Coming Soon</h1></div>} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;