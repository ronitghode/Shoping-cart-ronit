import React from 'react'
import { useCart } from '../store/CartContext'
import { ShoppingCartIcon } from '@heroicons/react/24/outline' // install heroicons if not installed

export default function Navbar({ onOpenCart }) {
  const { items } = useCart()
  const count = items.reduce((s, i) => s + i.quantity, 0)

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">Simple Cart</div>

        {/* Cart Button */}
        <div>
          <button
            onClick={onOpenCart}
            className="relative bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2"
          >
            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            <span>Cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
