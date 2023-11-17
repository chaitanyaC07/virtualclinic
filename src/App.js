import "./App.css";
import "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import Banner from "./components/Banner.jsx";
// import Heading from "./components/Heading.jsx";
import Services from "./components/Services.jsx";
// import Footer from "./components/Footer.jsx";
// import ServiceCard from "./components/ServiceCard";
import Home from "./components/Home";
import ServiceCard from "./components/ServiceCard";
import Login from "./components/Login";
import Sigup from "./components/Sigup";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigup" element={<Sigup />} />
        <Route path="/serviceCard" element={<ServiceCard />} />
      </Routes>
    </Router>
  );
}

export default App;
