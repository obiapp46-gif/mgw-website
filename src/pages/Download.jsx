export default function Download() {
  return (
    <div>

      <section className="section">
        <h1 className="hero-title">Download Obi V1</h1>
        <p className="hero-sub">
          Obi V1 is available for Android. iOS and desktop versions arrive in future releases.
        </p>

        <div className="hero-buttons">
          <button>Download APK</button>
          <button>Join internal testing</button>
        </div>
      </section>

      <section className="section">
        <h2 className="hero-title" style={{ fontSize: "30px" }}>
          Requirements
        </h2>

        <ul className="hero-sub" style={{ lineHeight: "1.8" }}>
          <li>Android 7.0 or newer</li>
          <li>Bluetooth OBD-II adapter (OBDLink MX+ recommended)</li>
          <li>Subaru EJ205 engine support in V1</li>
        </ul>
      </section>

    </div>
  );
}
