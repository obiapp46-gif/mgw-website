export default function FAQ() {
  return (
    <div>
      <section className="section">
        <h1 className="hero-title">Frequently Asked Questions</h1>
        <p className="hero-sub">
          Quick answers to common questions about Obi, engine packs, and subscriptions.
        </p>
      </section>

      <section className="section">
        <div className="feature-grid">

          <div className="feature-card">
            <h3 className="feature-title">What is Obi?</h3>
            <p className="feature-desc">
              Obi is an intelligent vehicle co-pilot that helps diagnose issues,
              explain live engine data, guide maintenance, and unlock engine-specific
              knowledge packs.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Do I need Obi Pro?</h3>
            <p className="feature-desc">
              Obi Pro unlocks unlimited chat, advanced diagnostics, and premium features.
              Engine Packs add engine-specific intelligence (OEM specs, fault patterns,
              learning behaviour), but those premium features require Obi Pro to access
              in-app. If you’ve bought an Engine Pack and it still appears locked,
              upgrade to Obi Pro or contact support.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">What are Engine Packs?</h3>
            <p className="feature-desc">
              Engine Packs are one-time purchases that unlock deep, engine-specific
              intelligence such as OEM specifications, fault patterns, learning
              behaviour, and maintenance insights.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">How do Engine Packs activate?</h3>
            <p className="feature-desc">
              After purchase, the engine pack is automatically linked to your device.
              Restart the app to ensure it unlocks correctly. If it remains locked,
              contact support.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Which vehicles are supported?</h3>
            <p className="feature-desc">
              Obi supports standard OBD-II vehicles. Engine-specific features depend
              on the engine pack you own, and supported engines continue to expand.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">How do I contact support?</h3>
            <p className="feature-desc">
              You can email us anytime at support@mgwperformance.co.uk and we’ll
              get back to you as soon as possible.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
