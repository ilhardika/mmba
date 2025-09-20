import React from "react";
import "./Footer.css";

// Import images
import logoImg from "../assets/images/logo.png";

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface FooterButton {
  icon: string;
  text: string;
  onClick?: () => void;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: "🐦", href: "#", label: "Twitter" },
    { icon: "💼", href: "#", label: "LinkedIn" },
    { icon: "📘", href: "#", label: "Facebook" },
  ];

  const footerButtons: FooterButton[] = [
    { icon: "👋", text: "Contact" },
    { icon: "👀", text: "Insights" },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoImg} alt="Marriage MBA Logo" />
        </div>

        <div className="footer-content">
          <header>
            <h3>Empowering couples with knowledge, growth, and love</h3>
          </header>
          <p>
            Because marriage isn't only about saying 'I do'—it's about learning,
            growing, and choosing each other every day. Marriage.MBA is here to
            equip you with knowledge and inspiration for that lifelong
            commitment
          </p>

          <div className="footer-buttons">
            {footerButtons.map((button, index) => (
              <button
                key={index}
                type="button"
                className="footer-btn"
                onClick={button.onClick}
                aria-label={`${button.text} us`}
              >
                {button.icon} {button.text}
              </button>
            ))}
          </div>
        </div>

        <nav className="footer-social" aria-label="Social media links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="social-link"
              aria-label={`Visit our ${link.label} page`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </nav>

        <div className="footer-divider" role="separator"></div>

        <div className="footer-copyright">
          © 2025 Marriage.MBA All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
