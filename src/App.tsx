import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Network from "./pages/Network";
import Brands from "./pages/Brands";
import TradeExecution from "./pages/TradeExecution";
import Logistics from "./pages/Logistics";
import Contact from "./pages/Contact";
import Flyers from "./pages/Flyers";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-white font-sans text-brand-dark selection:bg-brand-red selection:text-brand-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/network" element={<Network />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/trade" element={<TradeExecution />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/flyers" element={<Flyers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
