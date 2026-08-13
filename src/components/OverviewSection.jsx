import React from 'react';
import { CheckCircle2, Award, Truck, ShieldCheck, Globe2 } from 'lucide-react';

const OverviewSection = () => {
  const highlights = [
    {
      icon: <Award className="text-gold" size={26} />,
      title: 'Premium Quality',
      desc: 'Export-grade fruits sourced directly from certified global farms.'
    },
    {
      icon: <Truck className="text-green" size={26} />,
      title: 'Express Cold-Chain',
      desc: 'Temperature-controlled air & sea reefer logistics.'
    },
    {
      icon: <Globe2 className="text-orange" size={26} />,
      title: 'Global & GCC Reach',
      desc: 'Seamless distribution across India, Saudi Arabia, UAE & Gulf states.'
    },
    {
      icon: <ShieldCheck className="text-gold" size={26} />,
      title: 'Phytosanitary Compliant',
      desc: 'Full quarantine clearance & international safety standards.'
    }
  ];

  return (
    <section className="overview-section section-padding">
      <div className="container">
        <div className="overview-grid">
          {/* Left Side Content */}
          <div className="overview-content animate-fade-up">
            <div className="section-tag">
              GLOBAL FRESH PRODUCE SUPPLIER
            </div>
            <h2 className="section-title overview-title-small">
              Delivering Premium Freshness
            </h2>

            <p className="overview-lead-text">
              PKS Fruits is a leading Indian fruit trading company specializing in the import, export, 
              and wholesale distribution of premium fresh fruits. With strategically located operations across 
              <strong> Mumbai</strong>, <strong>Bengaluru</strong>, <strong>Chennai</strong>, <strong>Mangalore</strong>, and <strong>Calicut</strong>, we connect trusted global growers with wholesale markets, 
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

          {/* Right Side Showcase Grid with Premium Mango Showcase */}
          <div className="overview-visual animate-scale-up">
            {/* Featured Mango Image Showcase */}
            <div className="overview-mango-card">
              <img 
                src="./images/fresh_mangoes_1785409787577.jpg" 
                alt="Premium Fresh Export Mangoes" 
                className="overview-mango-img"
              />
            </div>

            {/* 4 Feature Cards Grid */}
            <div className="overview-features-grid">
              {highlights.map((h, i) => (
                <div key={i} className="overview-feature-card glass-card">
                  <div className="feature-icon-box">{h.icon}</div>
                  <div className="feature-text-box">
                    <h3>{h.title}</h3>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
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
          grid-template-columns: 1.05fr 0.95fr;
          gap: 50px;
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
          font-size: 1.15rem;
          color: var(--text-main);
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .overview-lead-text strong {
          color: var(--primary);
        }
        .overview-commitment-text {
          font-size: 1.02rem;
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
          margin-bottom: 10px;
        }
        
        /* Overview Mango Card Showcase */
        .overview-mango-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(27, 67, 50, 0.15);
          margin-bottom: 20px;
          height: 240px;
          border: 1px solid rgba(64, 145, 108, 0.25);
          background: #0e291b;
        }
        .overview-mango-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
        }
        .overview-mango-card:hover .overview-mango-img {
          transform: scale(1.06);
        }
        .mango-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(13, 40, 24, 0.6) 65%, rgba(8, 28, 21, 0.92) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px 22px;
          color: #ffffff;
        }
        .mango-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          background: linear-gradient(135deg, #f4a261, #e9c46a);
          color: #1b4332;
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 8px;
          box-shadow: 0 4px 12px rgba(244, 162, 97, 0.35);
        }
        .sparkle-icon {
          color: #1b4332;
        }
        .mango-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .mango-card-subtitle {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
          line-height: 1.4;
        }

        /* Features Showcase Grid */
        .overview-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .overview-feature-card {
          padding: 18px 16px;
          border-radius: var(--radius-md);
          background: rgba(248, 250, 245, 0.95);
          border: 1px solid rgba(64, 145, 108, 0.2);
          transition: all 0.3s ease;
        }
        .overview-feature-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-accent);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
          background: #ffffff;
        }
        .feature-icon-box {
          margin-bottom: 10px;
        }
        .feature-text-box h3 {
          font-size: 0.98rem;
          color: var(--primary);
          margin-bottom: 4px;
          font-weight: 700;
        }
        .feature-text-box p {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin: 0;
        }

        @media (max-width: 992px) {
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .overview-mango-card {
            height: 220px;
          }
        }
        @media (max-width: 576px) {
          .overview-features-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .overview-mango-card {
            height: 190px;
          }
        }
      `}</style>
    </section>
  );
};

export default OverviewSection;

