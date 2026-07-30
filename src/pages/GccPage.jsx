import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GccSection from '../components/GccSection';

const GccPage = () => (
  <div className="app-root">
    <Navbar />
    <main>
      <GccSection />
    </main>
    <Footer />
  </div>
);

export default GccPage;
