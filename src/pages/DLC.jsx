import React from "react";

export default function DLC() {
  return (
    <div className="min-h-screen bg-[#0b0d11] text-blue-100 relative overflow-hidden">
      
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_#1b1e26,_#0b0d11_70%)] opacity-80"></div>

      {/* Main container */}
      <div className="relative z-10 px-6 md:px-16 py-20">
        
        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

          {/* HOLOGRAM OBI */}
          <div className="flex-shrink-0">
            <div className="animate-float drop-shadow-[0_0_25px_#27a8ff]">
              <img
                src="/assets/obi_hologram_blue.png"
                alt="Obi Hologram"
                width="340"
                height="340"
                className="opacity-95"
              />
            </div>
          </div>

          {/* MAIN MENU STYLE TILES */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-8 text-blue-200">
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
                <a
                  key={idx}
                  href={`#${label.toLowerCase().replace(/ & | /g, "-")}`}
                  className="group"
                >
                  <div className="bg-[rgba(20,30,40,0.45)] border border-[rgba(0,180,255,0.3)]
                                  rounded-xl p-6 text-center transition-all duration-200 
                                  hover:bg-[rgba(30,45,60,0.7)] hover:shadow-[0_0_20px_#27a8ff]
                                  cursor-pointer backdrop-blur-md">
                    <div className="text-lg font-semibold text-blue-100 tracking-wide">
                      {label}
                    </div>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </div>

        {/* SECTION: ENGINE PACKS */}
        <section id="engine-packs" className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-blue-200">
            Engine Packs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Subaru EJ205 / EJ207 Pack",
                desc: "OEM Torque Specs, Diagnostics, Turbo Data, Maintenance, Fault Trees, Diagrams",
                price: "£4.99",
              },
              {
                title: "Toyota 2JZ-GTE Pack",
                desc: "Boost Logic, Rebuild Notes, Timing, Sensors, Fault Patterns, Full Specs",
                price: "£4.99",
              },
              {
                title: "Nissan RB26DETT Pack",
                desc: "Diagnostics, Oil System Notes, Timing Setup, Parts Reference, OEM-style Data",
                price: "£4.99",
              },
            ].map((pack, idx) => (
              <div
                key={idx}
                className="bg-[rgba(20,25,30,]()
