'use client'

import { motion } from 'framer-motion'
import { MapPin, Star, Clock, Phone } from 'lucide-react'
import { Store } from '@/types/shopping'
import Link from 'next/link'

interface StoreCardProps {
  store: Store
}

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <Link href={`/shopping/stores/${store.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      >
        {/* Store Image */}
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white opacity-20">
              {store.name.charAt(0)}
            </span>
          </div>
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {store.rating}
            </span>
          </div>
        </div>

        {/* Store Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {store.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {store.description}
          </p>

          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{store.address}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Phone className="w-4 h-4 mr-2" />
              <span>{store.phone}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>Open until 9:00 PM</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {store.category.slice(0, 2).map((cat, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}


