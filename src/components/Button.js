import React from "react";
import { Link } from "react-router-dom";
import "./Button.css"; 

const Button = ({ children }) => {
    return (
      <Link to="/registracija" className="btn">
        {children}
      </Link>
    );
  };
export default Button;
