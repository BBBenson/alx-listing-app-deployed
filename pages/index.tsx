"use client"

import type React from "react"
import Head from "next/head"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Hero from "../components/sections/Hero"
import Card from "../components/common/Card"
import Button from "../components/common/Button"
import axios from "axios"
import { useEffect, useState } from "react"

const HomePage: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const handlePropertyClick = (id: string) => {
    console.log(`Viewing property ${id}`)
  }

  const handleWishlistToggle = (id: string) => {
    console.log(`Toggling wishlist for property ${id}`)
  }

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties")
        setProperties(response.data)
      } catch (error) {
        console.error("Error fetching properties:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  return (
    <>
      <Head>
        <title>ALX Listing - Find Your Perfect Getaway</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />

        {/* Featured Properties Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked by our team for exceptional experiences and outstanding value
              </p>
            </div>

            {loading ? (
              <p className="text-center text-gray-600">Loading...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {properties.map((property) => (
                  <div key={property.id} className="animate-fade-in">
                    <Card
                      {...property}
                      onClick={() => handlePropertyClick(property.id)}
                      onWishlistToggle={handleWishlistToggle}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Properties
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-brand-600 mb-2">10M+</div>
                <div className="text-gray-600">Happy Guests</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-brand-600 mb-2">500K+</div>
                <div className="text-gray-600">Properties</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-brand-600 mb-2">200+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-brand-600 mb-2">4.8★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default HomePage
