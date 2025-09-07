"use client"

import type React from "react"
import type { ButtonProps } from "../../interfaces"
import { BUTTON_VARIANTS, BUTTON_SIZES } from "../../constants"

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  type = "button",
  className = "",
  leftIcon,
  rightIcon,
  fullWidth = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95"

  const variantClasses = BUTTON_VARIANTS[variant]
  const sizeClasses = BUTTON_SIZES[size]
  const widthClasses = fullWidth ? "w-full" : ""

  const buttonClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses} ${className}`.trim()

  const LoadingSpinner = () => (
    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={buttonClasses}>
      {loading ? (
        <>
          <LoadingSpinner />
          Loading...
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}

export default Button
