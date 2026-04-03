import React from 'react';
import './solution.css';

const solutions = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    title: 'Professional Website',
    description: 'Mobile-first site live in 7 days. Booking form included.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
    title: 'WhatsApp Automation',
    description: 'Auto-reply on enquiry. Follow-up at 24h. Reminder at 3 months.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
    title: 'CRM Dashboard',
    description: 'Every lead tracked. Pipeline view. Never lose a customer again.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
    title: 'Online Booking System',
    description: 'Customer books from site. You get notified. No back-and-forth.',
  },
];

export default function Solution() {
  return (
    <section className="solution-section" id="solution">
      <div className="container">
        <h2 className="section-title">Everything a Detailing Shop Needs. One Platform.</h2>
        
        <div className="solution-grid">
          {solutions.map((item, index) => (
            <div key={index} className="solution-card">
              <div className="solution-card-bg-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="solution-card-content">
                <div className="solution-card-icon">{item.icon}</div>
                <h3 className="solution-card-title">{item.title}</h3>
                <p className="solution-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
