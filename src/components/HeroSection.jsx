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
          background-image: url('./images/hero_export_bg_1785409740002.jpg');
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
          margin-bottom: 20px;
        }
        .hero-main-heading {
          font-family: 'Playfair Display', serif;
          font-size: 4.2rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 24px;
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
          margin-bottom: 36px;
          background: rgba(233, 196, 106, 0.12);
          border: 1px solid rgba(233, 196, 106, 0.3);
          padding: 8px 22px;
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

        /* ── Comprehensive Mobile & Screen Media Queries ────────────── */

        @media (min-width: 1400px) {
          .btn-green-solid, .btn-outline-white {
            padding: 18px 44px;
            font-size: 1rem;
            letter-spacing: 1.2px;
          }
          .hero-button-group { gap: 24px; }
        }

        @media (max-width: 1199px) {
          .btn-green-solid, .btn-outline-white {
            padding: 15px 32px;
            font-size: 0.92rem;
          }
          .hero-button-group { gap: 16px; }
        }

        @media (max-width: 992px) {
          .hero-main-heading { font-size: 3rem; margin-bottom: 22px; }
          .hero-sub-heading { font-size: 1.15rem; margin-bottom: 32px; }
          .btn-green-solid, .btn-outline-white {
            padding: 14px 30px;
            font-size: 0.9rem;
          }
        }

        /* Mobile View (max-width: 768px) */
        @media (max-width: 768px) {
          .hero-fullscreen {
            padding-top: 150px;
            padding-bottom: 70px;
          }
          .hero-tag-pill {
            margin-top: 30px;
            margin-bottom: 22px;
          }
          .hero-main-heading {
            font-size: 2.6rem;
            line-height: 1.25;
            margin-bottom: 28px;
          }
          .hero-sub-heading {
            font-size: 1rem;
            margin-bottom: 40px;
            padding: 8px 20px;
          }
          .hero-button-group {
            gap: 16px;
            margin-top: 10px;
          }
          .btn-green-solid, .btn-outline-white {
            padding: 13px 32px 13px 26px; /* Generous right padding */
            font-size: 0.88rem;
          }
        }

        /* Small Mobile Devices (max-width: 576px) */
        @media (max-width: 576px) {
          .hero-fullscreen {
            padding-top: 140px;
            padding-bottom: 60px;
          }
          /* Fresh export express pill top margin */
          .hero-tag-pill {
            margin-top: 40px;
            margin-bottom: 24px;
          }
          /* Clear line gaps between heading lines */
          .hero-main-heading {
            font-size: 2.3rem;
            line-height: 1.3;
            margin-bottom: 30px; /* Spacious gap after main heading */
          }
          .hero-sub-heading {
            font-size: 0.85rem;
            padding: 8px 18px;
            letter-spacing: 0.9px;
            margin-bottom: 44px; /* Spacious gap before buttons */
            line-height: 1.4;
          }
          /* Button group layout with extra right padding */
          .hero-button-group {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 14px;
            margin-top: 12px;
          }
          .btn-green-solid, .btn-outline-white {
            width: auto;
            padding: 12px 34px 12px 24px; /* Extra padding to the right */
            font-size: 0.86rem;
            letter-spacing: 0.8px;
            margin-right: 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Extra Small Mobile Devices (max-width: 400px) */
        @media (max-width: 400px) {
          .hero-fullscreen {
            padding-top: 130px;
            padding-bottom: 50px;
          }
          .hero-tag-pill {
            margin-top: 35px;
            margin-bottom: 20px;
          }
          .hero-main-heading {
            font-size: 2rem;
            line-height: 1.32;
            margin-bottom: 26px;
          }
          .hero-sub-heading {
            font-size: 0.78rem;
            padding: 7px 16px;
            letter-spacing: 0.7px;
            margin-bottom: 38px;
          }
          .hero-button-group {
            gap: 12px;
          }
          .btn-green-solid, .btn-outline-white {
            padding: 11px 30px 11px 20px; /* Right padding extra */
            font-size: 0.82rem;
          }
        }

        /* Ultra Small Mobile Devices (max-width: 360px) */
        @media (max-width: 360px) {
          .hero-fullscreen {
            padding-top: 120px;
            padding-bottom: 45px;
          }
          .hero-tag-pill {
            margin-top: 30px;
            margin-bottom: 18px;
          }
          .hero-main-heading {
            font-size: 1.75rem;
            line-height: 1.35;
            margin-bottom: 22px;
          }
          .hero-sub-heading {
            font-size: 0.72rem;
            padding: 6px 14px;
            margin-bottom: 32px;
          }
          .hero-button-group {
            gap: 10px;
          }
          .btn-green-solid, .btn-outline-white {
            padding: 10px 26px 10px 18px; /* Right padding extra */
            font-size: 0.78rem;
          }
        }

        /* Mobile Landscape Orientation */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-fullscreen { min-height: auto; padding: 100px 0 45px 0; }
          .hero-tag-pill { margin-top: 20px; margin-bottom: 14px; }
          .hero-main-heading { font-size: 2.1rem; line-height: 1.25; margin-bottom: 18px; }
          .hero-sub-heading { margin-bottom: 24px; }
          .hero-button-group { flex-direction: row; width: auto; gap: 14px; }
          .btn-green-solid, .btn-outline-white { width: auto; padding: 10px 28px 10px 20px; font-size: 0.85rem; }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .btn-green-solid:active, .btn-outline-white:active {
            transform: scale(0.98);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
