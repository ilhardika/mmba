import React from "react";
import hijabWoman1Img from "../assets/images/hijab-woman-1.png";
import "./SeatSection.css";

interface SeatSectionProps {
  className?: string;
}

const SeatSection: React.FC<SeatSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`seat-section ${className}`}
      aria-labelledby="seat-heading"
    >
      <div className="seat-container">
        <article className="seat-card">
          <div className="seat-content">
            <header className="seat-header">
              <h2 id="seat-heading" className="seat-title">
                Gift a Seat to Unlock My $4K Scholarship
              </h2>
            </header>
            <div className="seat-actions">
              <div className="seat-cta">
                <button
                  className="btn-secure"
                  type="button"
                  aria-label="Secure your seat for the scholarship program"
                >
                  SECURE MY SEAT
                </button>
              </div>
              <div className="seat-testimonial">
                <div className="testimonial-rating">
                  <div className="stars" aria-label="5 star rating">
                    <span aria-hidden="true">⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="review-count">( 1k+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="seat-visual">
            <img
              src={hijabWoman1Img}
              alt="Happy woman who secured her scholarship seat"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default SeatSection;
