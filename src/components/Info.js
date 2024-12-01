import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Info_pocetna.css";
import entranceImage from "./images/entrance.jpg";

function Info() {
  return (
    <div className="home-container">
      <div className="image-about">
        <h1>O nama</h1>
      </div>
      <div className="about-section">
        <div className="about-content">
          <div className="onama-section">
            <h1>Dobrodošli u naš salon lepote!</h1>
            <p>
              Naš salon lepote je mesto gde se posvećujemo pružanju vrhunske
              nege i opuštanja za naše klijente. Ponosimo se kvalitetom usluga
              koje nudimo, koristeći samo najkvalitetnije proizvode i najnovije
              tehnike.
            </p>
            <p>
              Bilo da tražite klasičan manikir, elegantan francuski stil,
              tretman za oštećene nokte ili opuštajuću masažu, naš tim
              profesionalaca je ovde da vam pruži nezaboravno iskustvo. Svaki
              klijent je za nas poseban i trudimo se da izađemo u susret svim
              vašim željama i potrebama.
            </p>
            <p>
              Naša misija je da se osećate lepo, negovano i opušteno svaki put
              kada nas posetite.
            </p>
          </div>
          <div className="onama-section">
            <img src={entranceImage} alt="Salon" className="kontakt-image-about"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
