import React from 'react';
import { Globe2 } from 'lucide-react';

const AboutSection = () => {
  const exportMarkets = [
    { country: 'India', flag: '🇮🇳' },
    { country: 'Saudi Arabia', flag: '🇸🇦' },
    { country: 'United Arab Emirates', flag: '🇦🇪' },
    { country: 'Qatar', flag: '🇶🇦' },
    { country: 'Oman', flag: '🇴🇲' },
    { country: 'Kuwait', flag: '🇰🇼' },
    { country: 'Bahrain', flag: '🇧🇭' },
    { country: 'Other International Markets', flag: '🌐' }
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Left Text */}
          <div className="about-text-content">
            <div className="section-tag">
              ABOUT PKS FRUITS
            </div>
            <h2 className="section-title">
              Connecting Global Farms <span>With Growing Markets</span>
            </h2>

            <p className="lead-p">
              PKS Fruits is a professionally managed fruit importing, exporting, and wholesale trading 
              company headquartered in <strong>Kerala, India</strong>, with an additional corporate office in <strong>Mumbai</strong>.
            </p>

            <p className="body-p">
              We specialize in sourcing premium-quality fruits from leading international growers and 
              supplying them across India and international markets. Our strategic dual hubs in Kozhikode (Kerala) 
              and Navi Mumbai give us seamless access to major Indian seaports, air cargo terminals, and 
              domestic distribution channels.
            </p>

            <div className="hubs-card">
              <div className="hub-item">
                <div className="hub-badge">HEADQUARTERS</div>
                <h4>Calicut, Kerala</h4>
                <p>Registered Trading & Agricultural Sourcing Center</p>
              </div>
              <div className="hub-divider"></div>
              <div className="hub-item">
                <div className="hub-badge corporate">CORPORATE HUB</div>
                <h4>Navi Mumbai</h4>
                <p>Global Trade, Port Logistics & GCC Division</p>
              </div>
            </div>
          </div>

          {/* Right Visual & Markets */}
          <div className="about-markets-visual">
            <div className="markets-card glass-card">
              <div className="markets-header">
                <Globe2 className="text-orange" size={24} />
                <div>
                  <h3>International Export Markets</h3>
                  <p>Wide distribution network across South Asia & GCC</p>
                </div>
              </div>

              <div className="markets-list">
                {exportMarkets.map((m, idx) => (
                  <div key={idx} className="market-pill">
                    <span className="market-flag">{m.flag}</span>
                    <span className="market-name">{m.country}</span>
                  </div>
                ))}
              </div>

              <div className="quote-callout">
                <p>
                  <em>"We work with importers, distributors, supermarkets, wholesalers, hospitality groups, and food service companies across all target regions."</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: #fff;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .lead-p {
          font-size: 1.15rem;
          color: var(--primary);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .body-p {
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 30px;
        }
        .hubs-card {
          background: var(--bg-light);
          border: 1px solid rgba(64, 145, 108, 0.2);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .hub-item {
          flex: 1;
        }
        .hub-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          background: var(--primary);
          color: #fff;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .hub-badge.corporate {
          background: var(--accent-orange-deep);
        }
        .hub-item h4 {
          font-size: 1.1rem;
          color: var(--primary);
          margin-bottom: 4px;
        }
        .hub-item p {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin: 0;
        }
        .hub-divider {
          width: 1px;
          height: 60px;
          background: rgba(64, 145, 108, 0.2);
        }
        .markets-card {
          padding: 34px;
          background: rgba(248, 250, 245, 0.8);
          border: 1px solid rgba(64, 145, 108, 0.25);
        }
        .markets-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .markets-header h3 {
          font-size: 1.3rem;
          color: var(--primary);
        }
        .markets-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .markets-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }
        .market-pill {
          background: #fff;
          border: 1px solid rgba(64, 145, 108, 0.15);
          padding: 10px 14px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: transform 0.2s;
        }
        .market-pill:hover {
          transform: translateX(4px);
          border-color: var(--primary-accent);
        }
        .market-flag {
          font-size: 1.3rem;
        }
        .market-name {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .quote-callout {
          background: rgba(64, 145, 108, 0.1);
          border-left: 4px solid var(--primary-accent);
          padding: 14px 18px;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-size: 0.88rem;
          color: var(--primary);
        }

        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .hubs-card { flex-direction: column; text-align: center; }
          .hub-divider { width: 100%; height: 1px; }
        }
        @media (max-width: 768px) {
          .about-image { height: 400px; }
        }
        @media (max-width: 576px) {
          .about-image { height: 320px; }
          .hubs-card { padding: 20px; }
        }
        @media (max-width: 400px) {
          .about-image { height: 250px; }
          .quote-box { padding: 12px 14px; font-size: 0.85rem; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
