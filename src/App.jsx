import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FruitsPage from './pages/FruitsPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppButton from './components/WhatsAppButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(() => {
    // If the user has already visited in this session (or refreshed), use 2 seconds
    const hasVisited = sessionStorage.getItem('pks_visited');
    return hasVisited ? 2 : 4;
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('pks_visited', 'true');
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <LoadingScreen
          duration={duration}
          onComplete={handleLoadingComplete}
        />
      )}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </>
  );
}

export default App;
