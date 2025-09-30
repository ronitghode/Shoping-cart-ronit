import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

const STORAGE_KEY = 'simple_cart_v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function addItem(product, qty = 1) {
    setItems(prev => {
      const found = prev.find(i => i.product.id === product.id)
      if (found) {
        return prev.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i)
      }
      toast.success('Item added to cart')
      return [...prev, { product, quantity: qty }]
    })
  }

  function updateQuantity(productId, quantity) {
    setItems(prev => prev.map(i => i.product.id === productId ? { ...i, quantity } : i).filter(i => i.quantity > 0))
  }

  function removeItem(productId) {
    setItems(prev => prev.filter(i => i.product.id !== productId))
  }

  function clear() {
    setItems([])
  }

  const total = items.reduce((s, it) => s + it.product.price * it.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, removeItem, clear, total }}>
      {children}
    </CartContext.Provider>
  )
}
