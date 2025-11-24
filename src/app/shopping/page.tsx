'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Filter, Store, ShoppingBag } from 'lucide-react'
import { stores } from '@/data/stores'
import { products } from '@/data/products'
import { Store as StoreType, Product as ProductType } from '@/types/shopping'
import StoreCard from '@/components/shopping/StoreCard'
import ProductCard from '@/components/shopping/ProductCard'
import CartSidebar from '@/components/shopping/CartSidebar'
import { useCartStore } from '@/store/cartStore'

export default function ShoppingPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArea, setSelectedArea] = useState<string>('All')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [viewMode, setViewMode] = useState<'stores' | 'products'>('stores')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getTotalItems } = useCartStore()

  const areas = ['All', 'Arima', 'Tunapuna', 'Port of Spain', 'San Juan', 'Curepe', 'St. Augustine']
  const categories = ['All', 'Groceries', 'Electronics', 'Fashion', 'Home & Garden', 'Pharmacy', 'Sports']

  const filteredStores = useMemo(() => {
    return stores.filter(store => {
      const matchesArea = selectedArea === 'All' || store.area === selectedArea
      const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           store.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || 
                             store.category.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()))
      return matchesArea && matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedArea, selectedCategory])

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const productStore = stores.find(s => s.id === product.storeId)
      const matchesArea = selectedArea === 'All' || productStore?.area === selectedArea
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.storeName.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || 
                             product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      return matchesArea && matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedArea, selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                East-West Corridor Shopping
              </h1>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
            >
              <ShoppingBag className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search stores or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters:</span>
            </div>
            
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <div className="flex space-x-2 ml-auto">
              <button
                onClick={() => setViewMode('stores')}
                className={`px-4 py-2 rounded-lg transition ${
                  viewMode === 'stores'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Store className="w-4 h-4 inline mr-2" />
                Stores
              </button>
              <button
                onClick={() => setViewMode('products')}
                className={`px-4 py-2 rounded-lg transition ${
                  viewMode === 'products'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <ShoppingBag className="w-4 h-4 inline mr-2" />
                Products
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          {viewMode === 'stores' ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Stores ({filteredStores.length})
              </h2>
              {filteredStores.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStores.map((store, index) => (
                    <motion.div
                      key={store.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <StoreCard store={store} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  No stores found matching your criteria.
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Products ({filteredProducts.length})
              </h2>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  No products found matching your criteria.
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}


