export default async function handler(req, res) {
  // Allow GET — used by eBay to check if the endpoint is alive
  if (req.method === "GET") {
    return res.status(200).json({ message: "OK" });
  }

  // Only POST allowed for validation + events
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const body = req.body || {};
    const token = body?.notification?.verificationToken;

    // eBay validation — MUST echo token EXACTLY
    if (token) {
      console.log("eBay verification token:", token);
      return res.status(200).send(token);
    }

    // Normal webhook events
    console.log("eBay event received:", body);
    return res.status(200).json({ status: "ok" });

  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
