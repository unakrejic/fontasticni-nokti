/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Rezerviši svoj termin sada!
        </p>
      </section>

      <div className="footer-links">
          <div className="footer-link-items">
            <h2>Kontaktiraj nas</h2>
            <p className="footer-subscription-p">email: fontasticni@gmail.com</p>
            <p className="footer-subscription-p">phone: 069 123 123</p>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              FONtasticni nokti
              <i className="fa-solid fa-spa" />
            </Link>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;*/
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-subscription">
        <p>Rezerviši svoj termin sada!</p>
      </section>

      <div className="footer-links">
        <div className="footer-link-items">
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
          <a href="/" target="_blank" aria-label="Facebook" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/" target="_blank" aria-label="Instagram" className="social-icon">
            <i className="fab fa-instagram" />
          </a>
          <a href="/" target="_blank" aria-label="Youtube" className="social-icon">
            <i className="fab fa-youtube" />
          </a>
          <a href="/" target="_blank" aria-label="Twitter" className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="/" target="_blank" aria-label="LinkedIn" className="social-icon">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
