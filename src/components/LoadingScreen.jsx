import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ duration = 4, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [done, setDone] = useState(false);

  const progress = duration > 0 ? ((duration - timeLeft) / duration) * 100 : 100;

  // Ultra-compact 36px micro ring
  const radius = 13;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (timeLeft <= 0) {
      setDone(true);
      setTimeout(() => onComplete?.(), 400);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onComplete]);

  return (
    <div className={`ls-overlay${done ? ' ls-overlay--exit' : ''}`}>
      {/* Blurred overlay over hero section */}
      <div className="ls-blur-backdrop" />

      {/* Clean layout: Micro round ring + PKS */}
      <div className="ls-minimal-content">

        {/* Micro 36px round ring */}
        <div className="ls-small-ring-wrap">
          <div className="ls-spin-ring-sm" />

          <svg className="ls-svg-sm" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            {/* Track */}
            <circle
              cx="18" cy="18" r={radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="3"
            />
            {/* Progress arc */}
            <circle
              cx="18" cy="18" r={radius}
              fill="none"
              stroke="url(#ringGradSm)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 18 18)"
              style={{ transition: 'stroke-dashoffset 1s linear' }}
            />
            <defs>
              <linearGradient id="ringGradSm" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e9c46a" />
                <stop offset="50%" stopColor="#f4a261" />
                <stop offset="100%" stopColor="#40916c" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand Name: PKS */}
        <h2 className="ls-title-minimal">PKS</h2>

      </div>
    </div>
  );
}
