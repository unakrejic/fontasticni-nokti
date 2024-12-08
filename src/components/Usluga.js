import React from "react";
import Button from "./Button"; 

function Usluga({ src, naziv, opis, cena, kapacitet, onClick }) {
    const handleClick = (e) => {
        e.preventDefault();
        scrollToTop();
      };
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
    <div className="usluga">
      <img className="usluga_img" src={src} alt={`${naziv} image`} />
      <h3 className="usluga_naziv">{naziv}</h3>
      <p className="usluga_opis">{opis}</p>
      <div className="usluga_detalji">
        <span className="usluga_cena">Cena: ${cena}</span>
        <span className="usluga_kapacitet">Kapacitet: {kapacitet}</span>
        <Button to="/registracija">Zakaži termin</Button>
      </div>
    </div>
  );
}

export default Usluga;