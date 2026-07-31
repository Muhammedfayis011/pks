import React from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phoneNumber = '966568922844';
  const message = encodeURIComponent('Hello PKS Agro, I would like to make an inquiry.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat on WhatsApp with PKS"
    >
      <span className="whatsapp-tooltip">Chat with us +966 56 892 2844</span>

      {/* Blooming Aura Glow Rings */}
      <div className="whatsapp-bloom-ring whatsapp-bloom-ring-1" />
      <div className="whatsapp-bloom-ring whatsapp-bloom-ring-2" />

      {/* Premium High-Definition WhatsApp Icon */}
      <svg
        className="whatsapp-icon"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waGreenGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#128C7E" />
          </linearGradient>
          <filter id="waGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer green circle */}
        <circle cx="22" cy="22" r="21" fill="url(#waGreenGrad)" />

        {/* WhatsApp Chat Bubble & Phone Symbol */}
        <path
          d="M22 6C13.16 6 6 13.16 6 22C6 25.13 6.9 28.05 8.46 30.5L6.5 37.5L13.72 35.58C16.08 36.98 18.94 37.8 22 37.8C30.84 37.8 38 30.64 38 21.8C38 13.16 30.84 6 22 6Z"
          fill="url(#waGreenGrad)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <path
          d="M30.65 25.96C30.2 25.74 28.01 24.66 27.6 24.51C27.19 24.36 26.89 24.29 26.59 24.74C26.29 25.19 25.43 26.2 25.17 26.5C24.91 26.8 24.65 26.84 24.2 26.61C23.75 26.39 22.3 25.91 20.58 24.38C19.24 23.19 18.34 21.72 18.08 21.27C17.82 20.82 18.05 20.58 18.27 20.36C18.47 20.16 18.72 19.84 18.94 19.58C19.16 19.32 19.24 19.13 19.39 18.83C19.54 18.53 19.46 18.27 19.35 18.04C19.24 17.81 18.34 15.6 17.97 14.7C17.6 13.83 17.23 13.94 16.96 13.93C16.7 13.92 16.4 13.92 16.1 13.92C15.8 13.92 15.31 14.03 14.89 14.49C14.47 14.95 13.28 16.07 13.28 18.35C13.28 20.63 14.94 22.84 15.17 23.15C15.4 23.46 18.43 28.14 23.07 30.15C24.18 30.63 25.03 30.91 25.7 31.13C26.81 31.48 27.82 31.43 28.61 31.31C29.49 31.18 31.33 30.2 31.71 29.13C32.09 28.06 32.09 27.16 31.98 26.97C31.87 26.78 31.57 26.67 31.12 26.44L30.65 25.96Z"
          fill="#FFFFFF"
          filter="url(#waGlow)"
        />
      </svg>
    </a>
  );
}
