export default function Download() {
  const isTester = false; // flip to true later when you open public APK access

  return (
    <div>

      {/* HERO / DOWNLOAD */}
      <section className="section">
        <h1 className="hero-title">Download Obi V1</h1>

        <p className="hero-sub">
          Obi V1 is currently available as an internal testing build for Android.
          This phase is focused on controlled access, real-world feedback, and
          Play Store verification.
        </p>

        <p className="hero-sub" style={{ marginTop: "12px" }}>
          iOS and desktop versions are planned for future releases.
        </p>

        <div className="hero-buttons" style={{ marginTop: "24px" }}>

          {/* DOWNLOAD APK — DISABLED */}
          <button
            disabled
            style={{
              opacity: 0.4,
              cursor: "not-allowed"
            }}
            title="APK downloads are available to approved internal testers only"
          >
            Download APK
          </button>

          {/* INTERNAL TESTING */}
          <a
            href={
              "mailto:support@mgwperformance.co.uk" +
              "?subject=Obi%20Internal%20Testing%20Request" +
              "&body=Hello%20MGW%20Performance%20Systems,%0D%0A%0D%0A" +
              "I%20would%20like%20to%20join%20the%20Obi%20V1%20internal%20testing%20programme.%0D%0A%0D%0A" +
              "Name:%20%0D%0A" +
              "Email%20Address:%20%0D%0A" +
              "Android%20Device%20Model:%20%0D%0A" +
              "Vehicle%20(Optional):%20%0D%0A%0D%0A" +
              "Thanks,%0D%0A"
            }
          >
            <button>
              Join internal testing
            </button>
          </a>

        </div>

        <p
          className="hero-sub"
          style={{ marginTop: "18px", fontSize: "14px", opacity: 0.8 }}
        >
          APK downloads are restricted to approved testers to meet Google Play
          internal testing requirements.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2 className="hero-title" style={{ fontSize: "30px" }}>
          Internal Testing – How It Works
        </h2>

        <ul className="hero-sub" style={{ lineHeight: "1.8" }}>
          <li>Request access using the button above</li>
          <li>We add your email to the Play Store internal testing list</li>
          <li>You receive an invite link from Google Play</li>
          <li>Accept the invite and install Obi</li>
          <li>Use Obi normally and share feedback</li>
        </ul>
      </section>

      {/* REQUIREMENTS */}
      <section className="section">
        <h2 className="hero-title" style={{ fontSize: "30px" }}>
          Requirements
        </h2>

        <ul className="hero-sub" style={{ lineHeight: "1.8" }}>
          <li>Android 7.0 or newer</li>
          <li>Bluetooth OBD-II adapter (OBDLink MX+ recommended)</li>
          <li>Current V1 engine support: Subaru EJ205</li>
        </ul>

        <p
          className="hero-sub"
          style={{ marginTop: "14px", fontSize: "14px", opacity: 0.7 }}
        >
          Internal testing builds may change frequently as features and engine
          coverage expand.
        </p>
      </section>

    </div>
  );
}
