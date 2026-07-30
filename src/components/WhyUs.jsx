import React from 'react';
import { whyChooseUsData } from '../data/fruitsData';
import { Award, Globe, Shield, Thermometer, Tag, Users, Check } from 'lucide-react';

const iconsMap = [
  <Award key="award" className="text-orange" size={28} />,
  <Globe key="globe" className="text-green" size={28} />,
  <Shield key="shield" className="text-gold" size={28} />,
  <Thermometer key="thermometer" className="text-orange" size={28} />,
  <Tag key="tag" className="text-green" size={28} />,
  <Users key="users" className="text-gold" size={28} />
];

const WhyUs = () => {
  return (
    <section id="why-us" className="why-section section-padding">
      <div className="container">
        <div className="why-header">
          <div className="section-tag">
            <Shield size={16} /> CORE ADVANTAGES
          </div>
          <h2 className="section-title">
            Why Choose <span>PKS Fruits</span>
          </h2>
          <p className="section-subtitle">
            We are committed to delivering exceptional quality, consistent freshness, and reliable 
            supply chain solutions that meet international trading standards across global markets.
          </p>
        </div>

        <div className="why-grid">
          {whyChooseUsData.map((item, index) => (
            <div key={index} className="why-card glass-card">
              <div className="card-icon-header">
                <div className="icon-box">
                  {iconsMap[index]}
                </div>
                <span className="step-num">0{index + 1}</span>
              </div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Quality Commitment Box */}
        <div className="commitment-box">
          <div className="commitment-left">
            <h3>Delivering Freshness Beyond Borders</h3>
            <p>
              From farm-side quality inspection in Kerala to climate-regulated air & sea freight 
              destinations in GCC, every shipment undergoes thorough phytosanitary & safety checks.
            </p>
          </div>
          <div className="commitment-check-list">
            <div className="check-item"><Check size={18} className="text-gold" /> Global Phytosanitary Certification</div>
            <div className="check-item"><Check size={18} className="text-gold" /> Customized Export Packaging</div>
            <div className="check-item"><Check size={18} className="text-gold" /> Zero-Break Cold Chain Tracking</div>
            <div className="check-item"><Check size={18} className="text-gold" /> On-Time Port Clearance</div>
          </div>
        </div>
      </div>

      <style>{`
        .why-section {
          background: #081c15;
          color: #fff;
          position: relative;
        }
        .why-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 50px auto;
        }
        .why-header .section-title {
          color: #fff;
        }
        .why-header .section-subtitle {
          color: #a3b18a;
          margin: 0 auto;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 60px;
        }
        .why-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(64, 145, 108, 0.2);
          border-radius: var(--radius-md);
          padding: 32px 28px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .why-card:hover {
          transform: translateY(-8px);
          background: rgba(27, 67, 50, 0.5);
          border-color: var(--accent-gold);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .card-icon-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .icon-box {
          width: 54px;
          height: 54px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .step-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.15);
        }
        .why-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }
        .why-desc {
          font-size: 0.94rem;
          color: #a3b18a;
          line-height: 1.65;
        }
        .commitment-box {
          background: linear-gradient(135deg, rgba(64, 145, 108, 0.2) 0%, rgba(8, 28, 21, 0.9) 100%);
          border: 1px solid rgba(64, 145, 108, 0.3);
          border-radius: var(--radius-lg);
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .commitment-left h3 {
          font-size: 1.6rem;
          color: var(--accent-gold);
          margin-bottom: 12px;
        }
        .commitment-left p {
          color: #d8f3dc;
          font-size: 0.98rem;
          line-height: 1.6;
        }
        .commitment-check-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          color: #fff;
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .commitment-box { grid-template-columns: 1fr; gap: 24px; }
        }
        @media (max-width: 576px) {
          .why-grid { grid-template-columns: 1fr; }
          .commitment-check-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default WhyUs;
