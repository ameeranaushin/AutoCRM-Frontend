import React from 'react';
import './social-proof.css';

const shops = [
  {
    name: 'AutoGlow Detailing',
    city: 'Mumbai, MH',
    status: 'Live',
  },
  {
    name: 'Ceramic Masters',
    city: 'Bengaluru, KA',
    status: 'Setting up',
  },
  {
    name: 'Elite Auto Spa',
    city: 'Delhi, DL',
    status: 'Live',
  },
  {
    name: 'Supreme Shine',
    city: 'Pune, MH',
    status: 'Live',
  },
];

// Helper to get initials
const getInitials = (name: string) => {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
};

export default function SocialProof() {
  return (
    <section className="social-proof-section" id="social-proof">
      <div className="container">
        
        <div className="sp-header">
          <div className="sp-title-area">
            <h2 className="section-title sp-title">Shops Already On The Platform</h2>
            <p className="sp-subtitle">Your competitors are building their edge. Are you?</p>
          </div>
          
          <div className="sp-live-badge">
            <span className="blink-green"></span>
            Live now
          </div>
        </div>

        <div className="sp-grid">
          {shops.map((shop, index) => (
            <div key={index} className="shop-card">
              <div className="shop-avatar">
                {getInitials(shop.name)}
              </div>
              <div className="shop-info">
                <h3 className="shop-name">{shop.name}</h3>
                <span className="shop-city">{shop.city}</span>
              </div>
              <div className={`shop-status ${shop.status === 'Live' ? 'status-live' : 'status-pending'}`}>
                {shop.status}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
