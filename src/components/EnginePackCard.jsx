import { useState } from "react";
import EnginePackModal from "./EnginePackModal";

export default function EnginePackCard({ pack }) {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const familyClass = `family-${pack.code.split("_")[0]}`;

  return (
    <>
      <div
        className={`engine-pack-card holo-card clean-holo ${familyClass}`}
        onClick={() => setOpen(!open)}
      >
        {/* IMAGE */}
        <div className="engine-pack-image clean-image-wrap">
          <img src={pack.image} alt={pack.title} />
        </div>

        {/* HEADER */}
        <div className="engine-pack-header">
          <h2>{pack.title}</h2>
          <span className="badge">{pack.badge}</span>
        </div>

        <div className="price-row">
          <span className="price">{pack.price}</span>
        </div>

        {/* SHORT DESCRIPTION */}
        <p className="engine-pack-short">{pack.description}</p>

        {/* EXPANDED SECTION */}
        {open && (
          <div className="engine-pack-expanded fade-in">
            <h3>What’s Included</h3>
            <ul>
              <li>OEM Specifications & Torque Data</li>
              <li>Fault Detection Patterns</li>
              <li>ECU Behaviour & Learning Logic</li>
              <li>Turbo Behaviour (If Applicable)</li>
              <li>Maintenance Intervals & Insights</li>
            </ul>

            <div className="engine-pack-actions">
              {/* FREE PACK */}
              {pack.free && (
                <span className="included-tag">
                  Included in Obi Free Tier
                </span>
              )}

              {/* PAID PACK */}
              {!pack.free && pack.available && (
                <button
  className="buy-btn"
onClick={(e) => {
  e.stopPropagation();
  window.location.href = `/api/checkout?engine=${encodeURIComponent(pack.code)}`;
}}

>
  Buy Now
</button>

              )}

              {/* COMING SOON */}
              {!pack.available && !pack.free && (
                <span className="coming-soon">Coming Soon</span>
              )}

              {/* DETAILS MODAL */}
              <button
                className="details-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(true);
                }}
              >
                View Full Details
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <EnginePackModal
          pack={pack}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
