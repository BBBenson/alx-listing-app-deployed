import type React from "react"

// Enhanced Card component props interface
export interface CardProps {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  currency?: string
  imageUrl: string
  imageAlt: string
  rating?: number
  reviewCount?: number
  location: string
  host?: {
    name: string
    avatar: string
    isSuperhost?: boolean
  }
  amenities?: string[]
  propertyType?: string
  isWishlisted?: boolean
  onClick?: () => void
  onWishlistToggle?: (id: string) => void
  className?: string
  featured?: boolean
  discount?: number
}

// Enhanced Button component props interface
export interface ButtonProps {
  children: React.ReactNode
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg" | "xl"
  disabled?: boolean
  loading?: boolean
  type?: "button" | "submit" | "reset"
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

// Enhanced Property listing interface
export interface PropertyListing {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  currency: string
  location: {
    city: string
    country: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  images: {
    url: string
    alt: string
  }[]
  rating: number
  reviewCount: number
  amenities: string[]
  propertyType: "apartment" | "house" | "villa" | "cabin" | "hotel"
  host: {
    id: string
    name: string
    avatar: string
    isSuperhost: boolean
    joinedDate: string
  }
  availability: {
    checkIn: string
    checkOut: string
    minNights: number
  }
  policies: {
    cancellation: string
    houseRules: string[]
  }
  createdAt: string
  updatedAt: string
}

// Search and Filter interfaces
export interface SearchFilters {
  location?: string
  checkIn?: string
  checkOut?: string
  guests?: number
  priceRange?: {
    min: number
    max: number
  }
  propertyType?: string[]
  amenities?: string[]
  rating?: number
}

// User interface
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  wishlist: string[]
  bookings: string[]
}

// Booking interface
export interface Booking {
  id: string
  propertyId: string
  userId: string
  checkIn: string
  checkOut: string
  guests: number
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled"
  createdAt: string
}
