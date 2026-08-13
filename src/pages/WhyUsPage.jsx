import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyUs from '../components/WhyUs';

const WhyUsPage = () => {
  useEffect(() => {
    document.title = 'Why Choose Us | PKS Fruits - Quality Assurance & Cold Chain Logistics';
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <main className="page-main">
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default WhyUsPage;
