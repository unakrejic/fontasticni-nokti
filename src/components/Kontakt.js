import React, { useState, useEffect } from "react";
import "./Kontakt.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Kon() {
  const { id } = useParams();
  const [usluge, setUsluge] = useState([]);
  const [action, setAction] = useState("Rezerviši");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [poruka, setPoruka] = useState("");
  const [promo, setPromo] = useState("");
  const [usluga, setUsluga] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  };

  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/rezervacije/usluge`
        );
        console.log("API Response:", response.data);
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

  const handlePromoCheck = async () => {
    setError("");
    setDiscountedPrice(null);

    if (!promo) {
        setError("Molimo unesite promo kod.");
        return;
    }

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/promokod?kod=${promo}`);
        const promoKod = response.data;

        if (!promoKod) {
            setError("Promo kod nije pronađen.");
            return;
        }

        if (!promoKod.Vazeci) {
            setError("Promo kod nije važeći.");
            return;
        }

        const selectedService = usluge.find(usluga => usluga.naziv === usluga);
        if (!selectedService) {
            setError("Molimo odaberite uslugu.");
            return;
        }

        const originalPrice = selectedService.cena; 
        const discountAmount = (originalPrice * promoKod.Popust) / 100;
        const newPrice = originalPrice - discountAmount;

        setDiscountedPrice(newPrice);

    } catch (error) {
        console.error("Greška prilikom provere promo koda:", error);
        setError("Došlo je do greške prilikom provere promo koda.");
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
                {usluge.map((usluga) => (
                  <option key={usluga.id} value={usluga.naziv}>
                    {usluga.naziv}
                  </option>
                ))}
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
