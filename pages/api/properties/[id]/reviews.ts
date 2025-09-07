import type { NextApiRequest, NextApiResponse } from "next"

const mockReviews: Record<string, { id: string; comment: string; author: string; rating: number }[]> = {
  "1": [
    { id: "r1", comment: "Amazing place, super cozy!", author: "John Doe", rating: 5 },
    { id: "r2", comment: "Loved the view and location!", author: "Sarah K.", rating: 4 },
  ],
  "2": [
    { id: "r3", comment: "Beautiful villa with excellent service.", author: "Michael B.", rating: 5 },
  ],
  "3": [
    { id: "r4", comment: "Great value for money!", author: "Anna P.", rating: 4 },
    { id: "r5", comment: "Quiet and peaceful stay.", author: "David L.", rating: 5 },
  ],
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === "GET") {
    const reviews = mockReviews[id as string] || []
    return res.status(200).json(reviews)
  }

  res.setHeader("Allow", ["GET"])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
