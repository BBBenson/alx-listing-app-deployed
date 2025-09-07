// pages/property/[id].tsx
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

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return
      try {
        const response = await axios.get(`/api/properties/${id}`)
        setProperty(response.data)
      } catch (error) {
        console.error("Error fetching property details:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [id])

  if (loading) {
    return <p className="text-center py-10">Loading...</p>
  }

  if (!property) {
    return <p className="text-center py-10">Property not found</p>
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-96 object-cover rounded-xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-lg font-semibold mt-2">${property.price} / night</p>
      <p className="text-yellow-500 mt-1">⭐ {property.rating}</p>
      <p className="mt-4 text-gray-700">{property.description}</p>
    </div>
  )
}

export default PropertyDetailPage
