import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div style={{ fontWeight: "700", color: "var(--obi-blue)" }}>
        MGW Performance
      </div>

      <div>
        <Link to="/features">Features</Link>
        <li><Link to="/upgrade">Upgrade</Link></li>
        <Link to="/dlc">DLC Store</Link>
        <Link to="/download">Download</Link>
        <Link to="/support">Support</Link>
        <Link to="/castscan">CastScan</Link>
       
      </div>
    </nav>
  );
}
