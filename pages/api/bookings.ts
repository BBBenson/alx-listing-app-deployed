import type { NextApiRequest, NextApiResponse } from "next"

interface Booking {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  cardNumber: string
  expirationDate: string
  cvv: string
  billingAddress: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const booking: Booking = req.body

    // ✅ Basic validation
    if (!booking.firstName || !booking.lastName || !booking.email || !booking.phoneNumber) {
      return res.status(400).json({
        message: "Missing required booking fields.",
      })
    }

    // Normally you would save to a database here
    console.log("📦 New booking received:", booking)

    return res.status(201).json({
      message: "Booking confirmed successfully!",
      booking,
    })
  }

  res.setHeader("Allow", ["POST"])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
