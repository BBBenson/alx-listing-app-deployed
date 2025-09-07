// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api"

// UI Constants
export const CURRENCY_SYMBOL = "$"
export const DEFAULT_CURRENCY = "USD"

// Enhanced Button variants and sizes
export const BUTTON_VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
} as const

export const BUTTON_SIZES = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 py-2",
  lg: "h-11 px-8 text-lg",
  xl: "h-12 px-10 text-xl",
} as const

// Application Messages
export const MESSAGES = {
  LOADING: "Loading amazing places...",
  ERROR: "Oops! Something went wrong. Please try again.",
  NO_RESULTS: "No properties found matching your criteria.",
  BOOK_NOW: "Reserve",
  VIEW_DETAILS: "View Details",
  SEARCH_PLACEHOLDER: "Where are you going?",
  ADD_TO_WISHLIST: "Save to wishlist",
  REMOVE_FROM_WISHLIST: "Remove from wishlist",
} as const

// Property Types
export const PROPERTY_TYPES = {
  apartment: "Apartment",
  house: "House",
  villa: "Villa",
  cabin: "Cabin",
  hotel: "Hotel",
} as const

// Popular Amenities
export const AMENITIES = [
  "WiFi",
  "Kitchen",
  "Parking",
  "Pool",
  "Hot tub",
  "Pet friendly",
  "Gym",
  "Beach access",
  "Mountain view",
  "City view",
  "Balcony",
  "Garden",
] as const

// Sample Property Data
export const SAMPLE_PROPERTIES = [
  {
    id: "1",
    title: "Luxury Beachfront Villa with Ocean Views",
    description:
      "Wake up to stunning ocean views in this modern villa featuring floor-to-ceiling windows, private beach access, and world-class amenities.",
    price: 450,
    originalPrice: 520,
    currency: "USD",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "Luxury beachfront villa",
    rating: 4.9,
    reviewCount: 127,
    location: "Malibu, California",
    host: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: true,
    },
    amenities: ["WiFi", "Pool", "Beach access", "Kitchen", "Parking"],
    propertyType: "villa",
    featured: true,
    discount: 15,
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin Retreat",
    description:
      "Escape to this charming log cabin nestled in the mountains. Perfect for hiking enthusiasts and those seeking tranquility.",
    price: 180,
    currency: "USD",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "Mountain cabin retreat",
    rating: 4.7,
    reviewCount: 89,
    location: "Aspen, Colorado",
    host: {
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: false,
    },
    amenities: ["WiFi", "Hot tub", "Mountain view", "Kitchen", "Pet friendly"],
    propertyType: "cabin",
  },
  {
    id: "3",
    title: "Modern Downtown Loft",
    description:
      "Stylish loft in the heart of the city with exposed brick walls, high ceilings, and walking distance to top restaurants and attractions.",
    price: 220,
    currency: "USD",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "Modern downtown loft",
    rating: 4.8,
    reviewCount: 203,
    location: "New York, NY",
    host: {
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: true,
    },
    amenities: ["WiFi", "Gym", "City view", "Kitchen", "Balcony"],
    propertyType: "apartment",
  },
  {
    id: "4",
    title: "Charming Countryside House",
    description:
      "Experience rural tranquility in this beautifully restored farmhouse surrounded by rolling hills and vineyards.",
    price: 160,
    currency: "USD",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "Countryside house",
    rating: 4.6,
    reviewCount: 156,
    location: "Tuscany, Italy",
    host: {
      name: "Marco Rossi",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: true,
    },
    amenities: ["WiFi", "Garden", "Kitchen", "Parking", "Pet friendly"],
    propertyType: "house",
  },
] as const

// Image placeholders
export const PLACEHOLDER_IMAGES = {
  PROPERTY: "/placeholder.svg?height=300&width=400",
  AVATAR: "/placeholder.svg?height=40&width=40",
  HERO: "/placeholder.svg?height=600&width=1200",
} as const
