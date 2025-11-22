import React from "react";
import "../App.css";

export default function DLC() {
  return (
    <div className="page-wrapper">
      
      {/* HERO SECTION */}
      <section className="dlc-hero">
        <div className="dlc-hero-left">
          <img
            src="/assets/obi_hologram_blue.png"
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

      {/* ENGINE PACKS */}
      <section className="dlc-section">
        <h2 className="dlc-section-title">Engine Packs</h2>

        <div className="dlc-card-grid">
          {[
            {
              title: "Subaru EJ205 / EJ207 Pack",
              desc: "OEM Torque Specs, Diagnostics, Turbo Data, Fault Trees, Diagrams",
              price: "£4.99",
            },
            {
              title: "Toyota 2JZ-GTE Pack",
              desc: "Boost Logic, Rebuild Notes, Timing, Sensors, Fault Patterns, Specs",
              price: "£4.99",
            },
            {
              title: "Nissan RB26DETT Pack",
              desc: "Diagnostics, Oil Notes, Timing Setup, Parts Reference, OEM-style Data",
              price: "£4.99",
            },
          ].map((pack, idx) => (
            <div key={idx} className="dlc-card">
              <h3 className="dlc-card-title">{pack.title}</h3>
              <p className="dlc-card-desc">{pack.desc}</p>
              <div className="dlc-card-price">{pack.price}</div>
              <button className="dlc-button">Buy & Download</button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="dlc-footer">
        © 2025 MGW Performance Systems — Obi Vehicle Co-Pilot<br/>
        Built with Obi • Engineered for Enthusiasts
      </footer>

    </div>
  );
}
