import React from "react";
import "./TestimonialsSection.css";

// Import testimonial images
import testimonialZainabImg from "../assets/images/testimonial-zainab.png";
import testimonialPerson2Img from "../assets/images/testimonial-person-2.png";
import testimonialPerson3Img from "../assets/images/testimonial-person-3.png";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  title: string;
  content: string;
  image: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Zainab Faraj",
      location: "U.S.A.",
      title: "No Shaming, no blaming",
      content:
        "I absolutely love that this book validates Muslim women's often very heartbreaking realities with love and relationships, acknowledges men's faults and where they go wrong, and gives a Muslimah a clear path to love that allows her to be vulnerable, honest, and accepting of herself. There is no shaming, no willful disregard of the very real problems Muslim women go through (that the larger community tries to cover up), and no blaming.",
      image: testimonialZainabImg,
      rating: 5,
    },
    {
      id: 2,
      name: "Dania Abuleil",
      location: "Canada",
      title: "As if he was reading my thoughts",
      content:
        "I love how practical this book is - how there are clear, defined steps for what to do and what actions to take. I like that it's a conversational book. I could almost hear the author telling me what to do. At times, it was as if he was reading my thoughts because the next line would be a response to what I was just thinking.",
      image: testimonialPerson2Img,
      rating: 5,
    },
    {
      id: 3,
      name: "Mina Saydova",
      location: "U.S.A.",
      title: "I haven't cried like this in a long time",
      content:
        "This is amazing and brutal at the same time. If my heart was a wall made of stone bricks, I would say that some of the big rocks just fell down and I feel a bit lighter after reading the book. Thank you for making me do this.",
      image: testimonialPerson3Img,
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <div className="testimonials-container">
        <header>
          <h2 id="testimonials-heading" className="testimonials-title">
            What Our Readers Say
          </h2>
        </header>
        <div className="testimonials-grid" role="list">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="testimonial-card"
              role="listitem"
            >
              <div className="testimonial-profile">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} profile photo`}
                />
              </div>
              <div className="testimonial-content">
                <header>
                  <h4>"{testimonial.title}"</h4>
                </header>
                <blockquote>
                  <p>{testimonial.content}</p>
                </blockquote>
                <div
                  className="stars"
                  role="img"
                  aria-label={`${testimonial.rating} out of 5 star rating`}
                >
                  {renderStars(testimonial.rating)}
                </div>
                <cite className="testimonial-name">
                  {testimonial.name}
                  <br />
                  {testimonial.location}
                </cite>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
