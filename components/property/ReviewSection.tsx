"use client"

import axios from "axios"
import { useState, useEffect } from "react"

interface Review {
  id: string
  comment: string
  author: string
  rating: number
}

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`)
        setReviews(response.data)
      } catch (err) {
        console.error("Error fetching reviews:", err)
        setError("Failed to load reviews.")
      } finally {
        setLoading(false)
      }
    }

    if (propertyId) {
      fetchReviews()
    }
  }, [propertyId])

  if (loading) return <p>Loading reviews...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Guest Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border p-4 rounded-md shadow-sm bg-white">
              <p className="text-gray-700 italic">"{review.comment}"</p>
              <p className="text-sm text-gray-500 mt-2">
                — {review.author} ⭐ {review.rating}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ReviewSection
