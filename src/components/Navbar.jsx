import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div style={{ fontWeight: "700", color: "var(--obi-blue)" }}>
        MGW Performance
      </div>

      <div>
        <Link to="/features">Features</Link>
        <Link to="/download">Download</Link>
        <Link to="/support">Support</Link>
        <Link to="/castscan">CastScan</Link>
        <Link to="/parts">Parts Reference</Link>
      </div>
    </nav>
  );
}
