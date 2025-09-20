import React from "react";
import heroImg from "../assets/images/hero-image.png";
import "./Hero.css";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <main className={`hero ${className}`} role="main">
      <div className="hero-container">
        <div className="hero-left">
          <img
            src={heroImg}
            alt="Hero illustration of a person"
            className="hero-image"
            loading="eager"
          />
        </div>
        <div className="hero-right">
          <header className="hero-content">
            <h1 className="hero-title">
              Write Your Own Happily Ever Hereafter
            </h1>
            <p className="hero-subtitle">
              A 10-Step Roadmap for Muslim Women to Find Their Mr. Right,
              Divorce-Proof Their Future Marriage, and Become a True-Love Magnet
              — without dating, swiping, or settling.
            </p>
            <div className="hero-cta">
              <button className="btn-cta" type="button">
                START YOUR JOURNEY
              </button>
            </div>
          </header>
        </div>
      </div>
    </main>
  );
};

export default Hero;
