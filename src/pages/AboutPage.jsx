import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const AboutPage = () => (
  <div className="app-root">
    <Navbar />
    <main className="page-main">
      <AboutSection />
    </main>
    <Footer />
  </div>
);

export default AboutPage;
