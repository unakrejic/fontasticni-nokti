import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nokti from "./pages/Nokti";
import Masaze from "./pages/Masaze";
import MadeRez from "./pages/MadeRez";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registracija" element={<Register />} />
        <Route path="/nokti" element={<Nokti />} />
        <Route path="/masaze" element={<Masaze />} />
        <Route path="/rez" element={<MadeRez />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
