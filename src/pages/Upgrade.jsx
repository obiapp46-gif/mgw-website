import "./Upgrade.css";

export default function Upgrade() {
  return (
    <div className="upgrade-container">
      <h1 className="upgrade-title">Unlock Obi Pro</h1>
      <p className="upgrade-subtitle">
        Remove limits. Unlock every engine, every feature, and the full power of Obi.
      </p>

      <div className="upgrade-card">
        <h2 className="price">£9.99 / month</h2>

        <ul className="feature-list">
          <li>✓ Unlimited Obi messages</li>
          <li>✓ All engine packs included</li>
          <li>✓ Advanced diagnostics intelligence</li>
          <li>✓ Parts, repair, & fault insights</li>
          <li>✓ Priority cloud processing</li>
          <li>✓ Early access to new features</li>
        </ul>

        <a
          className="upgrade-btn"
          href="https://buy.stripe.com/8x2eVc5eO63Ucn12xPfjG00"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upgrade to Pro
        </a>

        <p className="secure-text">Secure payment via Stripe. Cancel anytime.</p>
      </div>

      <div className="comparison-box">
        <h3>Free vs Pro</h3>
        <table>
          <tbody>
            <tr>
              <td>Daily message limit</td>
              <td>20</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Engine packs</td>
              <td>Basic access</td>
              <td>All packs unlocked</td>
            </tr>
            <tr>
              <td>Diagnostics</td>
              <td>Standard</td>
              <td>Advanced + Cloud Insights</td>
            </tr>
            <tr>
              <td>Parts & repair guidance</td>
              <td>Limited</td>
              <td>Full access</td>
            </tr>
            <tr>
              <td>Performance</td>
              <td>Normal</td>
              <td>Priority cloud processing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
