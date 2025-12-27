// /api/checkout/[engine].js
// Stripe Checkout — Vercel Serverless Function (Vite + React)

import Stripe from "stripe";
import cookie from "cookie";

export default async function handler(req, res) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // -------------------------------
// Extract engine from query param
// -------------------------------
const url = new URL(req.url, `https://${req.headers.host}`);
const engine = url.searchParams.get("engine");
if (!engine) {
  console.error("❌ No engine provided to checkout");
  return res.status(400).json({ error: "Missing engine parameter" });
}


    // -------------------------------
    // Read device_id cookie
    // -------------------------------
    const cookies = cookie.parse(req.headers.cookie || "");
    const deviceId = cookies.device_id || "unknown_device";

    console.log("🔧 Checkout → Engine:", engine, "Device:", deviceId);

    // -------------------------------
// Price map — replace when you have real price IDs
// -------------------------------
const priceMap = {
  ej207: "price_1ScVjyCGXU4xfTuKr41aXO7O",
  fa20dit_wrx: "price_xxxxxx",
  toyota_2jzgte: "price_xxxxxx",
  nissan_rb26dett: "price_xxxxxx",
  honda_b16a2: "price_xxxxxx",
  honda_b18c: "price_xxxxxx"
};

// -------------------------------
// Reject packs without valid price IDs
// -------------------------------
if (
  !priceMap[engine] || 
  priceMap[engine].startsWith("price_x")
) {
  console.error("❌ Engine pack not available:", engine);
  return res.status(400).json({ error: "Engine pack not available yet." });
}


    // -------------------------------
    // Create checkout session
    // -------------------------------
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      success_url: `${req.headers.origin}/engine-packs?success=1&engine=${engine}`,
      cancel_url: `${req.headers.origin}/engine-packs?cancel=1`,

      line_items: [
        {
          price: priceMap[engine],
          quantity: 1
        }
      ],

      metadata: {
        device_id: deviceId,
        engine_code: engine,
        purchase_type: "engine_pack"
      }
    });

    // -------------------------------
    // Redirect to Stripe Checkout
    // -------------------------------
    return res.writeHead(303, { Location: session.url }).end();

  } catch (err) {
    console.error("❌ Stripe Checkout Error:", err);
    return res.status(500).json({ error: "Checkout failed" });
  }
}
