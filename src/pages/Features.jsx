export default function Features() {
  return (
    <div>

      <section className="section">
        <h1 className="hero-title">Obi V1 Features</h1>
        <p className="hero-sub" style={{ maxWidth: "700px" }}>
          A focused V1 release built around real-world Subaru EJ engines,
          delivering powerful diagnostic tools, cinematic HUD data, 
          workshop utilities and intelligent parts lookup — all inside one app.
        </p>
      </section>

      <section className="section">
        <div className="feature-grid">

          <div className="feature-card">
            <h3 className="feature-title">Live HUD</h3>
            <p className="feature-desc">
              Real-time ECU data with clean, cinematic gauge animations 
              and theme-adaptive visuals.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Diagnostics AI</h3>
            <p className="feature-desc">
              Fault codes, readiness, freeze-frame and real-time explanations
              based on your engine parameters.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Workshop Mode</h3>
            <p className="feature-desc">
              OEM torque specs, fluids, diagrams, rebuild guidance and 
              maintenance tasks for EJ205.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Parts Reference</h3>
            <p className="feature-desc">
              Search by OEM number, category or component to get fully indexed 
              EJ205 part data.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Parts Basket</h3>
            <p className="feature-desc">
              Build smart shopping lists with future integrations for eBay, 
              ECP and OEM suppliers.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">CastScan</h3>
            <p className="feature-desc">
              Identify casting marks and block/head codes instantly 
              for correct EJ platform identification.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
