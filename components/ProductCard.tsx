import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-sm flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
      <Link to={`/product/${product.id}`} className="relative bg-gray-50 p-6 flex items-center justify-center h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain mix-blend-multiply"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-amazon-orange text-white text-xs font-bold px-2 py-1 rounded-sm shadow-sm">
            {product.badge}
          </span>
        )}
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/product/${product.id}`} className="text-sm font-medium text-gray-900 hover:text-amazon-orange hover:underline line-clamp-2 mb-2 h-10">
          {product.title}
        </Link>
        
        <div className="flex items-center mb-1">
          <div className="flex text-amazon-yellow">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={i < Math.floor(product.rating) ? 0 : 2} />
            ))}
          </div>
          <span className="text-xs text-amazon-blue ml-1 font-medium">{product.reviewsCount}</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-gray-500 font-medium">R$</span>
            <span className="text-xl font-bold text-gray-900">{product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>
          {product.originalPrice > product.price && (
            <div className="text-xs text-gray-500 line-through">
              De: R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
          )}
          
          <Link 
            to={`/product/${product.id}`}
            className="mt-3 block w-full text-center bg-amazon-yellow hover:bg-amazon-orange text-gray-900 font-medium py-1.5 rounded-full text-sm transition-colors shadow-sm"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
