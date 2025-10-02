import { Star, Zap } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onEnquire, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-[4/3]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.isFeatured && (
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Zap size={12} />
            Featured
          </div>
        )}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star size={14} className="text-orange-500 fill-orange-500" />
          <span className="text-sm font-bold text-gray-800">{product.energyRating}</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
            {product.category}
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-1 line-clamp-2">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
            {product.capacity}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
            {product.energyRating}
          </span>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="text-3xl font-bold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onViewDetails(product)}
              className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              View Details
            </button>
            <button
              onClick={() => onEnquire(product)}
              className="flex-1 bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
