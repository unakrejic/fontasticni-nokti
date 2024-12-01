import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-subscription-container">
        <div className="footer-subscription">
          <h2>Rezerviši svoj termin sada!</h2>
          <p>
            Dobrodošli u FONtastični nokti PREMIUM SALON! Doživite nezaboravno
            iskustvo u najekskluzivnijem salonu u Beogradu, mestu gde se susreću
            umetnost vrhunske nege noktiju, opuštajuće masaže, najbolji svetski
            brendovi i profesionalnost našeg stručnog tima.
          </p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-subscription footer-subscription-centre">
          <h2>Kontaktiraj nas</h2>
          <p>email: fontasticni@gmail.com</p>
          <p>phone: 069 123 123</p>
        </div>
      </div>

      <section className="social-media">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            FONtastični nokti <i className="fa-solid fa-spa" />
          </Link>
        </div>
        <div className="social-icons">
          <a
            href="/"
            target="_blank"
            aria-label="Facebook"
            className="social-icon"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="/"
            target="_blank"
            aria-label="Instagram"
            className="social-icon"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="/"
            target="_blank"
            aria-label="Youtube"
            className="social-icon"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="/"
            target="_blank"
            aria-label="Twitter"
            className="social-icon"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="/"
            target="_blank"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
