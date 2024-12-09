import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nokti from "./pages/Nokti";
import Masaze from "./pages/Masaze";
import MadeRez from "./pages/MadeRez";
import Kon from "../src/components/Kontakt";
import Rez from "../src/components/Rez";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registracija" element={<Register />} />
        <Route path="/rezervacija/:id" element={<Kon />} />
        <Route path="/nokti" element={<Nokti />} />
        <Route path="/masaze" element={<Masaze />} />
        <Route path="/rez" element={<MadeRez />} />
        <Route path="/napravljenarez" element={<Rez />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
