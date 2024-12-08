import React, { useState, useEffect } from "react";
import Usluga from "./Usluga";
import "./SveUsluge.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UslugaMasaze() {
  const [usluge, setUsluge] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleBookNow = (id) => {
    navigate(`/rezervacija/${id}`);
  };
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


  return (
    <div className="usluge">
      <h1>Masaže</h1>
      <div className="usluge_container">
      {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : usluge.length > 0 ? (
          usluge
            .filter((usluga) => usluga.naziv.toLowerCase().includes("masaža"))
            .map((usluga) => (
              <Usluga
                key={usluga.id}
                src={`http://localhost:5075${usluga.slika}`}
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

export default UslugaMasaze;
