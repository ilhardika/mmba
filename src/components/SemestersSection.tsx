import React from "react";
import bookLoveMistakesImg from "../assets/images/book-love-mistakes.png";
import bookMarriageMagnetImg from "../assets/images/book-marriage-magnet.png";
import "./SemestersSection.css";

interface SemesterCardData {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string[];
  studentCount: string;
}

interface SemestersSectionProps {
  className?: string;
}

const SemestersSection: React.FC<SemestersSectionProps> = ({
  className = "",
}) => {
  const semesters: SemesterCardData[] = [
    {
      id: "love-mistakes",
      image: bookLoveMistakesImg,
      alt: "Love Mistakes Book Cover",
      title: "Love Mistakes",
      description: [
        "How Not to Fall in Love with Mr. Wrong",
        "Learn to detect red flags, heal old wounds, and stop making the sneaky mistakes that most women never recover from—before or after marriage.",
      ],
      studentCount: "40+",
    },
    {
      id: "marriage-magnet",
      image: bookMarriageMagnetImg,
      alt: "Marriage Magnet Book Cover",
      title: "Marriage Magnet",
      description: [
        "How to Become Irresistible to Your Future Husband",
        "Master the art of attraction, develop magnetic confidence, and create the mindset that draws the right man into your life.",
      ],
      studentCount: "11+",
    },
    {
      id: "10k-magnet",
      image: bookMarriageMagnetImg,
      alt: "10K Magnet Book Cover",
      title: "10K Magnet",
      description: [
        "Plan Your Dream Wedding",
        "Skip the stress, impress the right people (including yourself), and start your marriage strong. This is where you learn what actually matters on your big day.",
      ],
      studentCount: "11+",
    },
  ];

  return (
    <section
      className={`semesters-section ${className}`}
      aria-labelledby="semesters-heading"
    >
      <div className="semesters-container">
        <header className="semesters-header">
          <h2 id="semesters-heading" className="semesters-title">
            Our Semesters
          </h2>
        </header>
        <div className="semesters-grid" role="list">
          {semesters.map((semester) => (
            <article
              key={semester.id}
              className="semester-card"
              role="listitem"
            >
              <div className="card-image">
                <img src={semester.image} alt={semester.alt} loading="lazy" />
              </div>
              <div className="card-content">
                <header>
                  <h3 className="card-title">{semester.title}</h3>
                </header>
                <div className="card-description">
                  {semester.description.map((line, index) => (
                    <p
                      key={index}
                      className={index === 0 ? "subtitle" : "description"}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <footer className="card-footer">
                  <div className="student-stats">
                    <div className="student-count">
                      <span
                        className="count"
                        aria-label={`${semester.studentCount} students enrolled`}
                      >
                        {semester.studentCount}
                      </span>
                      <span className="label">students</span>
                    </div>
                  </div>
                  <div className="card-action">
                    <button
                      className="btn-enroll"
                      type="button"
                      aria-label={`Enroll in ${semester.title} course`}
                    >
                      enroll now
                    </button>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemestersSection;
