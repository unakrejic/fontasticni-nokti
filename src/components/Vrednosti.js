import React, { useState, useEffect } from "react";
import "./Vrednosti.css";

function Vr() {
  return (
    <div className="vr-container">
      <h2>Naše vrednosti</h2>
      <div className="vr-section">
        <div className="vr-pod">
          <h3>Elegancija</h3>
          <p>
            FONtastični nokti znače elegancija. U svakom trenutku, u svakoj
            prilici. Sve što radimo, radimo sa stilom. Poštujemo klijente i
            kolege. Iznenađujemo uvek i iznova. Pomažemo drugima i motivišemo ih
            da čine to isto.
          </p>
        </div>
        <div className="vr-pod">
          <h3>Inovativnost</h3>
          <p>
            FONtastični nokti volе inovaciju i u stalnoj su potrazi za
            uzbudljivim, novim tehnologijama u oblasti nege noktiju. Donosimo
            kvalitet, originalnost i lepotu našim klijentima. Garantujemo
            efikasnost, kvalitet i zadovoljstvo svakog klijenta.
          </p>
        </div>
        <div className="vr-pod">
          <h3>Inspiracije</h3>
          <p>
            Za FONtastične nokte kreativnost je stanje uma. To je stav koji
            inspiriše. Inspirišemo naše partnere i klijente. Lansiranje trendova
            i stvaranje vizuelno privlačnih i inovativnih, novih proizvoda je
            ono u čemu smo najbolji. FONtastični nokti inspirišu, profesionalno
            i kreativno.
          </p>
        </div>
        <div className="vr-pod">
          <h3>Radost</h3>
          <p>
            FONtastični nokti bude ono najbolje u ljudima. Poigravanje i zabava
            sa bojama i ukrasima. Tako ljudi uživaju u svojim bezgraničnim
            mogućnostima i radostima koje one donose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vr;
