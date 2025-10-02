import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="tel:+911800123456" className="flex items-center gap-2 hover:text-orange-100 transition">
            <Phone size={14} />
            <span className="hidden sm:inline">1800-123-456</span>
          </a>
          <a href="mailto:info@wwhacindia.com" className="flex items-center gap-2 hover:text-orange-100 transition">
            <Mail size={14} />
            <span className="hidden sm:inline">info@wwhacindia.com</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src="https://wwhacindia.com/wp-content/uploads/2025/02/White-Westinghouse_orange_logo.png"
              alt="White-Westinghouse India"
              className="h-12 md:h-14 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 font-medium transition">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-600 font-medium transition">
              Air Conditioners
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-orange-600 font-medium transition">
              Why Us
            </button>
            <button onClick={() => scrollToSection('support')} className="text-gray-700 hover:text-orange-600 font-medium transition">
              Support
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium">
              Air Conditioners
            </button>
            <button onClick={() => scrollToSection('why-us')} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium">
              Why Us
            </button>
            <button onClick={() => scrollToSection('support')} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium">
              Support
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition text-center">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
