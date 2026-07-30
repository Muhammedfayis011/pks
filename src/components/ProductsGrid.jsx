import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fruitsData } from '../data/fruitsData';
import { Search, ShoppingBag, ChevronRight } from 'lucide-react';

const ProductsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const observerRef = useRef(null);

  const categories = ['All', 'Fresh Fruits', 'Bananas & Tropical', 'Citrus', 'Berries', 'Exotic & Special', 'Seasonal Specialties', 'Stone Fruits'];

  const filteredFruits = fruitsData.filter((fruit) => {
    const matchesCategory = activeCategory === 'All' || fruit.category === activeCategory;
    const matchesSearch = fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fruit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fruit.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const cards = document.querySelectorAll('.fruit-card');
    cards.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filteredFruits]);

  return (
    <section id="products" className="products-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="products-header">
          <div className="section-tag">
            WHOLESALE & EXPORT CATALOG
          </div>
          <h2 className="section-title">
            Our Premium <span>Fresh Fruit</span> Portfolio
          </h2>
          <p className="section-subtitle">
            We supply 20+ varieties of hand-harvested, cold-chain compliant fruits to wholesalers, 
            supermarkets, retail chains, hotels, restaurants, catering companies, and food processors.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="catalog-toolbar">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by fruit name, origin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery('')}>×</button>
            )}
          </div>
        </div>

        {/* Fruits Grid */}
        <div className="fruits-grid">
          {filteredFruits.map((fruit, index) => (
            <div 
              key={fruit.id} 
              className="fruit-card glass-card"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="fruit-img-wrapper">
                <img src={fruit.image} alt={fruit.name} className="fruit-img" />
              </div>

              <div className="fruit-details text-center">
                <h3 className="fruit-name">{fruit.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredFruits.length === 0 && (
          <div className="no-results">
            <ShoppingBag size={48} className="text-muted" />
            <h3>No fruits match your search criteria</h3>
            <p>Try resetting filters or searching for another keyword.</p>
            <button className="btn btn-primary" onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
              Reset All Filters
            </button>
          </div>
        )}

        {/* View More Button - only show on home page */}
        {useLocation().pathname === '/' && (
          <div className="view-more-wrapper">
            <Link 
              to="/fruits" 
              className="btn-view-more"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            >
              View More <ChevronRight size={15} />
            </Link>
          </div>
        )}

        {/* Bulk Supply Banner */}
        <div className="bulk-banner">
          <div className="bulk-content">
            <h3>Bulk Supply & Global Export Enquiries</h3>
            <p>
              Looking for custom sizing, private packaging, or scheduled reefer containers? 
              Our trade specialists are ready to tailor export contracts for your market needs.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Request Bulk Catalog PDF
          </a>
        </div>
      </div>

      <style>{`
        .products-section {
          background: #f4f7f2;
        }
        .products-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 40px auto;
        }
        .view-more-wrapper {
          display: flex;
          justify-content: center;
          margin: 40px 0 20px 0;
        }
        .btn-view-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 22px;
          background: linear-gradient(135deg, var(--accent-gold), #f4a261);
          color: #000;
          font-weight: 600;
          font-size: 0.82rem;
          border-radius: 50px;
          text-decoration: none;
          letter-spacing: 0.3px;
          box-shadow: 0 4px 16px rgba(233, 196, 106, 0.35);
          transition: all 0.3s ease;
        }
        .btn-view-more:hover {
          transform: translateY(-3px);
          color: #000;
          box-shadow: 0 8px 24px rgba(233, 196, 106, 0.5);
          background: linear-gradient(135deg, #f4a261, var(--accent-gold));
        }
        .catalog-toolbar {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }
        .category-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .tab-btn {
          background: #fff;
          border: 1px solid rgba(64, 145, 108, 0.2);
          padding: 8px 18px;
          border-radius: 25px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .tab-btn:hover {
          border-color: var(--primary-accent);
          color: var(--primary);
        }
        .tab-btn.active {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(27, 67, 50, 0.25);
        }
        .search-box {
          position: relative;
          max-width: 460px;
          margin: 0 auto;
          width: 100%;
        }
        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--primary-accent);
        }
        .search-box input {
          width: 100%;
          padding: 12px 40px 12px 46px;
          border-radius: 30px;
          border: 1px solid rgba(64, 145, 108, 0.3);
          background: #fff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .search-box input:focus {
          border-color: var(--primary-accent);
          box-shadow: 0 0 0 4px rgba(64, 145, 108, 0.12);
        }
        .clear-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.3rem;
          color: #888;
          cursor: pointer;
        }
        .fruits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .fruit-card {
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(220, 235, 222, 0.6);
          position: relative;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          
          /* Scroll animation defaults */
          opacity: 0;
          transform: translateY(40px);
        }
        .fruit-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .fruit-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 15px 35px rgba(6, 21, 16, 0.08);
          border-color: rgba(244, 162, 97, 0.3);
        }
        .fruit-img-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .fruit-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .fruit-card:hover .fruit-img {
          transform: scale(1.08);
        }
        .badge-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          background: var(--primary);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }
        .origin-overlay {
          position: absolute;
          bottom: 0;
          inset-x: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
          color: #fff;
          font-size: 0.78rem;
          padding: 12px 14px 8px 14px;
        }
        .origin-overlay span {
          color: var(--accent-gold);
          font-weight: 600;
        }
        .fruit-details {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .fruit-category {
          font-size: 0.75rem;
          color: var(--accent-orange-deep);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }
        .fruit-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .fruit-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 18px;
          flex-grow: 1;
        }
        .fruit-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .fruit-tags {
          display: flex;
          gap: 6px;
        }
        .tag-pill {
          font-size: 0.72rem;
          background: rgba(64, 145, 108, 0.1);
          color: var(--primary-light);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }
        .inquire-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-orange-deep);
          text-decoration: none;
          transition: gap 0.2s;
        }
        .inquire-link:hover {
          gap: 7px;
        }
        .no-results {
          text-align: center;
          padding: 60px 0;
        }
        .no-results h3 {
          margin: 15px 0 8px 0;
          color: var(--primary);
        }
        .no-results p {
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .bulk-banner {
          margin-top: 70px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: var(--radius-lg);
          padding: 40px 50px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 15px 35px rgba(27, 67, 50, 0.25);
        }
        .bulk-content {
          max-width: 650px;
        }
        .bulk-content h3 {
          font-size: 1.75rem;
          margin-bottom: 8px;
          color: var(--accent-gold);
        }
        .bulk-content p {
          color: #d8f3dc;
          font-size: 0.98rem;
          line-height: 1.6;
        }

        @media (max-width: 1200px) {
          .fruits-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 992px) {
          .fruits-grid { grid-template-columns: repeat(2, 1fr); }
          .bulk-banner { flex-direction: column; text-align: center; gap: 24px; }
        }
        @media (max-width: 576px) {
          .fruits-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default ProductsGrid;
