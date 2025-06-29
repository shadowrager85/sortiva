// app/api/mpesa/callback.ts

import { NextResponse } from "next/server";

// This is where you handle the callback from M-PESA
export async function POST(request: Request) {
  const responseBody = await request.json();

  console.log("M-PESA Callback Received:", responseBody);

  // Here you can handle the result: save to MongoDB, notify user, etc.

  // Responding with a success code (Required by M-PESA)
  return NextResponse.json({ ResultCode: 0, ResultDesc: "Accepted" });
}
