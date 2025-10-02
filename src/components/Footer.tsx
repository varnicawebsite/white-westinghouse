import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://wwhacindia.com/wp-content/uploads/2025/02/White-Westinghouse_orange_logo.png"
              alt="White-Westinghouse India"
              className="h-10 mb-4 object-contain"
              style={{ filter: 'brightness(1.2)' }}
            />
            <p className="text-sm leading-relaxed mb-4">
              Experience premium cooling solutions with our range of energy-efficient air conditioners.
              Trust, quality, and comfort delivered to your home.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Air Conditioners</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition">Inverter Split AC</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Split AC</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Window AC</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Portable AC</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Commercial AC</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Customer Care</p>
                  <a href="tel:+911800123456" className="hover:text-orange-500 transition">1800-123-456</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@wwhacindia.com" className="hover:text-orange-500 transition">info@wwhacindia.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>Mumbai, Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2025 White-Westinghouse India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
