import React from "react";
import hijabQuizImg from "../assets/images/hijab-quiz.svg";
import "./QuizSection.css";

interface QuizSectionProps {
  className?: string;
}

const QuizSection: React.FC<QuizSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`quiz-section ${className}`}
      aria-labelledby="quiz-heading"
    >
      <div className="quiz-container">
        <article className="quiz-card">
          <div className="quiz-visual">
            <div className="quiz-images">
              <img
                src={hijabQuizImg}
                alt="Marriage readiness quiz illustration"
                className="hijab-quiz-img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="quiz-content">
            <header className="quiz-header">
              <h2 id="quiz-heading" className="quiz-title">
                Are You Marriage-Ready?
              </h2>
              <p className="quiz-description">
                This is your pre-marriage GPA. Each slice reveals how close you
                are to being wife-material for a high-quality husband
              </p>
            </header>
            <div className="quiz-action">
              <button
                className="btn-quiz"
                type="button"
                aria-label="Take the marriage readiness quiz now"
              >
                TAKE THE QUIZ NOW!
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default QuizSection;
