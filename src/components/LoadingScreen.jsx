import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ duration = 4, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [done, setDone] = useState(false);

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
      <div className="ls-minimal-content">
        <img 
          src="./images/pks_logo.png" 
          alt="PKS Fruits Logo" 
          className="ls-logo-img" 
        />
        
        {/* Small round loading ring */}
        <div className="ls-ring-spinner"></div>
      </div>
    </div>
  );
}

