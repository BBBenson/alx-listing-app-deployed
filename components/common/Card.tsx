"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import type { CardProps } from "../../interfaces"
import { CURRENCY_SYMBOL } from "../../constants"
import Button from "./Button"

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  price,
  originalPrice,
  currency = "USD",
  imageUrl,
  imageAlt,
  rating,
  reviewCount,
  location,
  host,
  amenities = [],
  propertyType,
  isWishlisted = false,
  onClick,
  onWishlistToggle,
  className = "",
  featured = false,
  discount,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [wishlisted, setWishlisted] = useState(isWishlisted)

  const handleCardClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setWishlisted(!wishlisted)
    if (onWishlistToggle) {
      onWishlistToggle(id)
    }
  }

  const HeartIcon = ({ filled }: { filled: boolean }) => (
    <svg
      className={`w-6 h-6 transition-colors duration-200 ${
        filled ? "text-red-500 fill-current" : "text-white hover:text-red-500"
      }`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  )

  const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden card-hover ${
        featured ? "ring-2 ring-brand-400 ring-opacity-50" : ""
      } ${className}`}
      onClick={handleCardClick}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          Featured
        </div>
      )}

      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 right-16 z-20 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold shadow-lg">
          -{discount}%
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={handleWishlistClick}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-200 hover:scale-110"
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <HeartIcon filled={wishlisted} />
      </button>

      {/* Property Image */}
      <div className="relative h-64 w-full overflow-hidden">
        {!imageLoaded && <div className="absolute inset-0 shimmer-loading rounded-t-2xl" />}
        <Image
          src={imageUrl || "/placeholder.svg?height=300&width=400"}
          alt={imageAlt}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Property Type Badge */}
        {propertyType && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 capitalize">
            {propertyType}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Location */}
        <p className="text-sm text-gray-600 mb-2 font-medium">{location}</p>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-4 line-clamp-2 leading-relaxed">{description}</p>

        {/* Rating and Reviews */}
        {rating && (
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <StarIcon />
              <span className="font-semibold text-gray-900">{rating.toFixed(1)}</span>
            </div>
            {reviewCount && <span className="text-gray-600 text-sm">({reviewCount} reviews)</span>}
          </div>
        )}

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {amenities.slice(0, 3).map((amenity) => (
              <span key={amenity} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {amenity}
              </span>
            ))}
            {amenities.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{amenities.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Host Info */}
        {host && (
          <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
            <Image
              src={host.avatar || "/placeholder.svg?height=32&width=32"}
              alt={host.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900 text-sm">{host.name}</p>
              {host.isSuperhost && <p className="text-xs text-brand-600 font-medium">Superhost</p>}
            </div>
          </div>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-gray-900">
                {CURRENCY_SYMBOL}
                {price}
              </span>
              <span className="text-gray-600 text-sm">/ night</span>
            </div>
            {originalPrice && originalPrice > price && (
              <span className="text-gray-500 text-sm line-through">
                {CURRENCY_SYMBOL}
                {originalPrice}
              </span>
            )}
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={(e) => {
              e?.stopPropagation()
              console.log(`Booking property ${id}`)
            }}
            className="shadow-lg hover:shadow-xl"
          >
            Reserve
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
