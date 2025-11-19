export default function Parts() {
  return (
    <div>

      <section className="section">
        <h1 className="hero-title">Parts Reference</h1>
        <p className="hero-sub">
          Fully indexed EJ205 part categories with OEM numbers, names, diagrams and metadata.
        </p>
      </section>

      <section className="section">
        <div className="feature-grid">

          <div className="feature-card">
            <h3 className="feature-title">Sensors</h3>
            <p className="feature-desc">MAP, MAF, TPS, O2, knock sensors and more.</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Timing System</h3>
            <p className="feature-desc">Belts, pulleys, tensioners and timing components.</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Turbo System</h3>
            <p className="feature-desc">TD04 parts, gasket kits, oil lines, boost hardware.</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Vacuum / PCV</h3>
            <p className="feature-desc">All hoses, valves and layout identification.</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Fuel System</h3>
            <p className="feature-desc">Injectors, rails, pump parts and regulators.</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Gaskets & Seals</h3>
            <p className="feature-desc">OEM sealing components for full rebuilds.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
