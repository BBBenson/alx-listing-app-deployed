"use client"

import BookingForm from "@/components/booking/BookingForm"
import OrderSummary from "@/components/booking/OrderSummary"
import CancellationPolicy from "@/components/booking/CancellationPolicy"
import { useState } from "react"

export default function BookingPage() {
  // For now, booking details are static, but you can replace this with props or API data
  const [bookingDetails] = useState({
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  })

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Form & Policies */}
        <div className="space-y-6">
          <BookingForm bookingDetails={bookingDetails} />
          <CancellationPolicy />
        </div>

        {/* Right: Summary */}
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  )
}
