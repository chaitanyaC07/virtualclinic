import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner.jsx";
import Heading from "./components/Heading.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Heading text="CONSULTATION" />
      <Services />
    </div>
  );
}

export default App;
