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

      {/* FUTURE DLC SECTIONS REMAIN IN PLACE */}
      <section className="dlc-section">
        <h2 className="dlc-section-title">Themes & UI Packs</h2>
        <p className="dlc-coming-soon">Coming Soon</p>
      </section>

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
