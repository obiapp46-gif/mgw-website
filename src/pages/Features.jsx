export default function Features() {
  return (
    <div>

      <section className="section">
        <h1 className="hero-title">Obi V1 Features</h1>
        <p className="hero-sub" style={{ maxWidth: "700px" }}>
          A focused V1 release built around real-world Subaru EJ engines,
          combining live vehicle data, workshop-grade utilities, and a
          carefully constrained AI designed for accuracy — not guesswork.
        </p>

        <p className="hero-sub" style={{ maxWidth: "700px", marginTop: "12px" }}>
          Obi only works from OEM documentation, trusted workshop manuals,
          and verified engine-specific data. If something is unknown or
          unsupported, Obi will say so — clearly and honestly.
        </p>
      </section>

      <section className="section">
        <div className="feature-grid">

          <div className="feature-card">
            <h3 className="feature-title">Live HUD</h3>
            <p className="feature-desc">
              Real-time ECU data with clean, cinematic gauge animations
              and theme-adaptive visuals designed for driving and diagnostics.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Diagnostics AI</h3>
            <p className="feature-desc">
              Interprets fault codes, readiness states, freeze-frame data,
              and live parameters using engine-aware logic — not generic advice.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Workshop Mode</h3>
            <p className="feature-desc">
              OEM torque specs, fluids, diagrams, rebuild guidance and
              structured maintenance tasks for EJ205 engines.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Trusted Knowledge Base</h3>
            <p className="feature-desc">
              Obi is deliberately limited to verified OEM data and trusted
              workshop sources. No speculation, no hallucinations, no filler.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Parts Reference</h3>
            <p className="feature-desc">
              Search by OEM number, category or component to access fully
              indexed EJ205 part data with correct naming and context.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">CastScan</h3>
            <p className="feature-desc">
              Identify casting marks and block or head codes instantly
              for accurate EJ platform identification.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
