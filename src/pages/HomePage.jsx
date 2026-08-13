import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import OverviewSection from '../components/OverviewSection';
import GccSection from '../components/GccSection';
import ProductsGrid from '../components/ProductsGrid';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'PKS Fruits | Global Fresh Fruit Importers, Exporters & Wholesale Suppliers';
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <GccSection />
        <ProductsGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
