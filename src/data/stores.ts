import { Store } from '@/types/shopping'

export const stores: Store[] = [
  {
    id: '1',
    name: 'Arima Supermarket',
    description: 'Your one-stop shop for groceries, household items, and daily essentials in Arima.',
    address: '123 High Street, Arima',
    area: 'Arima',
    corridor: 'East-West Corridor',
    phone: '+1 (868) 667-1234',
    email: 'info@arimasupermarket.com',
    image: '/images/stores/arima-supermarket.jpg',
    openingHours: {
      monday: '7:00 AM - 9:00 PM',
      tuesday: '7:00 AM - 9:00 PM',
      wednesday: '7:00 AM - 9:00 PM',
      thursday: '7:00 AM - 9:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '8:00 AM - 8:00 PM'
    },
    rating: 4.5,
    category: ['Groceries', 'Household', 'Fresh Produce']
  },
  {
    id: '2',
    name: 'Tech Hub Arima',
    description: 'Latest electronics, smartphones, computers, and tech accessories.',
    address: '456 Main Road, Arima',
    area: 'Arima',
    corridor: 'East-West Corridor',
    phone: '+1 (868) 667-5678',
    email: 'sales@techhubarima.com',
    image: '/images/stores/tech-hub.jpg',
    openingHours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      wednesday: '9:00 AM - 7:00 PM',
      thursday: '9:00 AM - 7:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: 'Closed'
    },
    rating: 4.8,
    category: ['Electronics', 'Technology', 'Mobile Phones']
  },
  {
    id: '3',
    name: 'Fashion Boutique Arima',
    description: 'Trendy clothing, shoes, and accessories for men, women, and children.',
    address: '789 Queen Street, Arima',
    area: 'Arima',
    corridor: 'East-West Corridor',
    phone: '+1 (868) 667-9012',
    email: 'hello@fashionboutique.com',
    image: '/images/stores/fashion-boutique.jpg',
    openingHours: {
      monday: '10:00 AM - 6:00 PM',
      tuesday: '10:00 AM - 6:00 PM',
      wednesday: '10:00 AM - 6:00 PM',
      thursday: '10:00 AM - 6:00 PM',
      friday: '10:00 AM - 7:00 PM',
      saturday: '10:00 AM - 7:00 PM',
      sunday: '12:00 PM - 5:00 PM'
    },
    rating: 4.3,
    category: ['Fashion', 'Clothing', 'Accessories']
  },
  {
    id: '4',
    name: 'Home & Garden Center',
    description: 'Everything for your home and garden - furniture, plants, tools, and decor.',
    address: '321 Eastern Main Road, Arima',
    area: 'Arima',
    corridor: 'East-West Corridor',
    phone: '+1 (868) 667-3456',
    email: 'info@homegarden.com',
    image: '/images/stores/home-garden.jpg',
    openingHours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: '8:00 AM - 7:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '9:00 AM - 4:00 PM'
    },
    rating: 4.6,
    category: ['Home & Garden', 'Furniture', 'Tools']
  },
  {
    id: '5',
    name: 'Pharmacy Plus Arima',
    description: 'Full-service pharmacy with prescription medications, health products, and personal care items.',
    address: '654 Arima Old Road, Arima',
    area: 'Arima',
    corridor: 'East-West Corridor',
    phone: '+1 (868) 667-7890',
    email: 'pharmacy@pharmacyplus.com',
    image: '/images/stores/pharmacy.jpg',
    openingHours: {
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: '8:00 AM - 8:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '9:00 AM - 4:00 PM'
    },
    rating: 4.7,
    category: ['Pharmacy', 'Health', 'Personal Care']
  },
  {
    id: '6',
    name: 'Sports & Fitness World',
    description: 'Sports equipment, athletic wear, fitness gear, and supplements.',
    address: '987 Arima Boulevard, Arima',
    area: 'Arima',
    corridor: 'East-West Corridor',
    phone: '+1 (868) 667-2345',
    email: 'info@sportsfitness.com',
    image: '/images/stores/sports-fitness.jpg',
    openingHours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      wednesday: '9:00 AM - 7:00 PM',
      thursday: '9:00 AM - 7:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 7:00 PM',
      sunday: '10:00 AM - 5:00 PM'
    },
    rating: 4.4,
    category: ['Sports', 'Fitness', 'Athletic Wear']
  }
]


