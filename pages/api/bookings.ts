// pages/api/bookings.ts
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const booking = req.body

    // Normally you would save to a DB here
    console.log("New booking received:", booking)

    return res.status(201).json({
      message: "Booking confirmed successfully!",
      booking,
    })
  }

  res.setHeader("Allow", ["POST"])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
