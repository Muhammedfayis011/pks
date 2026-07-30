import React from 'react';
import { gccCountries } from '../data/fruitsData';
import { Phone, Globe2, Plane, Ship, Building2 } from 'lucide-react';

const GccSection = () => {
  return (
    <section id="gcc-exports" className="gcc-section section-padding">
      <div className="container">
        <div className="gcc-card-wrapper">
          <div className="gcc-header">
            <div className="section-tag text-gold">
              <Globe2 size={16} /> INTERNATIONAL EXPORT NETWORK
            </div>
            <h2 className="section-title text-white">
              Export to <span>GCC Countries</span>
            </h2>
            <p className="section-subtitle text-light">
              PKS Fruits proudly exports premium-quality fresh fruits to businesses across Saudi Arabia, 
              UAE, Qatar, Oman, Kuwait, and Bahrain. We work closely with importers, distributors, 
              supermarkets, wholesalers, hospitality groups, and food service companies.
            </p>
          </div>

          {/* GCC Flags Grid */}
          <div className="gcc-countries-grid">
            {gccCountries.map((c) => (
              <div key={c.code} className="gcc-country-badge">
                <span className="flag-icon">{c.flag}</span>
                <span className="country-name">{c.name}</span>
                <span className="country-code">{c.code}</span>
              </div>
            ))}
          </div>

          {/* Trade Enquiries Highlight Bar */}
          <div className="gcc-enquiry-box">
            <div className="enquiry-info">
              <div className="enquiry-icon">
                <Phone size={28} />
              </div>
              <div>
                <h3>GCC Trade Enquiries</h3>
                <p>Direct export assistance & daily freight quotes for GCC importers</p>
              </div>
            </div>

            <div className="enquiry-numbers">
              <a href="tel:+966568922844" className="phone-btn">
                <span>Line 1</span>
                <strong>+966 56 892 2844</strong>
              </a>
              <a href="tel:+966545137183" className="phone-btn">
                <span>Line 2</span>
                <strong>+966 54 513 7183</strong>
              </a>
            </div>
          </div>

          {/* Logistics Capabilities */}
          <div className="gcc-logistics-grid">
            <div className="logistics-card">
              <Plane className="text-orange" size={32} />
              <h4>Air Freight Logistics</h4>
              <p>Daily express temperature-controlled air cargo for highly perishable berries and premium fruits.</p>
            </div>
            <div className="logistics-card">
              <Ship className="text-green" size={32} />
              <h4>Reefer Container Sea Logistics</h4>
              <p>Direct ocean reefer shipping with real-time temperature tracking to major GCC ports.</p>
            </div>
            <div className="logistics-card">
              <Building2 className="text-gold" size={32} />
              <h4>Customs & Clearance</h4>
              <p>Full phytosanitary documentation and compliant customs clearance across Gulf states.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gcc-section {
          background: linear-gradient(135deg, #081c15 0%, #1b4332 100%);
          position: relative;
          color: #fff;
          overflow: hidden;
        }
        .gcc-card-wrapper {
          position: relative;
          z-index: 2;
        }
        .gcc-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px auto;
        }
        .text-white {
          color: #fff !important;
        }
        .text-light {
          color: #b7e4c7 !important;
          margin: 0 auto;
        }
        .gcc-countries-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 14px;
          margin-bottom: 50px;
        }
        .gcc-country-badge {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(64, 145, 108, 0.3);
          border-radius: var(--radius-md);
          padding: 20px 12px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .gcc-country-badge:hover {
          transform: translateY(-5px);
          background: rgba(64, 145, 108, 0.25);
          border-color: var(--accent-gold);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        .flag-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 8px;
        }
        .country-name {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
        }
        .country-code {
          font-size: 0.75rem;
          color: var(--accent-gold);
          font-weight: 700;
          letter-spacing: 1px;
          margin-top: 4px;
          display: block;
        }
        .gcc-enquiry-box {
          background: rgba(244, 162, 97, 0.1);
          border: 2px solid var(--accent-orange);
          border-radius: var(--radius-lg);
          padding: 30px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 60px;
          backdrop-filter: blur(12px);
        }
        .enquiry-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .enquiry-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--accent-orange), var(--accent-orange-deep));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 8px 20px rgba(231, 111, 81, 0.4);
        }
        .enquiry-info h3 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 4px;
        }
        .enquiry-info p {
          color: #d8f3dc;
          font-size: 0.95rem;
        }
        .enquiry-numbers {
          display: flex;
          gap: 16px;
        }
        .phone-btn {
          background: rgba(8, 28, 21, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 24px;
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.25s;
        }
        .phone-btn:hover {
          background: var(--accent-orange-deep);
          border-color: var(--accent-orange-deep);
          transform: translateY(-2px);
        }
        .phone-btn span {
          font-size: 0.75rem;
          color: var(--accent-gold);
        }
        .phone-btn strong {
          font-size: 1.1rem;
          font-family: var(--font-body);
        }
        .gcc-logistics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .logistics-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 30px;
          transition: all 0.3s;
        }
        .logistics-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(64, 145, 108, 0.4);
        }
        .logistics-card h4 {
          font-size: 1.2rem;
          color: #fff;
          margin: 16px 0 10px 0;
        }
        .logistics-card p {
          color: #a3b18a;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .gcc-countries-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .gcc-country-badge:last-child {
            grid-column: 1 / -1;
            max-width: 50%;
            margin: 0 auto;
            width: 100%;
          }
          .gcc-enquiry-box { flex-direction: column; text-align: center; gap: 24px; }
          .enquiry-info { flex-direction: column; }
          .gcc-logistics-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (max-width: 768px) {
          .gcc-countries-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .gcc-country-badge:last-child {
            grid-column: 1 / -1;
            max-width: 60%;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 576px) {
          .gcc-countries-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .gcc-country-badge { padding: 16px 8px; }
          .gcc-country-badge:last-child {
            grid-column: 1 / -1;
            max-width: 70%;
            margin: 0 auto;
            width: 100%;
          }
          .flag-icon { font-size: 2.1rem; margin-bottom: 6px; }
          .country-name { font-size: 0.88rem; }
          .enquiry-numbers { flex-direction: column; width: 100%; gap: 12px; }
          .phone-btn { width: 100%; justify-content: center; }
          .gcc-enquiry-box { padding: 24px; }
        }
        @media (max-width: 400px) {
          .gcc-countries-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .gcc-country-badge { padding: 14px 6px; }
          .gcc-country-badge:last-child {
            grid-column: 1 / -1;
            max-width: 80%;
            margin: 0 auto;
            width: 100%;
          }
          .flag-icon { font-size: 1.85rem; margin-bottom: 4px; }
          .country-name { font-size: 0.82rem; }
          .country-code { font-size: 0.68rem; }
          .gcc-enquiry-box { padding: 20px 15px; }
        }
        @media (max-width: 360px) {
          .gcc-countries-grid { grid-template-columns: repeat(2, 1fr); gap: 6px; }
          .gcc-country-badge { padding: 12px 4px; }
          .gcc-country-badge:last-child {
            grid-column: 1 / -1;
            max-width: 90%;
            margin: 0 auto;
            width: 100%;
          }
          .flag-icon { font-size: 1.65rem; }
          .country-name { font-size: 0.78rem; }
        }
      `}</style>
    </section>
  );
};

export default GccSection;
