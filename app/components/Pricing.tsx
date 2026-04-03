import React from 'react';
import './pricing.css';
import Link from 'next/link';

const features = [
  'Professional website designed for you',
  'WhatsApp automation & auto follow-ups',
  'Full CRM dashboard',
  'Online booking system',
  'Monthly service reminder campaigns',
  'Dedicated support on WhatsApp',
  'Setup done for you in 7 days',
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container pricing-container">
        
        <div className="pricing-card">
          
          <div className="pricing-left">
            <div className="pricing-header">
              <div className="price-amount">4,000</div>
              <div className="price-period">/per month</div>
            </div>
            
            <Link href="#demo" className="btn btn-primary btn-pricing-cta">
              Book a Free Demo Call 
            </Link>
          </div>

          <div className="pricing-divider"></div>
          
          <div className="pricing-right">
            <ul className="pricing-features">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <svg 
                    className="tick-icon" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>
        
      </div>
    </section>
  );
}
