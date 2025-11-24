'use client'

import { useParams } from 'next/navigation'
import { stores } from '@/data/stores'
import { products } from '@/data/products'
import { MapPin, Star, Clock, Phone, Mail, ArrowLeft } from 'lucide-react'
import ProductCard from '@/components/shopping/ProductCard'
import Link from 'next/link'

export default function StoreDetailPage() {
  const params = useParams()
  const storeId = params.id as string
  
  const store = stores.find(s => s.id === storeId)
  const storeProducts = products.filter(p => p.storeId === storeId)

  if (!store) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Store not found
          </h1>
          <Link
            href="/shopping"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Back to Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/shopping"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shopping
        </Link>

        {/* Store Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-white opacity-20">
                {store.name.charAt(0)}
              </span>
            </div>
            <div className="absolute top-6 right-6 bg-white dark:bg-gray-800 px-4 py-2 rounded-full flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {store.rating}
              </span>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {store.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              {store.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                  <p className="text-gray-600 dark:text-gray-400">{store.address}</p>
                  <p className="text-gray-600 dark:text-gray-400">{store.area}, {store.corridor}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">{store.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">{store.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Opening Hours</p>
                  <p className="text-gray-600 dark:text-gray-400">Mon-Fri: {store.openingHours.monday}</p>
                  <p className="text-gray-600 dark:text-gray-400">Sat: {store.openingHours.saturday}</p>
                  <p className="text-gray-600 dark:text-gray-400">Sun: {store.openingHours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {store.category.map((cat, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Products ({storeProducts.length})
          </h2>
          {storeProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {storeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
              <p className="text-gray-500 dark:text-gray-400">
                No products available from this store yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

