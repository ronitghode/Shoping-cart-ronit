import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import CartModal from './components/CartModal'
import { ToastContainer, toast } from 'react-toastify'

export default function App() {
  const [products, setProducts] = useState([])
  const [showCart, setShowCart] = useState(false)
  
  const getProducts = async() => {
    try {
      const res = await axios.get('http://localhost:4000/api/products')
      setProducts(res.data)
    } catch (error) {
      toast.error('Failed to load products')
    }
  }

  useEffect(() => {
    getProducts()
  }, []);

  console.log('Products loaded:', products)
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onOpenCart={() => setShowCart(true)} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Featured Products</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>

      <CartModal open={showCart} onClose={() => setShowCart(false)} />
      <ToastContainer position="top-right" />
    </div>
  )
}
