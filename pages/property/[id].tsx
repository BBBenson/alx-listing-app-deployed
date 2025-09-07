"use client"

import { useRouter } from "next/router"
import axios from "axios"
import { useState, useEffect } from "react"

interface Property {
  id: string
  title: string
  location: string
  price: number
  imageUrl: string
  rating: number
  description: string
}

const PropertyDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchProperty = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`
        )
        setProperty(response.data)
      } catch (err) {
        console.error("Error fetching property details:", err)
        setError("Failed to load property details.")
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [id])

  if (loading) {
    return <p className="text-center py-10">Loading...</p>
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>
  }

  if (!property) {
    return <p className="text-center py-10">Property not found</p>
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Property Image */}
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-96 object-cover rounded-xl shadow-md"
      />

      {/* Property Info */}
      <div className="mt-8 space-y-4">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-600">{property.location}</p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">
            ${property.price} <span className="text-gray-600">/ night</span>
          </p>
          <p className="text-yellow-500 font-medium">⭐ {property.rating}</p>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">
          {property.description}
        </p>
      </div>
    </div>
  )
}

export default PropertyDetailPage
