import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-sm font-bold">L</span>
              </div>
              <span className="font-serif text-xl font-bold">Lotus & Lime</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Experience the perfect blend of traditional Asian flavors with modern culinary innovation. 
              Our passion for authentic ingredients and contemporary techniques creates unforgettable dining experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>123 Fusion Street</p>
              <p>Downtown District</p>
              <p>City, State 12345</p>
              <p className="pt-2">
                <a href="tel:+1234567890" className="hover:text-red-400 transition-colors duration-200">
                  (123) 456-7890
                </a>
              </p>
              <p>
                <a href="mailto:info@lotusandlime.com" className="hover:text-red-400 transition-colors duration-200">
                  info@lotusandlime.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h3 className="font-serif text-lg font-semibold mb-4">Hours</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <div>
                <p className="font-medium">Monday - Thursday</p>
                <p>11:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Friday - Saturday</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Sunday</p>
                <p>12:00 PM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Happy Hour</p>
                <p>3:00 PM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Lotus & Lime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 