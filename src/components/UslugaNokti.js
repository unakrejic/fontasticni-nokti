import React, { useState, useEffect } from "react";
import Usluga from "./Usluga";
import "./SveUsluge.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UslugaNokti() {
  const [usluge, setUsluge] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/rezervacije/usluge`
        );
        setUsluge(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Greska sa ucitavanjem usluga");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleBookNow = (id) => {
    navigate(`/rezervacija/${id}`);
  };

  return (
    <div className="usluge">
      <h1>Naše usluge za Vaše nokte</h1>
      <div className="usluge_container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : usluge.length > 0 ? (
          usluge.map((usluga) => (
            <Usluga
              key={usluga.id}
              src={usluga.slika}
              naziv={usluga.naziv}
              opis={usluga.opis}
              cena={usluga.cena}
              kapacitet={usluga.kapacitet}
              onClick={() => handleBookNow(usluga.id)}
            />
          ))
        ) : (
          <p>Nema usluga</p>
        )}
      </div>
    </div>
  );
}

export default UslugaNokti;
