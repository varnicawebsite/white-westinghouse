import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ac4 from '/home/project/src/assets/ac-4.webp';
import ac1 from '/home/project/src/assets/ac-1.jpg';
import ac2 from '/home/project/src/assets/ac-2.jpg';


interface HeroCarouselProps {
  onEnquire: () => void;
  onShopNow: () => void;
}

const slides = [
  {
    title: 'Experience Cooling Redefined',
    subtitle: 'Premium Air Conditioning Solutions for Modern Living',
    image: '/home/project/src/assets/ac-4.webp',
    cta1: 'Shop Now',
    cta2: 'Enquire Now'
  },
  {
    title: 'Smart Cooling. Lasting Comfort.',
    subtitle: 'Energy-Efficient Inverter Technology for Your Home',
    image: '/home/project/src/assets/ac-1.jpg',
    cta1: 'Explore Products',
    cta2: 'Get Quote'
  },
  {
    title: 'Beat the Heat in Style',
    subtitle: 'Trusted by Millions for Quality & Performance',
    image: '/home/project/src/assets/ac-2.jpg',
    cta1: 'View Collection',
    cta2: 'Contact Us'
  }
];

export default function HeroCarousel({ onEnquire, onShopNow }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>

          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl font-light leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={onShopNow}
                  className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {slide.cta1}
                </button>
                <button
                  onClick={onEnquire}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {slide.cta2}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-orange-600 w-8' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
