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
    setIsSubmitting(true);

    try {
      // 1. Submit to Webhook / API (Replace with actual endpoint)
      const webhookUrl = 'https://hook.us1.make.com/dummy-webhook-url';
      
      // We will perform a no-cors fetch so it doesn't block the UI if it fails
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors'
      }).catch(err => console.warn("Webhook fetch failed (expected if dummy)", err));

      // 2. Show Success Modal
      setShowSuccessModal(true);

      // 3. WhatsApp Fallback Action
      // Replace with your actual business WhatsApp number (with country code)
      const businessWhatsApp = '919999999999'; 
      const text = `Hi DetailPro! I'd like to book a demo.
Name: ${formData.name}
Shop: ${formData.shopName}
City: ${formData.city}
Interested in: ${formData.need}`;
      
      const waUrl = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(text)}`;
      
      // Open WhatsApp in a new tab after a brief delay
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 500);

    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="booking-section" id="demo">
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
