import { useState } from "react";
import EnginePackModal from "./EnginePackModal";

export default function EnginePackCard({ pack }) {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Unique engine family theme classes
  const familyClass = `family-${pack.code.split("_")[0]}`;

  return (
    <>
      <div
        className={`engine-pack-card holo-card ${familyClass}`}
        onClick={() => setOpen(!open)}
      >
        {/* Corner Accents */}
        <span className="corner tl"></span>
        <span className="corner tr"></span>
        <span className="corner bl"></span>
        <span className="corner br"></span>

        {/* IMAGE */}
        <div className="engine-pack-image">
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
          <div className="engine-pack-expanded">
            <h3>What’s Included</h3>
            <ul>
              <li>OEM specifications & torque data</li>
              <li>Fault detection patterns</li>
              <li>ECU behaviour & learning logic</li>
              <li>Turbo behaviour (if applicable)</li>
              <li>Maintenance intervals</li>
            </ul>

            <div className="engine-pack-actions">
              {/* BUY / INCLUDED / COMING SOON */}
              {pack.free ? (
                <span className="included-tag">Included in Obi Free Tier</span>
              ) : pack.available ? (
                <a href={pack.stripeUrl} className="buy-btn">
                  Buy Now
                </a>
              ) : (
                <span className="coming-soon">Coming Soon</span>
              )}

              {/* VIEW DETAILS */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(true);
                }}
                className="details-btn"
              >
                View Full Details
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <EnginePackModal pack={pack} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
