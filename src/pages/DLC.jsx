import React from "react";
import "../App.css";

// Import the dynamic engine packs component
import EnginePacksPage from "./engine-packs";

export default function DLC() {
  return (
    <div className="page-wrapper">
      
      {/* HERO SECTION */}
      <section className="dlc-hero">
        <div className="dlc-hero-left">
          <img
            src="/obi_hologram_blue.png"
            alt="Obi"
            className="dlc-obi animate-float"
          />
        </div>

        <div className="dlc-hero-right">
          <h1 className="dlc-title">OBI DLC MARKETPLACE</h1>

          <div className="dlc-category-list">
            {[
              "ENGINE PACKS",
              "THEMES & UI PACKS",
              "PERSONALITY MODULES",
              "TUNER DLC",
              "WORKSHOP ADD-ONS",
              "BUILD BLUEPRINTS",
            ].map((label, idx) => (
              <div key={idx} className="dlc-category">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINE PACKS SECTION (FULLY DYNAMIC) */}
      <section className="dlc-section">
        <h2 className="dlc-section-title">Engine Packs</h2>

        {/* This handles: EJ205 FREE, EJ207 Buy Now, Coming Soon packs */}
        <EnginePacksPage />
      </section>

      {/* THEMES & UI PACKS */}
      <section className="dlc-section">
        <h2 className="dlc-section-title">Themes & UI Packs</h2>

        <div className="dlc-pack-grid">

          {/* Blueprint Theme Pack */}
          <div className="dlc-pack-card">
            <div className="dlc-pack-header">
              <h3 className="dlc-pack-title">Blueprint Theme Pack</h3>
              <span className="dlc-pack-tag">UI THEME</span>
            </div>

            <p className="dlc-pack-desc">
              Transform Obi into a clean OEM workshop-manual style interface
              with blueprint grids, technical panels, and ink-style visuals.
            </p>

            <ul className="dlc-pack-features">
              <li>Blueprint grid & paper textures</li>
              <li>Workshop-style panels & dividers</li>
              <li>Blueprint HUD & chat styling</li>
              <li>Instant toggle in Settings</li>
              <li>Cosmetic only — no data changes</li>
            </ul>

            <div className="dlc-pack-footer">
              <span className="dlc-pack-price">£2.49</span>

              <a
                href="https://your-stripe-link-here"
                className="dlc-pack-button"
              >
                Buy Theme
              </a>
            </div>
          </div>

          {/* Placeholder for future themes */}
          <div className="dlc-pack-card dlc-pack-disabled">
            <h3 className="dlc-pack-title">More Themes Coming</h3>
            <p className="dlc-pack-desc">
              Additional UI and visual theme packs will be added over time.
            </p>
          </div>

        </div>
      </section>

      {/* FUTURE DLC SECTIONS REMAIN IN PLACE */}
      <section className="dlc-section">
        <h2 className="dlc-section-title">Personality Modules</h2>
        <p className="dlc-coming-soon">Coming Soon</p>
      </section>

      <section className="dlc-section">
        <h2 className="dlc-section-title">Tuner DLC</h2>
        <p className="dlc-coming-soon">Coming Soon</p>
      </section>

      <section className="dlc-section">
        <h2 className="dlc-section-title">Workshop Add-ons</h2>
        <p className="dlc-coming-soon">Coming Soon</p>
      </section>

      <section className="dlc-section">
        <h2 className="dlc-section-title">Build Blueprints</h2>
        <p className="dlc-coming-soon">Coming Soon</p>
      </section>

      {/* FOOTER */}
      <footer className="dlc-footer">
        © 2025 MGW Performance Systems — Obi Vehicle Co-Pilot<br />
        Built with Obi • Engineered for Enthusiasts
      </footer>
    </div>
  );
}
