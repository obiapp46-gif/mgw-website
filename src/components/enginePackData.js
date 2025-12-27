export const enginePacks = [
  // ========================================================
  // BASE ENGINE (FREE)
  // ========================================================
  {
    code: "ej205",
    title: "Subaru EJ205",
    badge: "Included Pack",
    price: "FREE",
    description:
      "UK-spec 2002 WRX engine with full OEM torque specs, sensors, faults, and maintenance.",
    image: "/images/engines/ej205.png",
    stripeUrl: null,
    available: true,        // Always available
    free: true              // User always owns this pack
  },

  // ========================================================
  // WAVE 1 — AVAILABLE TODAY
  // ========================================================
  {
    code: "ej207",
    title: "Subaru EJ207",
    badge: "JDM STI",
    price: "£5.99",
    description:
      "Legendary JDM STI engine. Includes AVCS logic, VF turbos, learning maps, faults, and full pack.",
    image: "/images/engines/ej207.png",
    stripeUrl: "https://buy.stripe.com/00w8wO9v4gIy3Qvc8pfjG01",
    available: true         // BUY NOW
  },
  {
    code: "fa20dit_wrx",
    title: "Subaru FA20DIT WRX",
    badge: "USDM / Global",
    price: "£5.99",
    description:
      "Modern FA20 with direct injection, HPFP behaviour, boost control, faults, and full diagnostic pack.",
    image: "/images/engines/fa20.png",
    stripeUrl: "/api/checkout/fa20dit_wrx",
    available: false        // Coming soon until Stripe price ID exists
  },

  // ========================================================
  // WAVE 2
  // ========================================================
  {
    code: "toyota_2jzgte",
    title: "Toyota 2JZ-GTE",
    badge: "Performance Hero",
    price: "£6.99",
    description:
      "Twin-turbo icon. Sequential turbo logic, OEM specs, rebuild insights, and fault maps.",
    image: "/images/engines/2jz.png",
    stripeUrl: "/api/checkout/toyota_2jzgte",
    available: false
  },
  {
    code: "nissan_rb26dett",
    title: "Nissan RB26DETT",
    badge: "Performance Hero",
    price: "£6.99",
    description:
      "GT-R twin-turbo engine with oiling system quirks, boost logic, common faults, and diagnostics.",
    image: "/images/engines/rb26.png",
    stripeUrl: "/api/checkout/nissan_rb26dett",
    available: false
  },

  // ========================================================
  // WAVE 3
  // ========================================================
  {
    code: "honda_b16a2",
    title: "Honda B16A2",
    badge: "VTEC Legend",
    price: "£4.99",
    description:
      "VTEC engagement behaviour, timing data, maintenance, and diagnostic patterns.",
    image: "/images/engines/b16.png",
    stripeUrl: "/api/checkout/honda_b16a2",
    available: false
  },
  {
    code: "honda_b18c",
    title: "Honda B18C",
    badge: "VTEC Legend",
    price: "£4.99",
    description:
      "High-performance B18 with tuned VTEC behaviour, maintenance, rebuild logic, and faults.",
    image: "/images/engines/b18.png",
    stripeUrl: "/api/checkout/honda_b18c",
    available: false
  }
];
