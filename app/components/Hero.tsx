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
            The Detailing Shops Closing<br />
            30% More Bookings This Month<br />
            <span className="highlight">Have One Thing You Don't.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle">
            The complete toolkit for car detailers: Website, CRM dashboard, and WhatsApp automation in one powerful bundle. Turn more inquiries into loyal customers for just Rs. 4,000/mo.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link href="#booking" className="btn btn-primary">
              Get Started &mdash; Rs. 4,000/mo
            </Link>
            <div className="demo-btn-wrapper">
              <div className="demo-hover-card">
                <div className="dhc-top">
                  <span className="dhc-label">JUST BELOW THE FOLD</span>
                  <span className="dhc-live"><span className="dhc-dot"></span>2 min watch</span>
                </div>
                <div className="dhc-item">
                  <span className="dhc-icon">📊</span>
                  <div>
                    <p className="dhc-title">CRM Walkthrough</p>
                    <p className="dhc-sub">Every lead, every follow-up, one screen</p>
                  </div>
                </div>
                <div className="dhc-item">
                  <span className="dhc-icon">💬</span>
                  <div>
                    <p className="dhc-title">WhatsApp on Autopilot</p>
                    <p className="dhc-sub">Auto-reply, follow-up, reminder — zero effort</p>
                  </div>
                </div>
                <div className="dhc-footer">
                  Right below this. Scroll two seconds.
                </div>
              </div>
              <a href="#demo" className="btn btn-outline" style={{ scrollBehavior: 'smooth' }}>See How It Works ↓</a>
            </div>
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
