import React, { useState, useEffect } from "react";
import Usluga from "./Usluga";
import "./SveUsluge.css";

function UslugaMasaze() {
  const [usluge, setUsluge] = useState([]);
  const [loading, setLoading] = useState(true);

  /*

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleBookNow = (serviceId) => {
    console.log(`Service ${serviceId} booked!`);
    // You can add booking logic here, e.g., redirect or API call.
  };



   key={usluga.id}
              src={usluga.sliika}
              name={usluga.naziv}
              description={usluga.opis}
              price={usluga.cena}
              capacity={usluga.kapacitet}
              onClick={() => handleBookNow(usluga.id)}
   
  */

  return (
    <div className="usluge">
      <h1>Masaze</h1>
      <div className="usluge_container">
        {loading ? (
          <p>Loading...</p>
        ) : usluge.length > 0 ? (
          usluge.map((usluga) => (
            <Usluga
              key={1}
              src={usluga.sliika}
              name={"Masaza"}
              description={"Lepi, jaki i zdravi prirodni nokti su osnova savršenog manikira."}
              price={300}
              capacity={5}
              //onClick={() => handleBookNow(usluga.id)}
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
