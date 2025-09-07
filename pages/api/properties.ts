// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const properties = [
      {
        id: "1",
        title: "Modern Apartment in Accra",
        location: "Accra, Ghana",
        price: 120,
        imageUrl: "/images/property1.jpg",
        rating: 4.8,
      },
      {
        id: "2",
        title: "Beachfront Villa",
        location: "Cape Coast, Ghana",
        price: 250,
        imageUrl: "/images/property2.jpg",
        rating: 4.9,
      },
      {
        id: "3",
        title: "Cozy Cabin in the Mountains",
        location: "Aburi, Ghana",
        price: 90,
        imageUrl: "/images/property3.jpg",
        rating: 4.6,
      },
    ]

    res.status(200).json(properties)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
