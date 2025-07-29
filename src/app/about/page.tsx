import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story behind Lotus & Lime - our passion for Asian fusion cuisine, our talented team, and our commitment to creating unforgettable dining experiences.",
  keywords: [
    "Lotus & Lime about",
    "restaurant story",
    "Asian fusion chef",
    "restaurant team",
    "dining experience",
    "culinary passion"
  ],
  openGraph: {
    title: "About Us | Lotus & Lime - Asian Fusion Restaurant",
    description: "Discover the story behind Lotus & Lime - our passion for Asian fusion cuisine and our talented team.",
    url: "https://lotusandlime.com/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        width: 2070,
        height: 1380,
        alt: "Lotus & Lime Restaurant Interior - About our dining experience",
      }
    ],
  },
};

export default function About() {
  const teamMembers = [
    {
      name: "Chef Mei Lin",
      role: "Executive Chef",
      bio: "With over 15 years of experience in Asian cuisine, Chef Mei brings her passion for traditional flavors and modern techniques to every dish at Lotus & Lime.",
      specialty: "Sushi & Dim Sum"
    },
    {
      name: "Chef David Chen",
      role: "Sous Chef",
      bio: "David's expertise in fusion cooking and his innovative approach to combining Asian and Western techniques has been instrumental in creating our signature dishes.",
      specialty: "Fusion Cuisine"
    },
    {
      name: "Sarah Johnson",
      role: "General Manager",
      bio: "Sarah ensures that every guest at Lotus & Lime experiences the perfect blend of exceptional service and warm hospitality that makes our restaurant special.",
      specialty: "Guest Experience"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover the passion, tradition, and innovation behind Lotus & Lime
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-white mb-8">
              A Culinary Dream
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Lotus & Lime was born from a simple yet powerful vision: to create a dining experience that honors the rich traditions of Asian cuisine while embracing the creativity and innovation of modern culinary arts.
              </p>
              <p>
                Founded in 2018 by Chef Mei Lin and her partner David Chen, our restaurant began as a small family-owned establishment with big dreams. What started as a modest 40-seat restaurant has grown into one of the city's most beloved dining destinations.
              </p>
              <p>
                Today, we continue to serve our community with the same passion and dedication that inspired us from the beginning, creating memorable experiences one dish at a time.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-red-900 border-2 border-red-700 rounded-lg p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-white mb-4 text-center">
              Our Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-semibold text-white mb-2">Passion</h4>
                <p className="text-gray-200">We pour our hearts into every dish, ensuring that each bite tells a story of dedication and love for food.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-semibold text-white mb-2">Quality</h4>
                <p className="text-gray-200">We source only the finest ingredients and maintain the highest standards in everything we do.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-semibold text-white mb-2">Innovation</h4>
                <p className="text-gray-200">We constantly push boundaries to create unique and memorable dining experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The passionate individuals who make Lotus & Lime an exceptional dining destination
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-black rounded-lg shadow-md p-8 text-center border border-gray-800">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-serif text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-red-400 font-medium mb-4 text-lg">{member.role}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-sm text-gray-400">
                    <span className="font-medium">Specialty:</span> {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-8">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-900 border-2 border-red-700 rounded-lg p-6">
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                Best Asian Fusion Restaurant
              </h3>
              <p className="text-gray-200">City Food Awards 2023</p>
            </div>
            <div className="bg-red-900 border-2 border-red-700 rounded-lg p-6">
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                Chef of the Year
              </h3>
              <p className="text-gray-200">Culinary Excellence Awards 2022</p>
            </div>
            <div className="bg-red-900 border-2 border-red-700 rounded-lg p-6">
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                Top 10 Restaurants
              </h3>
              <p className="text-gray-200">Local Dining Guide 2023</p>
            </div>
            <div className="bg-red-900 border-2 border-red-700 rounded-lg p-6">
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                Excellence in Service
              </h3>
              <p className="text-gray-200">Hospitality Awards 2022</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 