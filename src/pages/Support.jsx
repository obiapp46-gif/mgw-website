export default function Support() {
  return (
    <div>
      <section className="section">
        <h1 className="hero-title">Support</h1>
        <p className="hero-sub">
          Need help with Obi? We’ve got you. Contact support or browse answers below.
        </p>
      </section>

      <section className="section">
        <div className="feature-grid">

          {/* FAQ */}
          <a href="/faq" className="feature-card" style={{ textDecoration: "none" }}>
            <h3 className="feature-title">FAQ</h3>
            <p className="feature-desc">
              Common questions, troubleshooting tips and setup help.
            </p>
          </a>

          {/* EMAIL SUPPORT */}
          <a
            href="mailto:support@mgwperformance.co.uk?subject=Obi%20Support%20Request"
            className="feature-card"
            style={{ textDecoration: "none" }}
          >
            <h3 className="feature-title">Email Support</h3>
            <p className="feature-desc">support@mgwperformance.co.uk</p>
          </a>

          {/* BUG REPORTS */}
          <a
            href="mailto:support@mgwperformance.co.uk
?subject=[BUG]%20Obi
&body=Please include:%0A- Device model%0A- Obi app version%0A- Engine pack (if applicable)%0A- What happened%0A- Screenshots/logs"
            className="feature-card"
            style={{ textDecoration: "none" }}
          >
            <h3 className="feature-title">Bug Reports</h3>
            <p className="feature-desc">
              Found an issue? Email logs or screenshots for quick fixes.
            </p>
          </a>

        </div>
      </section>
    </div>
  );
}
