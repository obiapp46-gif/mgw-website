export default function EnginePackModal({ pack, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal-panel holo-card family-${pack.code.split("_")[0]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner Accents */}
        <span className="corner tl"></span>
        <span className="corner tr"></span>
        <span className="corner bl"></span>
        <span className="corner br"></span>

        <h1 className="modal-title">{pack.title}</h1>
        <img src={pack.image} className="modal-image" />

        <p className="modal-desc">{pack.description}</p>

        <h3>Included With This Pack</h3>
        <ul className="modal-list">
          <li>OEM torque specs</li>
          <li>Full sensor catalogue</li>
          <li>Faults & advanced diagnostics</li>
          <li>Learning logic behaviour</li>
          <li>Turbo characteristics (where applicable)</li>
          <li>Maintenance schedules & intervals</li>
        </ul>

        <div className="modal-actions">
          {pack.free ? (
            <span className="included-tag">Included With Obi</span>
          ) : pack.available ? (
            <a href={pack.stripeUrl} className="buy-btn modal-buy">
              Purchase Pack – {pack.price}
            </a>
          ) : (
            <span className="coming-soon">Coming Soon</span>
          )}

          <button className="close-modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
