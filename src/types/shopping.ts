export interface Store {
  id: string
  name: string
  description: string
  address: string
  area: 'Arima' | 'Tunapuna' | 'Port of Spain' | 'San Juan' | 'Curepe' | 'St. Augustine' | 'Other'
  corridor: 'East-West Corridor'
  phone: string
  email: string
  image: string
  openingHours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  rating: number
  category: string[]
}

export interface Product {
  id: string
  storeId: string
  storeName: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  inStock: boolean
  stockQuantity?: number
  brand?: string
  rating?: number
  reviews?: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Category {
  id: string
  name: string
  icon: string
}


