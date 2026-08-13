import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | PKS Fruits - Global Fresh Fruit Importers & Exporters';
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <main className="page-main">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
