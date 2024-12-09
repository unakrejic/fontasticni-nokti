import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Rez() {
  const location = useLocation();
  const reservation = location.state?.reservation;

  return (
    <div>
      <h1>Reservation Confirmation</h1>
      {reservation ? (
        <div>
          <p>Reservation ID: {reservation.ID}</p>
          <p>Service: {reservation.Broj}</p>
          <p>
            Date and Time: {new Date(reservation.DatumVreme).toLocaleString()}
          </p>
          <p>Total Price: {reservation.UkupnaCena}</p>
        </div>
      ) : (
        <p>No reservation data found.</p>
      )}
    </div>
  );
}

export default Rez;
