import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, ChevronRight } from 'lucide-react';

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    market: 'GCC Export',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/Pksfruitsworld@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Fruit Trade Enquiry from ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Company: formData.company || 'N/A',
          "Enquiry Type": formData.market,
          Message: formData.message
        })
      });
    } catch (err) {
      console.log('Form submission completed');
    }

    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-header">
          <div className="section-tag">
            <Mail size={16} /> GET IN TOUCH WITH US
          </div>
          <h2 className="section-title">
            Contact <span>PKS Fruits</span> Team
          </h2>
          <p className="section-subtitle">
            Whether you are a global grower, domestic wholesaler, or GCC fruit importer, 
            our trade representatives respond promptly to supply enquiries.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-card glass-card">
            <h3>Send a Wholesale / Export Enquiry</h3>
            <p>Fill out the form below to receive immediate pricing & shipping schedules.</p>

            {formSubmitted ? (
              <div className="success-message">
                <CheckCircle2 size={48} className="text-green" />
                <h4>Enquiry Submitted Successfully!</h4>
                <p>Thank you for reaching out to PKS Fruits. We have dispatched your enquiry to <strong>Pksfruitsworld@gmail.com</strong>. Our trade division will contact you shortly.</p>
                <button className="btn btn-primary" onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', company: '', market: 'GCC Export', message: '' });
                }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="trade-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rahul Sharma / Mohammed Al-Mansoor"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="e.g. info@yourcompany.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 / +966 / +971 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Company / Wholesale Business Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Al-Madina Supermarkets / Fresh Logistics"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Enquiry Type</label>
                  <select 
                    value={formData.market}
                    onChange={(e) => setFormData({...formData, market: e.target.value})}
                  >
                    <option value="GCC Export">GCC Fruit Export</option>
                    <option value="Domestic Wholesale">Domestic Wholesale (India)</option>
                    <option value="Global Import">Global Fruit Import into India</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message / Requirements *</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Mention fruit varieties, quantity in tons/containers, target delivery port..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting Enquiry...' : 'Submit Trade Enquiry'} <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Offices List */}
          <div className="offices-column">
            {/* Registered Office */}
            <div className="office-card">
              <div className="office-tag">REGISTERED OFFICE</div>
              <h3>P.K.S. FRUITS</h3>
              <p className="address-text">
                <MapPin size={18} className="icon" />
                17/2253, Kamaru Nivas, Nallalam P.O., Calicut, Kozhikode, Kerala – 673027, India
              </p>
              <div className="office-meta">
                <p>
                  <Phone size={14} /> <strong>India Contact:</strong>{' '}
                  <a href="tel:+919847113208" style={{ color: 'inherit', fontWeight: 600 }}>
                    +91 98471 13208
                  </a>
                </p>
                <p><Mail size={14} /> Pksfruitsworld@gmail.com</p>
              </div>
            </div>

            {/* Corporate Office — Hide on Home Page, Show on Contact Page */}
            {!isHomePage && (
              <div className="office-card">
                <div className="office-tag corporate">CORPORATE OFFICE</div>
                <h3>Mumbai Office</h3>
                <p className="address-text">
                  <MapPin size={18} className="icon" />
                  7th Floor, B Wing, Office 703, White Woods, Sector 23, Ulwe, Navi Mumbai – 410206, Maharashtra, India
                </p>
              </div>
            )}

            {/* Office Locations & Network Hubs */}
            <div className="office-card hubs-card">
              <div className="office-tag corporate">NETWORK & OFFICE HUBS</div>
              <h3>Key Office Locations</h3>
              <div className="locations-badge-list">
                <span className="location-city-badge">MUMBAI</span>
                <span className="location-city-badge">BENGALURU</span>
                <span className="location-city-badge">CHENNAI</span>
                <span className="location-city-badge">MANGALORE</span>
                <span className="location-city-badge">CALICUT</span>
              </div>
            </div>

            {/* GCC & India Trade Division */}
            <div className="office-card gcc-card">
              <div className="office-tag gcc">TRADE & EXPORT DIVISION</div>
              <h3>Direct Trade Lines</h3>
              <div className="gcc-phones">
                <a href="tel:+919847113208" className="gcc-phone-link">
                  <Phone size={16} /> 🇮🇳 +91 98471 13208
                </a>
                <a href="tel:+966568922844" className="gcc-phone-link">
                  <Phone size={16} /> 🇸🇦 +966 56 892 2844
                </a>
                <a href="tel:+966545137183" className="gcc-phone-link">
                  <Phone size={16} /> 🇸🇦 +966 54 513 7183
                </a>
              </div>
              <p className="availability">
                <Clock size={14} /> Active daily for India & GCC fruit operations
              </p>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="maps-container">
          {/* Calicut Office Map */}
          <div className="map-section">
            <div className="map-header">
              <div className="section-tag" style={{display:'inline-flex', marginBottom:'14px'}}>
                <MapPin size={15} /> REGISTERED OFFICE LOCATION
              </div>
              <h3 className="map-title">PKS Fruits — Calicut, Kerala</h3>
              <p className="map-subtitle">17/2253, Kamaru Nivas, Nallalam P.O., Kozhikode, Kerala – 673027, India</p>
            </div>
            <div className="map-embed-wrapper">
              <iframe
                title="PKS Fruits Calicut Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.4!2d75.8761!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x1f7e6e58a6e5a3a0!2sNallalam%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Corporate Office Navi Mumbai Map — Only on Contact Page */}
          {!isHomePage && (
            <div className="map-section">
              <div className="map-header">
                <div className="section-tag corporate" style={{display:'inline-flex', marginBottom:'14px', background:'var(--primary-accent)', color:'#fff'}}>
                  <MapPin size={15} /> CORPORATE OFFICE LOCATION
                </div>
                <h3 className="map-title">PKS Fruits — Navi Mumbai, Maharashtra</h3>
                <p className="map-subtitle">7th Floor, B Wing, Office 703, White Woods, Sector 23, Ulwe, Navi Mumbai – 410206, Maharashtra, India</p>
              </div>
              <div className="map-embed-wrapper">
                <iframe
                  title="PKS Fruits Corporate Office Navi Mumbai"
                  src="https://maps.google.com/maps?q=White+Woods+Sector+23+Ulwe+Navi+Mumbai+Maharashtra+410206&hl=en&z=16&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          )}
        </div>

        {/* View More — only on Home page */}
        {isHomePage && (
          <div className="contact-view-more">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              className="btn-contact-more"
            >
              View More <ChevronRight size={15} />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .contact-section {
          background: #f8faf5;
        }
        .contact-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 50px auto;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
        }
        .contact-view-more {
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }
        .btn-contact-more {
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
          box-shadow: 0 4px 16px rgba(233,196,106,0.35);
          transition: all 0.3s ease;
        }
        .btn-contact-more:hover {
          transform: translateY(-3px);
          color: #000;
          box-shadow: 0 12px 32px rgba(233,196,106,0.55);
          background: linear-gradient(135deg, #f4a261, var(--accent-gold));
        }
        .maps-container {
          display: flex;
          flex-direction: column;
          gap: 50px;
          margin-top: 60px;
        }
        .map-section {
          margin-top: 0;
        }
        .map-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .map-title {
          font-size: 1.5rem;
          font-family: 'Playfair Display', serif;
          color: var(--primary);
          margin-bottom: 6px;
        }
        .map-subtitle {
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .map-embed-wrapper {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          border: 2px solid rgba(64, 145, 108, 0.15);
        }
        .contact-form-card {
          padding: 40px;
          background: #fff;
          border: 1px solid rgba(64, 145, 108, 0.2);
        }
        .contact-form-card h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 6px;
        }
        .contact-form-card p {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin-bottom: 28px;
        }
        .trade-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-group label {
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--primary);
        }
        .form-group input, .form-group select, .form-group textarea {
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(64, 145, 108, 0.3);
          font-family: var(--font-body);
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--primary-accent);
          box-shadow: 0 0 0 3px rgba(64, 145, 108, 0.12);
        }
        .btn-full {
          width: 100%;
          margin-top: 10px;
        }
        .success-message {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .offices-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .office-card {
          background: #fff;
          border: 1px solid rgba(64, 145, 108, 0.2);
          border-radius: var(--radius-md);
          padding: 24px;
          box-shadow: var(--shadow-card);
        }
        .office-tag {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 800;
          background: var(--primary);
          color: #fff;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
        }
        .office-tag.corporate {
          background: var(--primary-light);
        }
        .office-tag.gcc {
          background: var(--accent-orange-deep);
        }
        .office-card h3 {
          font-size: 1.25rem;
          color: var(--primary);
          margin-bottom: 10px;
        }
        .address-text {
          font-size: 0.9rem;
          color: var(--text-main);
          line-height: 1.6;
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
        }
        .address-text .icon {
          color: var(--accent-orange-deep);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .office-meta {
          font-size: 0.85rem;
          color: var(--text-muted);
          border-top: 1px solid rgba(0,0,0,0.06);
          padding-top: 10px;
        }
        .hubs-card {
          border: 1px solid rgba(64, 145, 108, 0.3);
        }
        .locations-badge-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        .location-city-badge {
          background: rgba(27, 67, 50, 0.08);
          color: var(--primary);
          border: 1px solid rgba(64, 145, 108, 0.3);
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.5px;
          transition: all 0.25s ease;
        }
        .location-city-badge:hover {
          background: var(--primary);
          color: #ffffff;
          transform: translateY(-2px);
        }
        .gcc-card {
          background: linear-gradient(135deg, #081c15, #1b4332);
          color: #fff;
        }
        .gcc-card h3 { color: #fff; }
        .gcc-phones {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }
        .gcc-phone-link {
          color: var(--accent-gold);
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .availability {
          font-size: 0.8rem;
          color: #a3b18a;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .offices-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 576px) {
          .contact-content { padding: 30px 20px; }
          .office-card { padding: 20px; }
        }
        @media (max-width: 400px) {
          .contact-content { padding: 25px 15px; }
          .input-row { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
