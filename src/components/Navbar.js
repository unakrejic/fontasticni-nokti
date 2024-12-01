import React, { useState, useEffect } from "react";
import { Link , useLocation} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const { pathname } = useLocation(); 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
     // setButton(false);
    } else {
     // setButton(true);
    }
  };

  useEffect(() => {
    console.log("Scrolling to top");
    window.scrollTo(0, 0);
  }, [pathname]);


  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          FONtastični nokti <i className="fa-solid fa-spa" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/registracija" className="nav-links" onClick={closeMobileMenu}>
              Registracija
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign up
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;