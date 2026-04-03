import React from 'react';
import './hero.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section className="hero">
        {/* Decorative radial gradient */}
        <div className="hero-bg-gradient"></div>

        <div className="container hero-content">
          {/* Urgency Pill */}
          <div className="urgency-pill">
            <span className="blinking-dot"></span>
            3 car detailing shops in your city just signed up this week
          </div>

          {/* H1 Headline */}
          <h1 className="hero-title">
            Your Rivals Are Getting Leads While You <span className="highlight">Sleep.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle">
            The complete toolkit for car detailers: Website, CRM dashboard, and WhatsApp automation in one powerful bundle. Turn more inquiries into loyal customers for just ₹4,000/mo.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link href="#demo" className="btn btn-primary">
              Get Started — ₹4,000/mo
            </Link>
            <Link href="#how-it-works" className="btn btn-outline">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {/* Duplicated for seamless infinite scrolling */}
          <span>WhatsApp Automation</span>
          <span>•</span>
          <span>CRM Dashboard</span>
          <span>•</span>
          <span>Professional Website</span>
          <span>•</span>
          <span>Lead Generation</span>
          <span>•</span>
          <span>Instant Alerts</span>
          <span>•</span>
          <span>WhatsApp Automation</span>
          <span>•</span>
          <span>CRM Dashboard</span>
          <span>•</span>
          <span>Professional Website</span>
          <span>•</span>
          <span>Lead Generation</span>
          <span>•</span>
          <span>Instant Alerts</span>
          <span>•</span>
        </div>
      </div>
    </>
  );
}
