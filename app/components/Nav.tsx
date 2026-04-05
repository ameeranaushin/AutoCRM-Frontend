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
      </div>
    </header>
  );
}
