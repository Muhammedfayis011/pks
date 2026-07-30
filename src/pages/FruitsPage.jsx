import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsGrid from '../components/ProductsGrid';

const FruitsPage = () => (
  <div className="app-root">
    <Navbar />
    <main className="page-main">
      <ProductsGrid />
    </main>
    <Footer />
  </div>
);

export default FruitsPage;
