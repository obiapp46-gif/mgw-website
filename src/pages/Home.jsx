import mock1 from "../assets/mockups/mock1.png";
import mock2 from "../assets/mockups/mock2.png";
import mock3 from "../assets/mockups/mock3.png";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="section">
        <h4 style={{ color: "var(--text-sub)", marginBottom: "10px" }}>
          OBI • VEHICLE CO-PILOT
        </h4>

        <h1 className="hero-title">
          Real-time intelligence <br /> for real builds.
        </h1>

        <p className="hero-sub">
          Live ECU data, diagnostics, workshop tools and parts intelligence —
          all in one modern app, built for enthusiasts and engine builders.
        </p>

        <div className="hero-buttons">
          <button>Download</button>
          <button>View features</button>
        </div>
      </section>

      {/* HERO MOCKUP */}
      <section className="section mock-wrapper">
        <img src={mock1} className="mock-img" alt="Obi app mockup" />
      </section>

      {/* FEATURES */}
      <section className="section">
        <h2 className="hero-title" style={{ fontSize: "32px" }}>
          What Obi can do
        </h2>

        <div className="feature-grid">

          <div className="feature-card">
            <img src={mock2} className="mock-img" alt="" />
            <h3 className="feature-title">Live HUD</h3>
            <p className="feature-desc">Instant ECU data with cinematic sweep animations.</p>
          </div>

          <div className="feature-card">
            <img src={mock3} className="mock-img" alt="" />
            <h3 className="feature-title">Diagnostics AI</h3>
            <p className="feature-desc">
              Live fault explanation, freeze-frame and readiness.
            </p>
          </div>

          <div className="feature-card">
            <img src={mock1} className="mock-img" alt="" />
            <h3 className="feature-title">Workshop Mode</h3>
            <p className="feature-desc">Torque specs, fluids, diagrams and more.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
