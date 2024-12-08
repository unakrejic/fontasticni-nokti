import React, { useState } from "react";
import "./Kontakt.css";
import { useNavigate, useParams } from "react-router-dom";

function Kon() {
  const { id } = useParams();
  const [action, setAction] = useState("Rezerviši");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [poruka, setPoruka] = useState("");
  const [promo, setPromo] = useState("");
  const [usluga, setUsluga] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  };

  const handlePromoCheck = async () => {
    setError("");
    setDiscountedPrice(null);

    if (!promo) {
      setError("Molimo unesite promo kod.");
      return;
    }
  };

  const handleActionChange = (newAction) => {
    setError("");
    setAction(newAction);
    setEmail("");
    setUsername("");
    setPoruka("");
    setPromo("");
    setToken("");
    setDiscountedPrice(null);
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
        <div className="submit-container">
          <div
            className={action === "Rezerviši" ? "submit gray" : "submit"}
            onClick={() => handleActionChange("Pronadji rezervaciju")}
          >
            Pronadji rezervaciju
          </div>
          <div
            className={
              action === "Pronadji rezervaciju" ? "submit gray" : "submit"
            }
            onClick={() => handleActionChange("Rezerviši")}
          >
            Rezerviši
          </div>
        </div>

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

          {action == "Rezerviši" && (
            <>
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
                <button
                  type="button"
                  onClick={handlePromoCheck}
                  className="promo-button"
                >
                  Izračunaj
                </button>
              </div>

              {discountedPrice !== null && (
                <div className="discount-info">
                  Cena sa popustom: <strong>{discountedPrice} RSD</strong>
                </div>
              )}
            </>
          )}

          {action == "Pronadji rezervaciju" && (
            <>
              <div className="input">
                <i className="fa-solid fa-comment" />
                <input
                  type="text"
                  placeholder="Unesite token za rezervaciju"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" className="submit-button">
          {action === "Rezerviši" ? "Rezerviši" : "Pronadji rezervaciju"}
        </button>
      </form>
    </div>
  );
}

export default Kon;
