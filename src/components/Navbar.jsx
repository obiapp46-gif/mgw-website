import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav>
        <div className="nav-logo">
          <img src="/obiappicon2.png" alt="MGW Obi" />
        </div>

        <div className="nav-links">
          <Link to="/features" className={location.pathname === "/features" ? "active" : ""}>Features</Link>
          <Link to="/upgrade" className={location.pathname === "/upgrade" ? "active" : ""}>Upgrade</Link>
          <Link to="/dlc" className={location.pathname === "/dlc" ? "active" : ""}>DLC Store</Link>
          <Link to="/download" className={location.pathname === "/download" ? "active" : ""}>Download</Link>
          <Link to="/support" className={location.pathname === "/support" ? "active" : ""}>Support</Link>
          <Link to="/castscan" className={location.pathname === "/castscan" ? "active" : ""}>CastScan</Link>
        </div>

        <div className="burger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </nav>

      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        <Link to="/features" onClick={() => setOpen(false)}>Features</Link>
        <Link to="/upgrade" onClick={() => setOpen(false)}>Upgrade</Link>
        <Link to="/dlc" onClick={() => setOpen(false)}>DLC Store</Link>
        <Link to="/download" onClick={() => setOpen(false)}>Download</Link>
        <Link to="/support" onClick={() => setOpen(false)}>Support</Link>
        <Link to="/castscan" onClick={() => setOpen(false)}>CastScan</Link>
      </div>
    </>
  );
}
