// /pages/api/checkout/[engine].js
// Creates a Stripe checkout session for engine pack DLC

import Stripe from "stripe";
import cookie from "cookie";

export default async function handler(req, res) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { engine } = req.query;

    // Parse cookies from request header
    const cookies = cookie.parse(req.headers.cookie || "");
    const deviceId = cookies.device_id || "unknown_device";

    console.log("🔧 Checkout for:", engine, "Device:", deviceId);

    // Map engine codes to Stripe Price IDs (placeholder)
    const priceMap = {
      ej207: "price_xxxxxx",
      fa20dit_wrx: "price_xxxxxx",
      toyota_2jzgte: "price_xxxxxx",
      nissan_rb26dett: "price_xxxxxx",
      honda_b16a2: "price_xxxxxx",
      honda_b18c: "price_xxxxxx"
    };

    if (!priceMap[engine]) {
      return res.status(400).json({ error: "Invalid engine code" });
    }

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

    return res.redirect(303, session.url);
  } catch (err) {
    console.error("❌ Stripe Checkout Error:", err);
    return res.status(500).json({ error: "Checkout failed" });
  }
}
