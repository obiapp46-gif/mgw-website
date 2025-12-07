import "./Upgrade.css";

export default function Upgrade() {
  return (
    <div className="upgrade-container">
      <h1>Upgrade to Obi Pro</h1>
      <p>Your daily fuel is empty — unlock unlimited messages and full power.</p>

      <div className="upgrade-card">
        <h2>£9.99 / month</h2>

        <ul>
          <li>Unlimited Obi messages</li>
          <li>Unlock all engine packs</li>
          <li>Advanced diagnostics mode</li>
          <li>Parts & repair insights</li>
          <li>Priority cloud processing</li>
        </ul>

        <a
          className="upgrade-btn"
          href="https://buy.stripe.com/8x2eVc5eO63Ucn12xPfjG00"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upgrade Now
        </a>

        <p className="small-info">Cancel anytime. Secure payment via Stripe.</p>
      </div>
    </div>
  );
}
