import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyUs from '../components/WhyUs';

const WhyUsPage = () => (
  <div className="app-root">
    <Navbar />
    <main className="page-main">
      <WhyUs />
    </main>
    <Footer />
  </div>
);

export default WhyUsPage;
