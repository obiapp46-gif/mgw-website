// middleware.js (Next.js + Vercel)
// Automatically stores ?device_id=XYZ into a cookie

import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const deviceId = url.searchParams.get("device_id");

  // If URL includes ?device_id=XXX → save cookie
  if (deviceId) {
    const res = NextResponse.next();

    res.cookies.set("device_id", deviceId, {
      path: "/",
      httpOnly: false,  // frontend + API can read it
      sameSite: "lax",
      secure: true      // required on Vercel HTTPS
    });

    console.log("🍪 device_id saved in cookie:", deviceId);
    return res;
  }

  return NextResponse.next();
}
