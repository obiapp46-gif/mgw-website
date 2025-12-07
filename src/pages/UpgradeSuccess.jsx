import "./UpgradeSuccess.css";

export default function UpgradeSuccess() {
  return (
    <div className="success-container">
      <h1>🎉 Welcome to Obi Pro!</h1>
      <p>Thank you for upgrading — your engine diagnostics just levelled up.</p>

      <div className="success-card">
        <h2>Your subscription is active</h2>

        <ul>
          <li>Unlimited daily Obi messages</li>
          <li>Priority cloud processing</li>
          <li>Access to all core engine packs</li>
          <li>Advanced diagnostics enabled</li>
        </ul>

        <a
          className="back-btn"
          href="/"
        >
          Return to Home
        </a>

        <p className="fine-print">
          Your app will now recognise your Pro status automatically.
        </p>
      </div>
    </div>
  );
}
