import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Lotus & Lime - Experience the perfect blend of traditional Asian flavors with modern culinary innovation. Book your table for an unforgettable dining experience.",
  keywords: [
    "Lotus & Lime restaurant",
    "Asian fusion dining",
    "fine dining experience",
    "restaurant reservations",
    "Asian cuisine",
    "fusion food"
  ],
  openGraph: {
    title: "Lotus & Lime - Asian Fusion Restaurant | Fine Dining Experience",
    description: "Welcome to Lotus & Lime - Experience the perfect blend of traditional Asian flavors with modern culinary innovation.",
    url: "https://lotusandlime.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1743514240526-dcc36f4e15c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1470,
        height: 980,
        alt: "Lotus & Lime Asian Fusion Restaurant - Elegant dining atmosphere",
      }
    ],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Lotus & Lime",
    "description": "Asian fusion restaurant offering traditional Asian flavors with modern culinary innovation",
    "url": "https://lotusandlime.com",
    "telephone": "+1-234-567-890",
    "email": "info@lotusandlime.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Fusion Street",
      "addressLocality": "Downtown District",
      "addressRegion": "City",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHours": [
      "Mo-Th 11:00-22:00",
      "Fr-Sa 11:00-23:00",
      "Su 12:00-21:00"
    ],
    "servesCuisine": ["Asian Fusion", "Sushi", "Dim Sum", "Asian Cuisine"],
    "priceRange": "$$",
    "image": "https://images.unsplash.com/photo-1743514240526-dcc36f4e15c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156"
    },
    "menu": "https://lotusandlime.com/menu",
    "reservations": "https://lotusandlime.com/reservations"
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1743514240526-dcc36f4e15c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Lotus & Lime
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Where tradition meets innovation in every bite. Experience the perfect fusion of Asian flavors with contemporary culinary artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reservations" 
              className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium text-lg"
            >
              Book a Table
            </Link>
            <Link 
              href="/menu" 
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium text-lg"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-white mb-6">
                A Culinary Journey
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Lotus & Lime, we believe that great food is more than just sustenance—it's an experience that brings people together. Our chefs combine traditional Asian techniques with modern culinary innovation to create dishes that are both familiar and surprising.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From our signature sushi rolls to our innovative dim sum creations, every dish tells a story of passion, creativity, and respect for authentic flavors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium"
                >
                  Learn More About Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a 
                  href="#lunch-menu" 
                  className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium"
                >
                  View Lunch Menu
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Lotus & Lime restaurant interior"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experience the perfect blend of traditional Asian flavors with modern culinary innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Sushi and Asian cuisine"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Asian fusion cuisine"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lunch Menu Section */}
      <section id="lunch-menu" className="py-20 bg-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Lunch Menu
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Perfect for your midday break. Quick, delicious, and satisfying Asian fusion dishes.
            </p>
          </div>
          

          
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              Lunch served Monday - Friday, 11:00 AM - 3:00 PM
            </p>
            <a 
              href="#" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              View Full Menu
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Why Choose Lotus & Lime
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Discover what makes our dining experience truly special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM3 10h18M7 15h4m4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-gray-200">
                We source only the finest, freshest ingredients from local suppliers and premium markets to ensure every dish exceeds expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">
                Expert Chefs
              </h3>
              <p className="text-gray-200">
                Our culinary team brings decades of combined experience in Asian cuisine, creating innovative dishes that honor tradition while embracing modern techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">
                Warm Atmosphere
              </h3>
              <p className="text-gray-200">
                Enjoy your meal in our thoughtfully designed space that combines modern elegance with the warmth and comfort of traditional Asian hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Experience Lotus & Lime?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Book your table today and discover why we're the city's premier destination for Asian fusion cuisine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reservations" 
              className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium text-lg"
            >
              Make a Reservation
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
