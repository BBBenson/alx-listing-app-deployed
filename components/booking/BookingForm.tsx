// components/booking/BookingForm.tsx
"use client"

import axios from "axios"
import { useState } from "react"

interface BookingDetails {
  propertyName: string
  price: number
  bookingFee: number
  totalNights: number
  startDate: string
}

interface BookingFormProps {
  bookingDetails: BookingDetails
}

export default function BookingForm({ bookingDetails }: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await axios.post("/api/bookings", {
        ...formData,
        bookingDetails, // include property info
      })
      alert("Booking confirmed!")
    } catch (err) {
      console.error(err)
      setError("Failed to submit booking.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">
        Book {bookingDetails.propertyName}
      </h2>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      {/* ... other form fields ... */}

      <button
        type="submit"
        disabled={loading}
        className="bg-brand-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
