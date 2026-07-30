import React from 'react';


const HeroSection = () => {
  return (
    <section id="home" className="hero-fullscreen">
      <div className="hero-bg-image"></div>
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-centered-container">
        <div className="hero-content-center animate-fade-up">
          <div className="hero-tag-pill animate-slide-left">
            <span>Fresh Export Express</span>
          </div>

          <h1 className="hero-main-heading font-serif">
            Premium Fresh Fruits from Around the World
          </h1>

          <p className="hero-sub-heading">
            Importers • Exporters • Wholesale Fruit Traders
          </p>

          <div className="hero-button-group">
            <a href="#products" className="btn btn-green-solid">
              OUR PRODUCTS
            </a>
            <a href="#contact" className="btn btn-outline-white">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-fullscreen {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          overflow: hidden;
          padding: 140px 0 80px 0;
        }
        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('/images/hero_export_bg_1785409740002.jpg');
          background-size: cover;
          background-position: center;
          transform: scale(1.05);
          filter: brightness(0.85);
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(6, 21, 16, 0.70) 0%,
            rgba(8, 28, 21, 0.80) 60%,
            rgba(6, 21, 16, 0.90) 100%
          );
        }
        .hero-centered-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .hero-content-center {
          max-width: 900px;
          text-align: left;
        }
        .hero-tag-pill {
          display: inline-block;
          color: #2ec4b6;
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .hero-main-heading {
          font-family: 'Playfair Display', serif;
          font-size: 4.2rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.15;
          color: #ffffff;
          margin-bottom: 20px;
          text-shadow: 0 4px 25px rgba(0,0,0,0.6);
        }
        .hero-sub-heading {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--accent-gold);
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 30px;
          background: rgba(233, 196, 106, 0.12);
          border: 1px solid rgba(233, 196, 106, 0.3);
          padding: 7px 18px;
          border-radius: 30px;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        .hero-button-group {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .btn-green-solid {
          background: #27ae60;
          color: #fff;
          padding: 16px 36px;
          border-radius: 4px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: none;
          font-size: 0.95rem;
          box-shadow: 0 4px 15px rgba(39, 174, 96, 0.4);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .btn-green-solid:hover {
          background: #219150;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(39, 174, 96, 0.6);
        }
        .btn-outline-white {
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.6);
          padding: 15px 36px;
          border-radius: 4px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.95rem;
          backdrop-filter: blur(4px);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .btn-outline-white:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #fff;
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .hero-main-heading { font-size: 3rem; }
          .hero-sub-heading { font-size: 1.2rem; }
        }
        @media (max-width: 576px) {
          .hero-main-heading { font-size: 2.2rem; }
          .hero-sub-heading { font-size: 1.05rem; }
          .hero-button-group { flex-direction: column; width: 100%; }
          .btn-green-solid, .btn-outline-white { width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
