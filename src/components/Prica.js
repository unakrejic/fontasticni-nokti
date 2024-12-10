import React, { useState, useEffect } from "react";
import "./Prica.css";
import pricaslika from "./images/prica.jpg";

function Prica() {
  return (
    <div className="prica-container">
      <div className="prica-content">
        <div className="img-section">
          <img src={pricaslika} alt="Prica" className="prica-image-about" />
        </div>
        <div className="prica-section">
            <h1>Naša priča</h1>
          <p>
            Salon FONtastični Nokti nastao je iz ljubavi prema lepoti i
            negovanju stila. Naša priča počinje sa vizijom da pružimo vrhunske
            usluge manikira i pedikira, koristeći najkvalitetnije proizvode i
            tehnike.
          </p>
          <p>
            Od prvog dana, posvećeni smo postavljanju standarda u industriji,
            stvarajući iskustvo koje kombinuje eleganciju, profesionalnost i
            inovaciju. Inspirisani zahtevima modernih žena i muškaraca, naš
            salon je mesto gde se lepota i opuštanje sreću.
          </p>
          <p>
            U ponudi imamo širok spektar usluga, od klasičnih tretmana noktiju,
            preko unikatnog nail art dizajna. Posebno izdvajamo našu premium
            uslugu masaža sa aromom sveća, kreiranu da vas oslobodi stresa i
            pruži trenutke čiste harmonije. Uz tim talentovanih i stručnih
            profesionalaca, FONtastični Nokti su postali sinonim za kvalitet i
            zadovoljstvo. Verujemo da je lepota u detaljima i ponosni smo što
            svakom klijentu pružamo personalizovan pristup, osiguravajući da
            izađe iz našeg salona sa osmehom i savršenim noktima.{" "}
          </p>
          <p>
            Dobrodošli u svet FONtastičnih Noktiju, gde svaki detalj govori vašu
            priču lepote. Vaša elegancija, naša misija.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Prica;
