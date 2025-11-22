import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Download from "./pages/Download";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CastScan from "./pages/CastScan";
import PartsReference from "./pages/PartsReference";
import DLC from "./pages/DLC";


export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/download" element={<Download />} />
            <Route path="/support" element={<Support />} />
            <Route path="/dlc" element={<DLC />} />

            

            {/* Important legal pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* New pages */}
            <Route path="/castscan" element={<CastScan />} />
            <Route path="/parts-reference" element={<PartsReference />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
