import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar";

// Import images
import logoImg from "../assets/images/logo.png";
import heroImg from "../assets/images/hero-image.png";
import brokenHeartImg from "../assets/images/broken-heart.png";
import bookLoveMistakesImg from "../assets/images/book-love-mistakes.png";
import bookMarriageMagnetImg from "../assets/images/book-marriage-magnet.png";
import love3dImg from "../assets/images/love-3d-1.png";
import hijabWoman2Img from "../assets/images/hijab-woman-2.png";
import hijabWoman1Img from "../assets/images/hijab-woman-1.png";
import testimonialZainabImg from "../assets/images/testimonial-zainab.png";
import testimonialPerson2Img from "../assets/images/testimonial-person-2.png";
import testimonialPerson3Img from "../assets/images/testimonial-person-3.png";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Background */}
      <div className="background-gradient"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <img
              src={heroImg}
              alt="Hero"
              className="hero-image"
              loading="eager"
            />
          </div>
          <div className="hero-right">
            <h1 className="hero-title">
              Write Your Own Happily Ever Hereafter
            </h1>
            <p className="hero-subtitle">
              A 10-Step Roadmap for Muslim Women to Find Their Mr. Right,
              Divorce-Proof Their Future Marriage, and Become a True-Love Magnet
              — without dating, swiping, or settling.
            </p>
            <button className="btn-cta">START YOUR JOURNEY</button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <div className="why-container">
          <div className="why-card">
            <div className="why-left">
              <div className="why-title">
                <h2>
                  <span className="why-highlight">Why</span> Most Muslim
                  Marriages Fail Within 5 Years
                </h2>
              </div>
              <div className="why-list">
                <div className="why-item">
                  <div className="why-icon">⭐</div>
                  <span>Skipping pre-marriage education</span>
                </div>
                <div className="why-item">
                  <div className="why-icon">⭐</div>
                  <span>Marrying Mr. Wrong out of pressure or loneliness</span>
                </div>
                <div className="why-item">
                  <div className="why-icon">⭐</div>
                  <span>
                    Getting swept away by emotions without real selection
                  </span>
                </div>
                <div className="why-item">
                  <div className="why-icon">⭐</div>
                  <span>Mistaking connection for compatibility</span>
                </div>
                <div className="why-item">
                  <div className="why-icon">⭐</div>
                  <span>Having no idea what marriage actually requires</span>
                </div>
              </div>
            </div>
            <div className="why-right">
              <img
                src={brokenHeartImg}
                alt="Broken Heart"
                className="broken-heart-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Semesters Section */}
      <section className="semesters-section">
        <div className="semesters-container">
          <h2 className="semesters-title">Our Semesters</h2>
          <div className="semesters-cards">
            {/* Love Mistakes Card */}
            <div className="semester-card">
              <div className="card-image">
                <img src={bookLoveMistakesImg} alt="Love Mistakes Book" />
              </div>
              <div className="card-content">
                <h3>Love Mistakes</h3>
                <p>
                  How Not to Fall in Love with Mr. Wrong
                  <br />
                  Learn to detect red flags, heal old wounds, and stop making
                  the sneaky mistakes that most women never recover from—before
                  or after marriage.
                </p>
                <div className="card-stats">
                  <div className="student-count">
                    <span className="count">40+</span>
                    <span className="label">students</span>
                  </div>
                  <button className="btn-enroll">enroll now</button>
                </div>
              </div>
            </div>

            {/* Marriage Magnet Card */}
            <div className="semester-card">
              <div className="card-image">
                <img src={bookMarriageMagnetImg} alt="Marriage Magnet Book" />
              </div>
              <div className="card-content">
                <h3>Marriage Magnet</h3>
                <p>
                  How to Become Irresistible to Your Future Husband
                  <br />
                  Master the art of attraction, develop magnetic confidence, and
                  create the mindset that draws the right man into your life.
                </p>
                <div className="card-stats">
                  <div className="student-count">
                    <span className="count">11+</span>
                    <span className="label">students</span>
                  </div>
                  <button className="btn-enroll">enroll now</button>
                </div>
              </div>
            </div>

            {/* 10K Magnet Card */}
            <div className="semester-card">
              <div className="card-image">
                <img src={bookMarriageMagnetImg} alt="10K Magnet Book" />
              </div>
              <div className="card-content">
                <h3>10K Magnet</h3>
                <p>
                  Plan Your Dream Wedding
                  <br />
                  Skip the stress, impress the right people (including
                  yourself), and start your marriage strong. This is where you
                  learn what actually matters on your big day.
                </p>
                <div className="card-stats">
                  <div className="student-count">
                    <span className="count">11+</span>
                    <span className="label">students</span>
                  </div>
                  <button className="btn-enroll">enroll now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="quiz-section">
        <div className="quiz-container">
          <div className="quiz-card">
            <div className="quiz-left">
              <div className="quiz-images">
                <img
                  src={love3dImg}
                  alt="Love 3D"
                  className="love-3d-1"
                  loading="lazy"
                />
                <img
                  src={hijabWoman2Img}
                  alt="Hijab Woman"
                  className="hijab-woman"
                  loading="lazy"
                />
                <img
                  src={love3dImg}
                  alt="Love 3D"
                  className="love-3d-2"
                  loading="lazy"
                />
                <img
                  src={love3dImg}
                  alt="Love 3D"
                  className="love-3d-3"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="quiz-right">
              <h2>Are You Marriage-Ready?</h2>
              <p>
                This is your pre-marriage GPA. Each slice reveals how close you
                are to being wife-material for a high-quality husband
              </p>
              <button className="btn-quiz">TAKE THE QUIZ NOW!</button>
            </div>
          </div>
        </div>
      </section>

      {/* Gift a Seat Section */}
      <section className="seat-section">
        <div className="seat-container">
          <div className="seat-card">
            <div className="seat-left">
              <h2>Gift a Seat to Unlock My $4K Scholarship</h2>
              <div className="seat-actions">
                <button className="btn-secure">SECURE MY SEAT</button>
                <div className="testimonial-mini">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <span>( 1k+ Reviews)</span>
                </div>
              </div>
            </div>
            <div className="seat-right">
              <img src={hijabWoman1Img} alt="Hijab Woman" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Our Readers Say</h2>
          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="testimonial-profile">
                <img src={testimonialZainabImg} alt="Zainab Faraj" />
              </div>
              <div className="testimonial-content">
                <h4>"No Shaming, no blaming"</h4>
                <p>
                  I absolutely love that this book validates Muslim women's
                  often very heartbreaking realities with love and
                  relationships, acknowledges men's faults and where they go
                  wrong, and gives a Muslimah a clear path to love that allows
                  her to be vulnerable, honest, and accepting of herself. There
                  is no shaming, no willful disregard of the very real problems
                  Muslim women go through (that the larger community tries to
                  cover up), and no blaming.
                </p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="testimonial-name">
                  Zainab Faraj
                  <br />
                  U.S.A.
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="testimonial-profile">
                <img src={testimonialPerson2Img} alt="Dania Abuleil" />
              </div>
              <div className="testimonial-content">
                <h4>"As if he was reading my thoughts"</h4>
                <p>
                  I love how practical this book is - how there are clear,
                  defined steps for what to do and what actions to take. I like
                  that it's a conversational book. I could almost hear the
                  author telling me what to do. At times, it was as if he was
                  reading my thoughts because the next line would be a response
                  to what I was just thinking.
                </p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="testimonial-name">
                  Dania Abuleil
                  <br />
                  Canada
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="testimonial-profile">
                <img src={testimonialPerson3Img} alt="Mina Saydova" />
              </div>
              <div className="testimonial-content">
                <h4>"I haven't cried like this in a long time"</h4>
                <p>
                  This is amazing and brutal at the same time. If my heart was a
                  wall made of stone bricks, I would say that some of the big
                  rocks just fell down and I feel a bit lighter after reading
                  the book. Thank you for making me do this.
                </p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="testimonial-name">
                  Mina Saydova
                  <br />
                  U.S.A.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logoImg} alt="Marriage MBA Logo" />
          </div>
          <div className="footer-content">
            <h3>Empowering couples with knowledge, growth, and love</h3>
            <p>
              Because marriage isn't only about saying 'I do'—it's about
              learning, growing, and choosing each other every day. Marriage.MBA
              is here to equip you with knowledge and inspiration for that
              lifelong commitment
            </p>
            <div className="footer-buttons">
              <button className="footer-btn">👋 Contact</button>
              <button className="footer-btn">👀 Insights</button>
            </div>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link">
              🐦
            </a>
            <a href="#" className="social-link">
              💼
            </a>
            <a href="#" className="social-link">
              📘
            </a>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            © 2025 Marriage.MBA All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
