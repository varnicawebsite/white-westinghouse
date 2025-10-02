import { Award, Globe, Shield, Wrench, ThumbsUp, Zap } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Legacy',
    description: 'Part of the legendary Westinghouse brand with over 135 years of innovation and trust worldwide.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Engineered with precision using the finest materials and cutting-edge technology for lasting performance.'
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Save up to 50% on electricity bills with our advanced inverter technology and 5-star rated models.'
  },
  {
    icon: Shield,
    title: 'Extended Warranty',
    description: 'Industry-leading warranty coverage with up to 10 years on compressor for complete peace of mind.'
  },
  {
    icon: Wrench,
    title: '24/7 Service Support',
    description: 'Pan-India service network with trained technicians available round the clock for your convenience.'
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: 'Trusted by over 5 million Indian families with a 4.5+ star rating across all platforms.'
  }
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-600">White-Westinghouse</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the perfect blend of legacy, innovation, and trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Superior Cooling?
          </h3>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who trust White-Westinghouse for their comfort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Browse Products
            </a>
            <a
              href="#contact"
              className="bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-800 transition border-2 border-white/30"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
