import React from 'react';
import './nav.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo left */}
        <Link href="/" className="navbar-logo">
          AutoCRM
        </Link>
        
        {/* Nav links centre (Hidden on mobile for conversion focus) */}
        <nav className="navbar-links">
          <Link href="#features" className="navbar-link">Features</Link>
          <Link href="#crm" className="navbar-link">CRM</Link>
          <Link href="#pricing" className="navbar-link">Pricing</Link>
        </nav>
        
        {/* CTA button right */}
        <Link href="#demo" className="btn btn-cta">
          Book Free Demo
        </Link>
      </div>
    </header>
  );
}
