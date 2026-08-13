import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | PKS Fruits - Mumbai, Calicut, India & GCC Offices';
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <main className="page-main">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
