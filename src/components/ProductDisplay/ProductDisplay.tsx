import React from 'react';
import { ProductDisplayProps } from '../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      {product.imageUrl && (
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
        </div>

        {showDescription && <p className="text-blue-500 mt-2">{product.description}</p>}

        {showStockStatus && (
          <p className={`text-sm mt-2 ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
            {product.inStock ? '● In Stock' : '○ Out of Stock'}
          </p>
        )}

        <div className="mt-4">
          {children}
        </div>

        {onAddToCart && (
          <button
            disabled={!product.inStock}
            onClick={() => onAddToCart(product.id)}
            className={`mt-4 w-full py-2 rounded ${
              product.inStock ? 'bg-black text-blue' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        )}
      </div>
    </div>
  );
};