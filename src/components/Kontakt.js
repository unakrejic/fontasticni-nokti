import React, { useState } from "react";
import "./Kontakt.css";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [action, setAction] = useState("Posalji");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [poruka, setPoruka] = useState("");
  const [promo, setPromo] = useState("");
  const [usluga, setUsluga] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  };

  const handleActionChange = (newAction) => {
    setError("");
    setAction(newAction);
    setEmail("");
    setUsername("");
    setPoruka("");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">KONTAKTIRAJ NAS</div>
        <h2>Zakažite svoj termin u FONtasticnim noktima!</h2>
        <p>
          Naš tim stručnjaka za negu noktiju uvek je tu da odgovori na sva vaša
          pitanja, pruži vam profesionalne preporuke za personalizovane
          tretmane, kao i savete za pravilnu negu i održavanje noktiju kod kuće.
        </p>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <i className="fas fa-user" />
            <input
              type="text"
              placeholder="Unesite ime"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <i className="fas fa-envelope" />
            <input
              type="text"
              placeholder="Unesite email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <i className="fa-solid fa-comment" />
            <input
              type="text"
              placeholder="Unesite poruku"
              value={poruka}
              onChange={(e) => setPoruka(e.target.value)}
            />
          </div>
         

          <select
            id="usluga"
            value={usluga}
            onChange={(e) => setUsluga(e.target.value)}
            className="input"
          >
            <option value="" disabled>
              Odaberite uslugu
            </option>
            <option value="manikir">Manikir</option>
            <option value="pedikir">Pedikir</option>
            <option value="gel">Gel nokti</option>
            <option value="nadogradnja">Nadogradnja noktiju</option>
            <option value="lakiranje">Lakiranje noktiju</option>
          </select>

          <div className="input">
            <i className="fa-solid fa-hashtag" />
            <input
              type="text"
              placeholder="Unesite promo kod"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
          </div>
        </div>
        {error && <div className="error">{error}</div>}

        <button type="submit" className="submit-button">
          Rezerviši
        </button>
      </form>
    </div>
  );
}

export default LoginSignup;
