"use client";

import React from 'react';
import './demo-section.css';

export default function DemoSection() {
  const playVideo = (videoId: string, overlayId: string) => {
    const video = document.getElementById(videoId) as HTMLVideoElement;
    const overlay = document.getElementById(overlayId) as HTMLElement;
    if (video && overlay) {
      overlay.classList.add('hidden');
      video.play();
    }
  };

  return (
    <section id="demo" className="demo-section">
      <div className="demo-section-header">
        <p className="section-label">WATCH IT WORK</p>
        <h2 className="display">See Exactly What You're Getting.</h2>
        <p className="demo-section-sub">
          Two short videos. The CRM walkthrough and the WhatsApp automation  no fluff, just the actual product.
        </p>
      </div>

      {/* VIDEO 1 */}
      <div className="demo-row">
        <div className="demo-video-wrapper" id="wrapper1">
          <video id="vid1" preload="metadata" controls>
            <source src="/video1.mp4" type="video/mp4" />
          </video>
          <div className="play-overlay" id="overlay1" onClick={() => playVideo('vid1', 'overlay1')}>
            <div className="play-btn">&#9654;</div>
          </div>
        </div>
        <div className="demo-text">
          <span className="video-num display">01</span>
          <p className="video-tag">CRM WALKTHROUGH</p>
          <h3 className="display demo-vid-title">Every Lead. Every Follow-Up. One Screen.</h3>
          <p className="demo-vid-body">
            Watch how the CRM tracks every customer from the first WhatsApp message to a completed job  with a live voiceover showing exactly how it works for a detailing shop.
          </p>
          <ul className="demo-checklist">
            <li>Lead tracking from enquiry to booking</li>
            <li>Full customer history and service records</li>
            <li>Pipeline  New, Follow-up, Booked, Completed</li>
            <li>One-click WhatsApp follow-up from inside the CRM</li>
          </ul>
        </div>
      </div>

      {/* VIDEO 2 */}
      <div className="demo-row demo-row-reverse">
        <div className="demo-video-wrapper" id="wrapper2">
          <video id="vid2" preload="metadata" controls>
            <source src="/video2.mp4" type="video/mp4" />
          </video>
          <div className="play-overlay" id="overlay2" onClick={() => playVideo('vid2', 'overlay2')}>
            <div className="play-btn">&#9654;</div>
          </div>
        </div>
        <div className="demo-text">
          <span className="video-num display">02</span>
          <p className="video-tag">WHATSAPP AUTOMATION</p>
          <h3 className="display demo-vid-title">WhatsApp Running While You Sleep.</h3>
          <p className="demo-vid-body">
            See the full automation flow  from the instant a customer messages your shop, to the 24-hour follow-up, to the 3-month service reminder. All sent automatically without you touching your phone.
          </p>
          <ul className="demo-checklist">
            <li>Instant auto-reply the moment someone enquires</li>
            <li>24-hour follow-up if they haven't booked yet</li>
            <li>Booking confirmation sent automatically</li>
            <li>3-month service reminder to bring them back</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
