import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const ContactPage = () => (
  <div className="app-root">
    <Navbar />
    <main className="page-main">
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default ContactPage;
