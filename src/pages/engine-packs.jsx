import { useEffect } from "react";
import Cookies from "js-cookie";

import EnginePackCard from "../components/EnginePackCard";
import { enginePacks } from "../components/enginePackData";

export default function EnginePacksPage() {

  // ===========================================================
  // SAVE device_id FROM URL → COOKIE (used by Stripe Checkout)
  // ===========================================================
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const deviceId = params.get("device_id");

    if (deviceId) {
      Cookies.set("device_id", deviceId, {
        expires: 7,
        sameSite: "lax"
      });

      console.log("🍪 device_id saved:", deviceId);
    }
  }, []);

  return (
    <div className="engine-pack-wrapper">

      {/* Page Header */}
      <h1 className="engine-pack-title">Obi Engine Packs</h1>

      <p className="engine-pack-sub">
        Unlock advanced diagnostics, OEM data, and engine-specific intelligence.
      </p>

      {/* HOLOGRAM GRID */}
      <div className="engine-pack-grid">
        {enginePacks.map((pack) => (
          <EnginePackCard key={pack.code} pack={pack} />
        ))}
      </div>

    </div>
  );
}
