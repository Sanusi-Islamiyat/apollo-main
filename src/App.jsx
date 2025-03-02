import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import GetStarted from "./pages/GetStarted";
import Contact from "./pages/Contact";
import DashBoard from "./pages/DashBoard";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashBoard />} />
        
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
