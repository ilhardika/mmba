import React from "react";
import brokenHeartImg from "../assets/images/broken-heart.png";
import "./WhySection.css";

interface WhySectionProps {
  className?: string;
}

const WhySection: React.FC<WhySectionProps> = ({ className = "" }) => {
  const reasons = [
    "Skipping pre-marriage education",
    "Marrying Mr. Wrong out of pressure or loneliness",
    "Getting swept away by emotions without real selection",
    "Mistaking connection for compatibility",
    "Having no idea what marriage actually requires",
  ];

  return (
    <section
      className={`why-section ${className}`}
      aria-labelledby="why-heading"
    >
      <div className="why-container">
        <article className="why-card">
          <div className="why-content">
            <header className="why-header">
              <h2 id="why-heading" className="why-title">
                <span className="why-highlight">Why</span> Most Muslim Marriages
                Fail Within 5 Years
              </h2>
            </header>
            <div className="why-reasons">
              <ul className="why-list" role="list">
                {reasons.map((reason, index) => (
                  <li key={index} className="why-item" role="listitem">
                    <span className="why-icon" aria-hidden="true">
                      ⭐
                    </span>
                    <span className="why-text">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="why-image">
            <img
              src={brokenHeartImg}
              alt="Illustration representing relationship challenges"
              className="broken-heart-image"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhySection;
