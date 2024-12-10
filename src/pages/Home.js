import React from "react";
import "../App.css";
import Info from "../components/Info";
import Kontakt from "../components/Kontakt_komp";
import Vrednosti from "../components/Vrednosti";
import Prica from "../components/Prica";

function Home() {
  return (
    <>
     <Info />
     <Prica />
     <Vrednosti />
     <Kontakt/>
    </>
  );
}

export default Home;

