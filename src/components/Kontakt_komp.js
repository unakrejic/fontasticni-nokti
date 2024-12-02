import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Kontakt_komp.css";
import nailskImage from "./images/manicure-tables-nail-spa.jpeg";
import Button from "./Button";

function Kontakt() {
  return (
    <div className="kontakt-about-section">
      <div className="kontakt-about-content">
        <div className="kontakt-onama-section">
          <img src={nailskImage} alt="Salon" className="kontakt-image-about"/>
        </div>
        <div className="kontakt-onama-section">
          <h1>Kontaktiraj nas!</h1>
          <p>
            Istraži svet profesionalne nege noktiju i opuštajućih masaža
            vrhunskim tehnikama i kvalitetnim proizvodima.
          </p>
          <Button to="/registracija">Zakaži termin</Button>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
