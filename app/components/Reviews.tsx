import React from 'react';
import './reviews.css';

const reviewsData = [
  {
    initials: 'FC',
    shopName: 'Fabulous Car Studio',
    handle: '@fabulous_car_studio',
    review: "Before DetailPro, we were losing at least 4-5 enquiries a week just because we replied too late on WhatsApp. Now the auto-reply goes out instantly and our bookings have genuinely doubled in 6 weeks."
  },
  {
    initials: 'BA',
    shopName: 'Boss Auto Care',
    handle: '@bossautocaresuryanagar',
    review: "We had zero online presence — customers couldn't even find us on Google. DetailPro built our site in under a week and now we rank for detailing in our area. The CRM alone is worth it."
  },
  {
    initials: 'D1',
    shopName: 'D12 Car Studio',
    handle: '@d12_car_vapi',
    review: "The WhatsApp reminders they set up for us are insane. Customers we serviced 3 months ago are coming back just because of an automated message. We didn't have to do anything."
  },
  {
    initials: 'CL',
    shopName: 'Cloakh HTX',
    handle: '@cloakh_htx',
    review: "Honestly thought Rs. 4,000 a month was too much at first. Within the first month we tracked 11 new bookings through the system that we would have never followed up on manually. It pays for itself."
  },
  {
    initials: 'CD',
    shopName: 'Car Decora Siliguri',
    handle: '@cardecora_siliguri',
    review: "The website they built for us gets compliments from customers constantly. People say it looks more professional than shops that have been running 10 years. Very happy with the whole package."
  }
];

// Duplicate the cards for seamless scroll
const loopingReviews = [...reviewsData, ...reviewsData];

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <span className="reviews-label">TRUSTED BY</span>
          <h2 className="reviews-title">What Detailing Shops Are Saying</h2>
          <p className="reviews-sub">Shops across India growing with DetailPro</p>
        </div>
      </div>

      <div className="reviews-wrapper">
        <div className="reviews-track">
          {loopingReviews.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="stars">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
              <p className="review-text">"{review.review}"</p>
              <div className="review-divider"></div>
              <div className="reviewer">
                <div className="avatar">{review.initials}</div>
                <div className="reviewer-info">
                  <span className="shop-name">
                    {review.shopName}
                    <svg className="verified-tick" viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  <span className="handle">{review.handle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}