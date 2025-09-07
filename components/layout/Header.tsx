"use client"

import type React from "react"
import { useState } from "react"
import Button from "../common/Button"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  )

  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )

  const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">ALX Listing</h1>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex-1 px-6 py-3">
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full text-sm text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none"
                  />
                </div>
                <div className="px-2">
                  <Button variant="primary" size="sm" className="rounded-full w-10 h-10 p-0" leftIcon={<SearchIcon />}>
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Become a host
            </Button>
            <Button variant="ghost" size="sm" leftIcon={<UserIcon />}>
              Sign in
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} leftIcon={<MenuIcon />}>
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="flex items-center bg-gray-100 rounded-full">
              <div className="flex-1 px-4 py-2">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full text-sm text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none"
                />
              </div>
              <div className="px-2">
                <Button variant="primary" size="sm" className="rounded-full w-8 h-8 p-0" leftIcon={<SearchIcon />}>
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            <Button variant="ghost" size="sm" fullWidth className="justify-start">
              Become a host
            </Button>
            <Button variant="ghost" size="sm" fullWidth className="justify-start" leftIcon={<UserIcon />}>
              Sign in
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
