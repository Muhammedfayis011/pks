import React from 'react';
import { CheckCircle2, Award, Truck, ShieldCheck, Globe2 } from 'lucide-react';

const OverviewSection = () => {
  const highlights = [
    {
      icon: <Award className="text-gold" size={28} />,
      title: 'Premium Quality',
      desc: 'Export-grade fruits sourced directly from certified global farms.'
    },
    {
      icon: <Truck className="text-green" size={28} />,
      title: 'Express Cold-Chain',
      desc: 'Temperature-controlled air & sea reefer logistics.'
    },
    {
      icon: <Globe2 className="text-orange" size={28} />,
      title: 'Global & GCC Reach',
      desc: 'Seamless distribution across India, Saudi Arabia, UAE & Gulf states.'
    },
    {
      icon: <ShieldCheck className="text-gold" size={28} />,
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

          {/* Right Side Showcase Grid (No hardcoded stored images) */}
          <div className="overview-visual animate-scale-up">
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
        
        /* Features Showcase Grid */
        .overview-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .overview-feature-card {
          padding: 24px 20px;
          border-radius: var(--radius-md);
          background: rgba(248, 250, 245, 0.9);
          border: 1px solid rgba(64, 145, 108, 0.2);
          transition: all 0.3s ease;
        }
        .overview-feature-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-accent);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
        }
        .feature-icon-box {
          margin-bottom: 12px;
        }
        .feature-text-box h3 {
          font-size: 1.05rem;
          color: var(--primary);
          margin-bottom: 6px;
          font-weight: 700;
        }
        .feature-text-box p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 992px) {
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 576px) {
          .overview-features-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default OverviewSection;
