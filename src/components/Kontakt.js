import React, { useState, useEffect } from "react";
import "./Kontakt.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  const [datumVreme, setDatumVreme] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (action === "Rezerviši") {
      const currentDateTime = new Date();
      if (datumVreme <= currentDateTime) {
        setError("Datum i vreme moraju biti u budućnosti.");
        return;
      }

      const roundedDate = new Date(datumVreme);
      roundedDate.setMinutes(0, 0, 0);
      if (datumVreme.getMinutes() !== 0) {
        setError("Vreme mora biti zaokruženo na celo vreme (npr. 11:00).");
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/rezervacije/musterija?email=${email}`
        );
        let musterija = response.data;
        console.log("Customer data:", musterija);

        if (!musterija) {
          console.log("Customer not found, creating a new customer...");
          const newMusterija = {
            Email: email,
            ImePrezime: username,
          };

          const createResponse = await axios.post(
            `${process.env.REACT_APP_API_URL}/rezervacije/musterija`,
            newMusterija
          );

          musterija = createResponse.data;
          console.log("New customer created:", musterija);
        }

        const selectedService = usluge.find((item) => item.naziv === usluga);
        console.log("Selected service:", selectedService);
        if (!selectedService) {
          setError("Molimo odaberite uslugu.");
          return;
        }

        const newReservation = {
          IDmusterije: musterija.id,
          Broj: selectedService.broj,
          DatumVreme: datumVreme,
          Poruka: poruka,
        };

        if (promo != null) {
          console.log("Checking promo code:", promo);
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/rezervacije/promokod?Kod=${promo}`
          );
          const promoKod = response.data;
          console.log("Promo code data:", promoKod);
          newReservation.IskoriscenKodID = promoKod.id;
        }

        if (discountedPrice !== null) {
          newReservation.UkupnaCena = discountedPrice;
        } else {
          newReservation.UkupnaCena = selectedService.cena;
        }

        console.log("Sending reservation data:", newReservation);
        const reservationResponse = await axios.post(
          `${process.env.REACT_APP_API_URL}/rezervacije`,
          newReservation
        );

        console.log(
          "Reservation created successfully:",
          reservationResponse.data
        );

        setError("");
        setEmail("");
        setUsername("");
        setPoruka("");
        setPromo("");
        setToken("");
        setDiscountedPrice(null);

        navigate("/napravljenarez", {
          state: { reservation: reservationResponse.data.rezervacija },
        });
      } catch (error) {
        console.error("Greška prilikom rezervacije:", error);
        setError("Došlo je do greške prilikom pravljenja rezervacije.");
      }
    } else if (action === "Pronadji rezervaciju") {
     
      if (!token || !email || !username) {
        setError("Molimo unesite sve podatke.");
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/rezervacije/rezervacija?email=${email}&token=${token}`
        );

        if (response.status === 200) {
          const reservation = response.data.rezervacija;

          navigate("/napravljenarez", {
            state: { reservation},
          });
        } else {
          setError("Rezervacija nije pronađena za uneti email i token.");
        }
      } catch (error) {
        console.error("Greška prilikom pronalaženja rezervacije:", error);
        setError("Došlo je do greške prilikom traženja rezervacije.");
      }
    }
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

    const selectedService = usluge.find((item) => item.naziv === usluga);
    if (!selectedService) {
      setError("Molimo odaberite uslugu.");
      return;
    }

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/rezervacije/promokod?Kod=${promo}`
      );
      const promoKod = response.data;
      console.log(promoKod);

      if (!promoKod) {
        setError("Promo kod nije pronađen.");
        return;
      }

      if (promoKod.vazeci == false) {
        setError("Promo kod nije važeći.");
        return;
      }

      const originalPrice = parseFloat(selectedService.cena);
      if (isNaN(originalPrice)) {
        setError("Cena usluge nije važeća.");
        return;
      }

      console.log("Promo kod Popust:", promoKod.popust);
      const discount = parseInt(promoKod.popust, 10);
      if (isNaN(discount)) {
        setError("Popust nije važeći.");
        return;
      }

      console.log("Original price:", originalPrice);
      console.log("Discount:", discount);
      const newPrice = (originalPrice * (100 - discount)) / 100;
      console.log(newPrice);

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
                <i className="fa-solid fa-calendar"></i>
                <DatePicker
                  selected={datumVreme}
                  onChange={(date) => setDatumVreme(date)}
                  showTimeSelect
                  timeIntervals={60}
                  timeCaption="Vreme"
                  dateFormat="Pp"
                  minTime={new Date(new Date().setHours(9, 0, 0, 0))}
                  maxTime={new Date(new Date().setHours(20, 0, 0, 0))}
                  className="datetime-input"
                  placeholderText="Izaberite datum i vreme"
                />
              </div>

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
