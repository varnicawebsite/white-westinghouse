import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ProductsSection from './components/ProductsSection';
import WhyUsSection from './components/WhyUsSection';
import SupportSection from './components/SupportSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import EnquiryForm from './components/EnquiryForm';
import { Product } from './types/product';
import { products } from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | undefined>(undefined);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = section === 'home' ? 0 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleEnquire = (product?: Product) => {
    setEnquiryProduct(product);
    setShowEnquiryForm(true);
    setSelectedProduct(null);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleShopNow = () => {
    handleNavigate('products');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} />

      <main className="pt-[104px]">
        <div id="home">
          <HeroCarousel onEnquire={() => handleEnquire()} onShopNow={handleShopNow} />
        </div>

        <ProductsSection
          products={products}
          onEnquire={handleEnquire}
          onViewDetails={handleViewDetails}
        />

        <WhyUsSection />

        <SupportSection />

        <ContactSection />
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onEnquire={handleEnquire}
        />
      )}

      {showEnquiryForm && (
        <EnquiryForm
          product={enquiryProduct}
          onClose={() => {
            setShowEnquiryForm(false);
            setEnquiryProduct(undefined);
          }}
        />
      )}
    </div>
  );
}

export default App;
