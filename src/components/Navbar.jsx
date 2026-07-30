import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Menu, X, ChevronRight, Apple } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky-header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Top Notification Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-badge">GCC TRADE ENQUIRIES</span>
            <a href="tel:+966568922844" className="top-link">
              <Phone size={13} /> +966 56 892 2844
            </a>
            <span className="divider">|</span>
            <a href="tel:+966545137183" className="top-link">
              +966 54 513 7183
            </a>
          </div>
          <div className="top-bar-right">
            <a href="#contact" className="location-link">
              <MapPin size={13} /> Registered Office: Kerala, India | Corporate: Navi Mumbai
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="brand-logo">
            <div className="logo-text">
              <span className="brand-name">PKS <span className="highlight">FRUITS</span></span>
              <span className="brand-sub">IMPORTERS • EXPORTERS • WHOLESALE</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About Us</Link>
            <Link to="/fruits" className={isActive('/fruits')}>Our Fruits</Link>
            <Link to="/why-us" className={isActive('/why-us')}>Why Choose Us</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>

          {/* CTA Right */}
          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary btn-sm">
              Inquire Bulk Supply <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/fruits" onClick={() => setMobileMenuOpen(false)}>Our Fruits</Link>
            <Link to="/why-us" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            <div className="mobile-contact-info">
              <p><strong>GCC Enquiries:</strong> +966 56 892 2844</p>
              <p><strong>Email:</strong> info@pksfruits.com</p>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border: none !important;
          transition: all 0.3s ease;
        }
        .sticky-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(6, 21, 16, 0.70);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          z-index: -1;
        }
        .header-scrolled::before {
          background: rgba(6, 21, 16, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .top-bar {
          position: relative;
          z-index: 2;
          background: transparent;
          color: #a3b18a;
          padding: 8px 0;
          font-size: 0.82rem;
          border: none !important;
        }
        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .top-badge {
          background: var(--accent-orange-deep);
          color: #fff;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.72rem;
          letter-spacing: 0.5px;
        }
        .top-link, .location-link {
          color: #e8f5e9;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: color 0.25s ease;
          font-weight: 500;
        }
        .top-link:hover, .location-link:hover {
          color: var(--accent-gold);
        }
        .divider {
          opacity: 0.3;
        }
        .location-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #b7e4c7;
        }
        .navbar {
          position: relative;
          z-index: 2;
          background: transparent;
          border: none !important;
          padding: 12px 0;
        }
        .navbar-scrolled {
          padding: 10px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--primary-accent), var(--primary));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-gold);
          box-shadow: 0 4px 15px rgba(64, 145, 108, 0.4);
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.5px;
          line-height: 1;
        }
        .brand-name .highlight {
          color: var(--accent-orange);
        }
        .brand-sub {
          font-size: 0.65rem;
          color: var(--accent-gold);
          font-weight: 600;
          letter-spacing: 1px;
          margin-top: 3px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          display: inline-block;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--accent-gold);
          text-shadow: 0 0 10px rgba(233, 196, 106, 0.4);
          transform: translateY(-1px);
        }
        .nav-actions {
          display: flex;
          align-items: center;
        }
        .btn-sm {
          padding: 10px 20px;
          font-size: 0.88rem;
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
        }
        .mobile-menu {
          display: flex;
          flex-direction: column;
          background: #081c15;
          padding: 20px;
          border-top: 1px solid var(--border-light);
          gap: 16px;
        }
        .mobile-menu a {
          color: #e8f5e9;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
        }
        .mobile-contact-info {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #a3b18a;
          font-size: 0.88rem;
        }
        @media (max-width: 992px) {
          .nav-links, .nav-actions, .top-bar-right { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
