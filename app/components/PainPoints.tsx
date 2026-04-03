import React from 'react';
import './pain-points.css';

const painPoints = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
    title: 'WhatsApp Enquiries Go Cold',
    description: 'Respond too late and they book with a faster competitor',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>,
    title: 'No Lead Tracking System',
    description: 'Leads scattered across notebooks, chats, and memory',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    title: 'No Professional Website',
    description: 'Customers Google you and find nothing  or a rival',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>,
    title: 'No Repeat Customer System',
    description: 'No reminders = losing repeat business every single month',
  },
];

export default function PainPoints() {
  return (
    <section className="pain-points-section" id="pain-points">
      <div className="container">
        <h2 className="section-title">What's Costing You Customers Right Now</h2>
        
        <div className="pain-points-grid">
          {painPoints.map((point, index) => (
            <div key={index} className="pain-card">
              <div className="pain-card-icon">{point.icon}</div>
              <h3 className="pain-card-title">{point.title}</h3>
              <p className="pain-card-desc">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
