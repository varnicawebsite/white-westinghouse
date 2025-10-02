import { useState } from 'react';
import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductsSectionProps {
  products: Product[];
  onEnquire: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const categories = [
  'All',
  'Inverter Split AC',
  'Split AC',
  'Window AC',
  'Portable AC'
];

export default function ProductsSection({ products, onEnquire, onViewDetails }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Air Conditioners</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our range of premium cooling solutions designed for modern Indian homes
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={onEnquire}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
