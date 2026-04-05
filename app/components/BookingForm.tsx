"use client";

import React, { useState } from 'react';
import './booking-form.css';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    phone: '',
    city: '',
    need: 'Website + CRM + WhatsApp (Full Package)',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const shop = formData.shopName.trim();
    const phone = formData.phone.trim();
    const city = formData.city.trim();
    const need = formData.need;

    if (!name || !shop || !phone) {
      alert('Please fill in your name, shop name, and WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    const payload = { name, shop, phone, city, need, timestamp: new Date().toISOString() };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwyo2ZFHVcIdBqslriCkeYcI-xpHjbITTg5NsJnyr3BbJqGtVkLn_zbxrMxJ-Z4CxRo/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.log('Sheet log failed silently', error);
    }

    const msg = encodeURIComponent(
      `Hi! I just filled the DetailPro demo form.\nName: ${name}\nShop: ${shop}\nPhone: ${phone}\nCity: ${city}\nNeeds: ${need}`
    );
    window.open(`https://wa.me/917439596653?text=${msg}`, '_blank');

    setShowSuccessModal(true);
    setIsSubmitting(false);
  };

  return (
    <section className="booking-section" id="booking">
      <div className="container">
        <div className="booking-form-wrapper">
          <h2 className="section-title booking-title">
            Book Your <span className="highlight">Free Demo</span>
          </h2>
          
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="shopName">Shop Name</label>
              <input 
                type="text" 
                id="shopName" 
                name="shopName" 
                required 
                placeholder="Elite Auto Detailing"
                value={formData.shopName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">WhatsApp Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                required 
                placeholder="Mumbai"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="need">What do you need most?</label>
              <select 
                id="need" 
                name="need" 
                value={formData.need}
                onChange={handleChange}
              >
                <option value="Website + CRM + WhatsApp (Full Package)">Website + CRM + WhatsApp (Full Package)</option>
                <option value="CRM + WhatsApp Automation only">CRM + WhatsApp Automation only</option>
                <option value="Website only">Website only</option>
                <option value="Just want to see a demo first">Just want to see a demo first</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Booking...' : 'Book Free Demo Call ↗'}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-icon">🎉</div>
            <h3 className="modal-title">You're In!</h3>
            <p className="modal-desc">
              Your demo request has been received. We're redirecting you to WhatsApp to confirm your slot, or our team will reach out to you shortly.
            </p>
            <button 
              className="btn btn-primary btn-close" 
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
