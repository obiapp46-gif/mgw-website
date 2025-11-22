import React from "react";
import "../App.css"; // ensure animations/styles load

export default function DLC() {
  return (
    <div className="min-h-screen bg-gray-900 text-blue-100 relative overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-80 pointer-events-none"></div>

      <div className="relative z-10 px-6 md:px-16 py-20">
        
        {/* HERO */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* OBI */}
          <div className="flex-shrink-0">
            <div className="animate-float drop-shadow-xl">
              <img
                src="/assets/obi_hologram_blue.png"
                alt="Obi"
                className="w-[300px] md:w-[340px] opacity-95"
              />
            </div>
          </div>

          {/* Tiles */}
          <div className="flex-1">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-blue-200 tracking-wide">
              OBI DLC MARKETPLACE
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                "ENGINE PACKS",
                "THEMES & UI PACKS",
                "PERSONALITY MODULES",
                "TUNER DLC",
                "WORKSHOP ADD-ONS",
                "BUILD BLUEPRINTS",
              ].map((label, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/40 border border-blue-500/20 rounded-xl p-6 
                             hover:bg-gray-700/40 hover:shadow-blue-500/30 hover:shadow-lg 
                             backdrop-blur-md cursor-pointer transition-all"
                >
                  <p className="text-lg text-blue-100 font-semibold text-center tracking-wide">
                    {label}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ENGINE PACKS SECTION */}
        <section id="engine-packs" className="mt-24">
          
          <h2 className="text-3xl font-bold text-blue-200 mb-8">Engine Packs</h2>

          <div className="grid md:grid-cols-3 gap-8">

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
              <div
                key={idx}
                className="bg-gray-800/50 border border-blue-600/20 rounded-xl p-6 
                           hover:shadow-lg hover:shadow-blue-500/30 transition-all backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-blue-100 mb-2">
                  {pack.title}
                </h3>

                <p className="text-blue-200/70 text-sm leading-relaxed">
                  {pack.desc}
                </p>

                <div className="text-blue-400 text-xl font-bold my-4">{pack.price}</div>

                <button className="bg-blue-400 hover:bg-blue-500 text-gray-900 font-semibold px-4 py-2 rounded-lg">
                  Buy & Download
                </button>
              </div>
            ))}

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 text-center text-blue-300/60 border-t border-blue-500/20 py-10">
          © 2025 MGW Performance Systems — Obi Vehicle Co-Pilot
        </footer>

      </div>
    </div>
  );
}
