// components/MobileMenu.js
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="md:hidden flex items-center">
      <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white focus:outline-none">
        {isMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              About
            </Link>
            <Link href="/api/auth/register" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              User Sign In
            </Link>
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              Admin Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu

