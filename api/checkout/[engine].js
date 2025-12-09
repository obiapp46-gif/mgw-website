// /api/checkout/[engine].js
// Stripe Checkout — Vercel Serverless Function (Vite + React)

import Stripe from "stripe";
import cookie from "cookie";

export default async function handler(req, res) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // -------------------------------
    // Extract engine from URL manually
    // -------------------------------
    const url = new URL(req.url, `https://${req.headers.host}`);
    const engine = url.pathname.split("/").pop();  // gets [engine]

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
      ej207: "price_xxxxxx",
      fa20dit_wrx: "price_xxxxxx",
      toyota_2jzgte: "price_xxxxxx",
      nissan_rb26dett: "price_xxxxxx",
      honda_b16a2: "price_xxxxxx",
      honda_b18c: "price_xxxxxx"
    };

    if (!priceMap[engine]) {
      console.error("❌ Invalid engine:", engine);
      return res.status(400).json({ error: "Invalid engine code" });
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
