import { useState } from 'react';
import './App.css';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { User, Product } from './components/types'; // Import your interfaces

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  // Mock User Data
  const user: User = {
    id: 'u1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  };

  // Mock Product Data
  const product: Product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    inStock: true
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* 1. Alert Section */}
      {showAlert && (
        <AlertBox
          type="success"
          message={`Success! Item added to cart. Total items: ${cartItems.length}`}
          onClose={() => setShowAlert(false)}
        >
          <p className="text-xs mt-1">Free shipping applies to this order.</p>
        </AlertBox>
      )}

      {/* 2. Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(id) => console.log("Edit user:", id)}
        />

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <p className="text-sm text-blue-600 font-medium">Limited time offer!</p>
        </ProductDisplay>
      </div>
    </div> // Added the missing closing div here
  );
};

export default App;