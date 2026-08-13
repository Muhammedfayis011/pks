import React from 'react';
import { Phone, Mail, ChevronRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img 
                src="/images/pks_logo_white.png" 
                alt="PKS Fruits Logo" 
                className="footer-brand-logo" 
              />
            </div>
            <p className="footer-tagline">
              Connecting Global Farms with Growing Markets. <br />
              Delivering Freshness Beyond Borders.
            </p>
            <p className="footer-desc">
              Leading Indian fruit trading company specializing in import, export, and wholesale distribution of premium fresh fruits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul>
              <li><a href="#home"><ChevronRight size={14} /> Home</a></li>
              <li><a href="#about"><ChevronRight size={14} /> About Us</a></li>
              <li><a href="#gcc-exports"><ChevronRight size={14} /> GCC Exports</a></li>
              <li><a href="#products"><ChevronRight size={14} /> Products Portfolio</a></li>
              <li><a href="#why-us"><ChevronRight size={14} /> Why Choose Us</a></li>
              <li><a href="#contact"><ChevronRight size={14} /> Contact Us</a></li>
            </ul>
          </div>

          {/* Trade & Export Division */}
          <div className="footer-col">
            <h4>Trade & Export Division</h4>
            <p className="gcc-sub">India & GCC (Saudi Arabia, UAE, Qatar, Oman, Kuwait, Bahrain)</p>
            <div className="footer-contact-item">
              <Phone size={16} className="text-green" />
              <span>🇮🇳 +91 98471 13208 (India)</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="text-orange" />
              <span>🇸🇦 +966 56 892 2844 (GCC)</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} className="text-gold" />
              <span>Pksfruitsworld@gmail.com</span>
            </div>
          </div>

          {/* Office Locations / Key Hubs */}
          <div className="footer-col">
            <h4>Office Locations</h4>
            <ul className="footer-hubs-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px', fontSize: '0.9rem', color: '#d8f3dc' }}>📍 <strong>MUMBAI</strong></li>
              <li style={{ marginBottom: '6px', fontSize: '0.9rem', color: '#d8f3dc' }}>📍 <strong>BENGALURU</strong></li>
              <li style={{ marginBottom: '6px', fontSize: '0.9rem', color: '#d8f3dc' }}>📍 <strong>CHENNAI</strong></li>
              <li style={{ marginBottom: '6px', fontSize: '0.9rem', color: '#d8f3dc' }}>📍 <strong>MANGALORE</strong></li>
              <li style={{ marginBottom: '6px', fontSize: '0.9rem', color: '#d8f3dc' }}>📍 <strong>CALICUT</strong></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="footer-bottom">
          <p>© 2026 PKS FRUITS. All rights reserved. Premium Fresh Fruit Trading.</p>

          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: #040e0b;
          color: #a3b18a;
          padding: 80px 0 30px 0;
          border-top: 1px solid rgba(64, 145, 108, 0.2);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        .footer-logo {
          margin-bottom: 16px;
        }
        .footer-brand-logo {
          height: 68px;
          max-height: 75px;
          width: auto;
          object-fit: contain;
          background: transparent !important;
          padding: 0 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
        }
        .footer-tagline {
          color: var(--accent-gold);
          font-weight: 600;
          font-size: 0.92rem;
          line-height: 1.5;
          margin-bottom: 12px;
        }
        .footer-desc {
          font-size: 0.86rem;
          line-height: 1.6;
          color: #748c82;
        }
        .footer-col h4 {
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 8px;
        }
        .footer-col h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background: var(--accent-orange-deep);
        }
        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col ul a {
          color: #a3b18a;
          text-decoration: none;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .footer-col ul a:hover {
          color: var(--accent-gold);
        }
        .gcc-sub {
          font-size: 0.82rem;
          color: #748c82;
          margin-bottom: 14px;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #fff;
          margin-bottom: 10px;
        }
        .hub-footer-block {
          margin-bottom: 14px;
        }
        .hub-footer-block strong {
          display: block;
          color: #fff;
          font-size: 0.84rem;
        }
        .hub-footer-block p {
          font-size: 0.82rem;
          color: #748c82;
          margin: 2px 0 0 0;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.84rem;
        }
        .scroll-top-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s;
        }
        .scroll-top-btn:hover {
          background: var(--primary-accent);
          border-color: var(--primary-accent);
        }

        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }
        @media (max-width: 768px) {
          .footer-grid { gap: 30px; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
          .footer-bottom { flex-direction: column; gap: 15px; text-align: center; }
        }
        @media (max-width: 400px) {
          .footer-grid { gap: 30px; }
          .footer-links li a { font-size: 0.9rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
