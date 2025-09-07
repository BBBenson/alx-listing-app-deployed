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
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}/reviews`
        )
        setReviews(response.data)
      } catch (err) {
        console.error("Error fetching reviews:", err)
        setError("Failed to load reviews.")
      } finally {
        setLoading(false)
      }
    }

    if (propertyId) fetchReviews()
  }, [propertyId])

  if (loading) {
    return <p>Loading reviews...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded-lg shadow-sm">
            <p className="text-gray-800">"{review.comment}"</p>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">- {review.author}</span>
              <span className="text-yellow-500">⭐ {review.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewSection