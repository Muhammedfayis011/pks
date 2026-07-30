import React from 'react';
import { CheckCircle2, Globe } from 'lucide-react';

const OverviewSection = () => {
  return (
    <section className="overview-section section-padding">
      <div className="container">
        <div className="overview-grid">
          {/* Left Side Content */}
          <div className="overview-content animate-fade-up">
            <div className="section-tag">
              <Globe size={16} /> LEADING INDIAN FRUIT TRADER
            </div>
            <h2 className="section-title overview-title-small">
              Delivering Premium Freshness
            </h2>

            <p className="overview-lead-text">
              PKS Fruits is a leading Indian fruit trading company specializing in the import, export, 
              and wholesale distribution of premium fresh fruits. With strategically located operations in 
              <strong> Kerala</strong> and <strong>Mumbai</strong>, we connect trusted global growers with wholesale markets, 
              retailers, supermarkets, and distributors across India and the GCC.
            </p>

            <p className="overview-commitment-text">
              We are committed to delivering exceptional quality, consistent freshness, and reliable supply chain solutions that meet international standards.
            </p>

            <div className="overview-tagline">
              <CheckCircle2 size={20} className="text-gold" />
              <span>Delivering Freshness Beyond Borders.</span>
            </div>
          </div>

          {/* Right Side Image Showcase */}
          <div className="overview-visual animate-scale-up">
            <div className="visual-card-stack">
              <div className="main-fruit-card glass-card">
                <img 
                  src="/images/fresh_mangoes_1785409787577.jpg" 
                  alt="Premium Fruits Export" 
                  className="showcase-img"
                />
                <div className="card-badge-floating top-right">
                  <strong>100% Fresh</strong>
                  <p>Quality Inspected</p>
                </div>
              </div>

              {/* Secondary Sub-Image */}
              <div className="sub-fruit-card glass-card">
                <img 
                  src="/images/fresh_apples_1785409756246.jpg" 
                  alt="Fresh Apples" 
                  className="sub-showcase-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .overview-section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .overview-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .overview-title-small {
          font-family: 'Playfair Display', serif !important;
          font-size: 1.65rem !important;
          font-weight: 700 !important;
          letter-spacing: -0.3px !important;
          color: var(--primary) !important;
          margin-bottom: 16px !important;
        }
        .overview-lead-text {
          font-size: 1.18rem;
          color: var(--text-main);
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .overview-lead-text strong {
          color: var(--primary);
        }
        .overview-commitment-text {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .overview-tagline {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: var(--primary);
          font-size: 1.1rem;
          margin-bottom: 32px;
        }
        .overview-actions {
          display: flex;
          gap: 16px;
        }
        .btn-outline-dark {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }
        .btn-outline-dark:hover {
          background: var(--primary);
          color: #fff;
          transform: translateY(-2px);
        }
        .overview-visual {
          position: relative;
        }
        .visual-card-stack {
          position: relative;
          padding: 20px;
        }
        .main-fruit-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
        }
        .showcase-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }
        .sub-fruit-card {
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 200px;
          height: 160px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 4px solid #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18);
        }
        .sub-showcase-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .card-badge-floating {
          position: absolute;
          background: rgba(8, 28, 21, 0.9);
          color: #fff;
          padding: 10px 18px;
          border-radius: 12px;
          border: 1px solid rgba(64, 145, 108, 0.4);
          backdrop-filter: blur(10px);
        }
        .card-badge-floating.top-right {
          top: 20px;
          right: 20px;
        }
        .card-badge-floating strong {
          display: block;
          color: var(--accent-gold);
          font-size: 0.9rem;
        }
        .card-badge-floating p {
          font-size: 0.75rem;
          color: #d8f3dc;
          margin: 0;
        }

        @media (max-width: 992px) {
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sub-fruit-card {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default OverviewSection;
