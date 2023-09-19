import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner.jsx";
import Heading from "./components/Heading.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Heading text="CONSULTATION" />
      <Services />
      {/* <Heading text="Connect us" /> */}
      <Footer />
    </div>
  );
}

export default App;
