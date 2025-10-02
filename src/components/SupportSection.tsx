import { Phone, MessageCircle, MapPin, Clock, FileText, Headphones } from 'lucide-react';

export default function SupportSection() {
  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer <span className="text-orange-600">Support & Warranty</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to help you every step of the way
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Phone className="text-orange-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Support</h3>
            <p className="text-gray-600 mb-4">
              Speak directly with our customer care team
            </p>
            <a href="tel:+911800123456" className="text-orange-600 font-bold text-lg hover:text-orange-700">
              1800-123-456
            </a>
            <p className="text-sm text-gray-500 mt-2">Toll-Free</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <MessageCircle className="text-orange-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp Support</h3>
            <p className="text-gray-600 mb-4">
              Quick assistance via WhatsApp chat
            </p>
            <a href="https://wa.me/919876543210" className="text-orange-600 font-bold text-lg hover:text-orange-700">
              +91 9876543210
            </a>
            <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Headphones className="text-orange-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Service Request</h3>
            <p className="text-gray-600 mb-4">
              Book a technician visit online
            </p>
            <button className="text-orange-600 font-bold text-lg hover:text-orange-700">
              Book Now
            </button>
            <p className="text-sm text-gray-500 mt-2">Same-day service</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="text-orange-600" size={28} />
              Warranty Coverage
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-4 border-b">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Comprehensive Warranty</p>
                  <p className="text-gray-600">1 year on complete unit including parts and labor</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-4 border-b">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Compressor Warranty</p>
                  <p className="text-gray-600">5-10 years extended coverage on compressor</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-4 border-b">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Free Installation</p>
                  <p className="text-gray-600">Complimentary installation by certified technicians</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Gas Charging</p>
                  <p className="text-gray-600">Free gas charging within warranty period</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="text-orange-600" size={28} />
              Service Centers
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 mb-4">
                  We have 500+ authorized service centers across India, ensuring quick and reliable support wherever you are.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-orange-600" size={20} />
                  <p className="font-semibold text-gray-900">Service Hours</p>
                </div>
                <p className="text-gray-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-700">Sunday: 10:00 AM - 5:00 PM</p>
                <p className="text-sm text-orange-600 font-semibold mt-2">Emergency: 24/7 Available</p>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition">
                Find Nearest Service Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
