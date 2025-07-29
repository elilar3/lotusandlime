import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our carefully crafted Asian fusion menu featuring sushi, dim sum, main courses, and desserts. From traditional flavors to modern innovation at Lotus & Lime.",
  keywords: [
    "Lotus & Lime menu",
    "Asian fusion menu",
    "sushi menu",
    "dim sum",
    "Asian cuisine",
    "restaurant menu",
    "fusion food"
  ],
  openGraph: {
    title: "Menu | Lotus & Lime - Asian Fusion Restaurant",
    description: "Explore our carefully crafted Asian fusion menu featuring sushi, dim sum, main courses, and desserts.",
    url: "https://lotusandlime.com/menu",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        width: 2074,
        height: 1383,
        alt: "Lotus & Lime Asian Fusion Menu - Sushi and Asian cuisine",
      }
    ],
  },
};

export default function Menu() {
  const menuItems = {
    appetizers: [
      {
        name: "Lotus Blossom Dumplings",
        description: "Steamed dumplings filled with shrimp, pork, and fresh herbs, served with our signature chili sauce",
        price: "$12",
        spicy: true
      },
      {
        name: "Crispy Spring Rolls",
        description: "Fresh vegetables and glass noodles wrapped in rice paper, served with sweet chili dipping sauce",
        price: "$10",
        spicy: false
      },
      {
        name: "Spicy Edamame",
        description: "Steamed soybeans tossed with chili oil, garlic, and sea salt",
        price: "$8",
        spicy: true
      },
      {
        name: "Lime Ceviche",
        description: "Fresh fish marinated in lime juice, red onion, cilantro, and chili peppers",
        price: "$16",
        spicy: true
      }
    ],
    sushi: [
      {
        name: "Dragon Roll",
        description: "Eel, cucumber, and avocado topped with spicy tuna and eel sauce",
        price: "$18",
        spicy: true
      },
      {
        name: "Lotus Roll",
        description: "Salmon, cream cheese, and asparagus wrapped in rice and nori",
        price: "$16",
        spicy: false
      },
      {
        name: "Spicy Tuna Roll",
        description: "Fresh tuna mixed with spicy mayo and cucumber",
        price: "$14",
        spicy: true
      },
      {
        name: "California Roll",
        description: "Crab, avocado, and cucumber with tobiko",
        price: "$12",
        spicy: false
      }
    ],
    mainCourses: [
      {
        name: "Kung Pao Chicken",
        description: "Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory sauce",
        price: "$24",
        spicy: true
      },
      {
        name: "Beef and Broccoli",
        description: "Tender beef strips with fresh broccoli in a rich oyster sauce",
        price: "$26",
        spicy: false
      },
      {
        name: "Pad Thai",
        description: "Rice noodles with shrimp, tofu, bean sprouts, and peanuts in tamarind sauce",
        price: "$22",
        spicy: false
      },
      {
        name: "Spicy Basil Shrimp",
        description: "Jumbo shrimp with Thai basil, chili, and garlic in a spicy sauce",
        price: "$28",
        spicy: true
      }
    ],
    desserts: [
      {
        name: "Mango Sticky Rice",
        description: "Sweet sticky rice with fresh mango and coconut cream",
        price: "$10",
        spicy: false
      },
      {
        name: "Green Tea Ice Cream",
        description: "Homemade matcha ice cream with red bean paste",
        price: "$8",
        spicy: false
      },
      {
        name: "Lotus Seed Pudding",
        description: "Creamy pudding made with lotus seeds and honey",
        price: "$9",
        spicy: false
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our carefully crafted selection of Asian fusion dishes, 
            where traditional flavors meet contemporary innovation.
          </p>
          <div className="mt-8">
            <a 
              href="#lunch-menu" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              View Lunch Menu
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Appetizers */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-white mb-8 text-center">
              Appetizers
            </h2>
            <div className="space-y-6">
              {menuItems.appetizers.map((item, index) => (
                <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-serif text-xl font-semibold text-white">
                        {item.name}
                      </h3>
                      {item.spicy && (
                        <span className="text-red-400 text-sm font-medium">🌶️ Spicy</span>
                      )}
                    </div>
                    <span className="font-serif text-xl font-semibold text-red-400">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sushi */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-white mb-8 text-center">
              Sushi & Rolls
            </h2>
            <div className="space-y-6">
              {menuItems.sushi.map((item, index) => (
                <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-serif text-xl font-semibold text-white">
                        {item.name}
                      </h3>
                      {item.spicy && (
                        <span className="text-red-400 text-sm font-medium">🌶️ Spicy</span>
                      )}
                    </div>
                    <span className="font-serif text-xl font-semibold text-red-400">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Courses */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-white mb-8 text-center">
              Main Courses
            </h2>
            <div className="space-y-6">
              {menuItems.mainCourses.map((item, index) => (
                <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-serif text-xl font-semibold text-white">
                        {item.name}
                      </h3>
                      {item.spicy && (
                        <span className="text-red-400 text-sm font-medium">🌶️ Spicy</span>
                      )}
                    </div>
                    <span className="font-serif text-xl font-semibold text-red-400">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-white mb-8 text-center">
              Desserts
            </h2>
            <div className="space-y-6">
              {menuItems.desserts.map((item, index) => (
                <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-serif text-xl font-semibold text-white">
                        {item.name}
                      </h3>
                      {item.spicy && (
                        <span className="text-red-400 text-sm font-medium">🌶️ Spicy</span>
                      )}
                    </div>
                    <span className="font-serif text-xl font-semibold text-red-400">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>



          {/* Food Gallery */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-white mb-8 text-center">
              Our Signature Dishes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Special Note */}
          <div className="bg-red-900 border-2 border-red-700 rounded-lg p-6 text-center">
            <h3 className="font-serif text-lg font-semibold text-white mb-2">
              Special Dietary Requirements?
            </h3>
            <p className="text-gray-200 mb-4">
              We're happy to accommodate vegetarian, vegan, and gluten-free requests. 
              Please inform your server of any dietary restrictions.
            </p>
            <p className="text-sm text-gray-400">
              * All prices include tax. 18% gratuity added for parties of 6 or more.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 