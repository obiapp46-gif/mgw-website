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

          <div className="feature-card">
            <h3 className="feature-title">FAQ</h3>
            <p className="feature-desc">Common questions, troubleshooting tips and setup help.</p>
          </div>

          <a
  href="mailto:support@mgwperformance.co.uk?subject=Obi Support Request"
  className="feature-card"
  style={{ textDecoration: "none" }}
>
  <h3 className="feature-title">Email Support</h3>
  <p className="feature-desc">support@mgwperformance.co.uk</p>
</a>


          <div className="feature-card">
            <h3 className="feature-title">Bug Reports</h3>
            <p className="feature-desc">Found an issue? Submit logs or screenshots for quick fixes.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
