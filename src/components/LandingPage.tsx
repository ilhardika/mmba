import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhySection from "./WhySection";
import SemestersSection from "./SemestersSection";
import QuizSection from "./QuizSection";
import SeatSection from "./SeatSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Background */}
      <div className="background-gradient"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Why Section */}
      <WhySection />

      {/* Quiz Section */}
      <QuizSection />

      {/* Our Semesters Section */}
      <SemestersSection />

      <SeatSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
