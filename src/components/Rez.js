import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Rez.css";
import axios from "axios";

function Rez() {
  const location = useLocation();
  const reservation = location.state?.reservation;

  const [usluga, setUsluga] = useState("");
  const [promo, setPromo] = useState("");
  const [promogen, setPromogen] = useState("");
  const [musterija, setMusterija] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      if (reservation) {
        try {
          const customerResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/rezervacije/musterija/${reservation.iDmusterije}`
          );
          setMusterija(customerResponse.data);
          console.log(musterija);

          const serviceResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/rezervacije/usluga/${reservation.broj}`
          );
          setUsluga(serviceResponse.data);
          console.log(usluga);

          if (reservation.iskoriscenKodID) {
            const promoResponse = await axios.get(
              `${process.env.REACT_APP_API_URL}/rezervacije/promokod/${reservation.iskoriscenKodID}`
            );
            setPromo(promoResponse.data);
            console.log(promo);
          }

          const generisankod = await axios.get(
            `${process.env.REACT_APP_API_URL}/rezervacije/promokod/${reservation.generisanKodID}`
          );
          setPromogen(generisankod.data);
          console.log(promogen);
        } catch (error) {
          console.error("Ne moze da se prikaze rezervacija", error);
        }
      }
    };

    fetchDetails();
  }, [reservation]);

  if (!reservation) {
    return (
      <div>
        <h1>Detalji rezervacije</h1>
        <p>No reservation data available. Please try again.</p>
      </div>
    );
  }

  const handleCancelReservation = async () => {
    if (reservation) {
      const confirmCancel = window.confirm(
        "Da li ste sigurni da želite da otkažete rezervaciju?"
      );

      if (!confirmCancel) {
        return;
      }

      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/rezervacije/${reservation.id}`
        );
        alert(response.data);
        navigate("/");
      } catch (error) {
        console.error("Error canceling reservation:", error);
        alert("Došlo je do greške prilikom otkazivanja rezervacije.");
      }
    }
  };

  const handleLeavePage = () => {
    navigate("/");
  };

  return (
    <div className="reservation-details">
      <h1>Detalji rezervacije</h1>
      <div className="details">
        <p>
          <strong>Ime:</strong> {musterija.imePrezime}
        </p>
        <p>
          <strong>Email:</strong> {musterija.email}
        </p>
        <p>
          <strong>Usluga:</strong> {usluga.naziv}
        </p>
        <p>
          <strong>Poruka:</strong> {reservation.poruka || "No message provided"}
        </p>
        <p>
          <strong>Datum i vreme:</strong>{" "}
          {new Date(reservation.datumVreme).toLocaleString()}
        </p>
        <p>
          <strong>Cena:</strong> {reservation.ukupnaCena} RSD
        </p>
        {reservation.iskoriscenKodID && (
          <p>
            <strong>Iskorišćen promo kod:</strong> {promo.kod}
          </p>
        )}
        <p>
          <strong>Generisan promo kod:</strong> {promogen.kod}
        </p>
        <p>
          <strong>Token rezervacije:</strong> {reservation.token || "N/A"}
        </p>
      </div>
      <div className="buttons">
        <button onClick={handleCancelReservation} className="cancel-btn">
          Otkazi rezervaciju
        </button>
        <button onClick={handleLeavePage} className="leave-btn">
          Napusti stranicu
        </button>
      </div>
    </div>
  );
}

export default Rez;
