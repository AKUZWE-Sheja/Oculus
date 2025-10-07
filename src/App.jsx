import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CraftModal from './components/CraftModal';
import Home from './pages/Home';
import About from './pages/About';
import Artisans from './pages/Artisans';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCraft, setSelectedCraft] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-poppins">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home setSelectedCraft={(craft) => { setSelectedCraft(craft); setIsModalOpen(true); }} />} />
            <Route path="/about" element={<About />} />
            <Route path="/artisans" element={<Artisans setSelectedCraft={(craft) => { setSelectedCraft(craft); setIsModalOpen(true); }} />} />
          </Routes>
        </main>
        <CraftModal craft={selectedCraft} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;