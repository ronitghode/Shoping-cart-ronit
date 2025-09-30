import React from 'react'
import { useCart } from '../store/CartContext'

export default function ProductCard({ product }) {
  const { addItem, updateQuantity, removeItem, items } = useCart()

  // Use product.id from nested 'product' field
  const cartItem = items.find(i => i.product.id === product.id)
  const isInCart = !!cartItem

  const handleIncrease = () => {
    addItem(product, 1)
  }

  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      removeItem(product.id)
    } else {
      updateQuantity(product.id, cartItem.quantity - 1)
    }
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-50">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-gray-200">
            <span className="text-gray-500 text-sm">No image</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-sm text-gray-500">$</span>
          <span className="text-2xl font-bold text-gray-900">
            {product.price.toFixed(2)}
          </span>
        </div>

        {/* Buttons / Quantity Controls */}
        {!isInCart ? (
          <button
            onClick={() => addItem(product)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-full transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-md"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-2">
            {/* Decrease */}
            <button
              onClick={handleDecrease}
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-colors active:scale-95"
            >
              {cartItem.quantity === 1 ? (
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M20 12H4"
                  />
                </svg>
              )}
            </button>

            {/* Quantity Display */}
            <span className="px-3 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
              {cartItem.quantity}
            </span>

            {/* Increase */}
            <button
              onClick={handleIncrease}
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-colors active:scale-95"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
