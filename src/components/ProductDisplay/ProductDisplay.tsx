


const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true
};
 
<ProductDisplay
  product={product}
  showDescription={true}
  showStockStatus={true}
  onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
>
  <div className="text-sm text-gray-500">
    Free shipping available
  </div>
</ProductDisplay>