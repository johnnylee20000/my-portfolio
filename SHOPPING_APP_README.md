# East-West Corridor Shopping App

A comprehensive online shopping platform that connects customers with businesses across the East-West Corridor of Trinidad and Tobago, with a focus on the Arima area.

## 🎯 Features

### For Customers
- **Browse Stores**: View all businesses in the East-West Corridor, filtered by area (Arima, Tunapuna, Port of Spain, etc.)
- **Product Catalog**: Search and browse products from all stores in one place
- **Store Details**: View detailed information about each store including:
  - Address and contact information
  - Opening hours
  - Store categories
  - All available products
- **Shopping Cart**: Add products to cart, manage quantities, and view totals
- **Advanced Search**: Search by product name, store name, or description
- **Category Filtering**: Filter by product categories (Groceries, Electronics, Fashion, etc.)
- **Location Filtering**: Filter stores and products by specific areas
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Full dark mode support

### Current Store Categories
- Groceries & Supermarkets
- Electronics & Technology
- Fashion & Clothing
- Home & Garden
- Pharmacy & Health
- Sports & Fitness

## 🚀 Getting Started

### Access the Shopping App

1. **From the Portfolio**: Click on "Shopping" in the navigation menu
2. **Direct URL**: Navigate to `/shopping` in your browser

### Using the App

1. **Browse Stores**:
   - Click on "Stores" view to see all businesses
   - Use filters to narrow down by area or category
   - Click on any store card to see full details and products

2. **Browse Products**:
   - Click on "Products" view to see all available products
   - Use the search bar to find specific items
   - Filter by area or category

3. **Shopping Cart**:
   - Click the shopping bag icon in the header to open your cart
   - Add items to cart from product cards
   - Adjust quantities or remove items
   - View total price

4. **Store Details**:
   - Click on any store to see:
     - Full store information
     - Contact details
     - Opening hours
     - All products from that store

## 📁 Project Structure

```
src/
├── app/
│   └── shopping/
│       ├── page.tsx              # Main shopping page
│       └── stores/
│           └── [id]/
│               └── page.tsx      # Individual store detail page
├── components/
│   └── shopping/
│       ├── StoreCard.tsx         # Store card component
│       ├── ProductCard.tsx       # Product card component
│       └── CartSidebar.tsx      # Shopping cart sidebar
├── data/
│   ├── stores.ts                 # Store data
│   └── products.ts               # Product data
├── store/
│   └── cartStore.ts              # Zustand cart state management
└── types/
    └── shopping.ts               # TypeScript types
```

## 🛠️ Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Zustand** - State management for shopping cart
- **Lucide React** - Icons

## 📊 Data Structure

### Store
- Basic information (name, description, address)
- Location (area, corridor)
- Contact details (phone, email)
- Opening hours
- Categories
- Rating

### Product
- Product details (name, description, price)
- Store association
- Category
- Stock information
- Ratings and reviews

## 🔮 Future Enhancements

- [ ] Admin panel for stores to manage their products
- [ ] User authentication and accounts
- [ ] Order placement and tracking
- [ ] Payment integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Product recommendations
- [ ] Store owner dashboard
- [ ] Real-time inventory updates
- [ ] Delivery options and tracking
- [ ] Multi-store checkout
- [ ] Product comparison
- [ ] Advanced filtering (price range, ratings, etc.)

## 🗺️ Areas Covered

Currently focused on:
- **Arima** - Primary focus area
- **East-West Corridor** - All areas along the corridor

Additional areas can be easily added:
- Tunapuna
- Port of Spain
- San Juan
- Curepe
- St. Augustine
- And more...

## 💡 Adding New Stores

To add a new store, edit `src/data/stores.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Store Name',
  description: 'Store description',
  address: 'Store address',
  area: 'Arima', // or other area
  corridor: 'East-West Corridor',
  phone: '+1 (868) XXX-XXXX',
  email: 'store@email.com',
  image: '/images/stores/store-image.jpg',
  openingHours: { /* ... */ },
  rating: 4.5,
  category: ['Category1', 'Category2']
}
```

## 💡 Adding New Products

To add new products, edit `src/data/products.ts`:

```typescript
{
  id: 'unique-id',
  storeId: 'store-id',
  storeName: 'Store Name',
  name: 'Product Name',
  description: 'Product description',
  price: 29.99,
  image: '/images/products/product.jpg',
  category: 'Category',
  inStock: true,
  stockQuantity: 50
}
```

## 🎨 Customization

The app uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.ts`
- Layout in component files
- Animations using Framer Motion

## 📝 Notes

- Currently uses mock data stored in TypeScript files
- For production, you'll want to connect to a database (MongoDB, PostgreSQL, etc.)
- Images are placeholder gradients - replace with actual product/store images
- Checkout functionality is a placeholder - integrate with payment gateway

## 🤝 Contributing

This is a foundational shopping app. To extend it:
1. Add database integration
2. Implement authentication
3. Add payment processing
4. Create admin dashboard
5. Add more features from the "Future Enhancements" list

---

**Built with ❤️ for the East-West Corridor community**


