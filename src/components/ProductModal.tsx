import { X, Check, Star, Zap, Shield, Wind } from 'lucide-react';
import { Product } from '../types/product';
import { useState } from 'react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export default function ProductModal({ product, onClose, onEnquire }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-6xl w-full my-8 shadow-2xl">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-3xl z-10">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden aspect-square">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === img ? 'border-orange-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover aspect-square" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-orange-600 font-semibold uppercase tracking-wide text-sm">
                  {product.category}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full">
                    <Star size={16} className="text-orange-500 fill-orange-500" />
                    <span className="text-sm font-bold text-orange-700">{product.energyRating}</span>
                  </div>
                  <span className="text-gray-600 font-medium">{product.capacity}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-2xl">
                <p className="text-sm text-gray-600 mb-1">Starting from</p>
                <p className="text-4xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="text-orange-600" size={20} />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Wind className="text-orange-600" size={20} />
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Cooling Capacity</span>
                    <span className="font-semibold text-gray-900">{product.specifications.coolingCapacity}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Power Consumption</span>
                    <span className="font-semibold text-gray-900">{product.specifications.powerConsumption}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Refrigerant</span>
                    <span className="font-semibold text-gray-900">{product.specifications.refrigerant}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Noise Level</span>
                    <span className="font-semibold text-gray-900">{product.specifications.noiseLevel}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                <Shield className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Warranty</p>
                  <p className="text-sm text-gray-700">{product.specifications.warranty}</p>
                </div>
              </div>

              <button
                onClick={() => onEnquire(product)}
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
