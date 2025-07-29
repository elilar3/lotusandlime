'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: ''
      });
    }, 5000);
  };

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            Make a Reservation
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Book your table today.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-8">
                Book Your Table
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-900 border border-green-700 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-gray-200">
                    Thank you for choosing Lotus & Lime. We've received your reservation request and will confirm it shortly via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-800 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-800 text-white"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-300 mb-2">
                        Number of Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-800 text-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-300 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                      placeholder="Any special requests or dietary restrictions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Reservation'}
                  </button>
                </form>
              )}
            </div>

            {/* Restaurant Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-8">
                Restaurant Information
              </h2>
              
              <div className="space-y-8">
                {/* Hours */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-4">
                    Hours of Operation
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span>11:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>12:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-4">
                    Location
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p>123 Fusion Street</p>
                    <p>Downtown District</p>
                    <p>City, State 12345</p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-4">
                    Contact
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p>
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

                                 {/* Policies */}
                 <div>
                   <h3 className="font-serif text-xl font-semibold text-white mb-4">
                     Reservation Policies
                   </h3>
                   <div className="space-y-3 text-sm text-gray-300">
                     <p>• Reservations are held for 15 minutes past the scheduled time</p>
                     <p>• Cancellations must be made at least 24 hours in advance</p>
                     <p>• Parties of 6 or more require a credit card guarantee</p>
                     <p>• 18% gratuity added for parties of 6 or more</p>
                   </div>
                 </div>

                 {/* Restaurant Atmosphere */}
                 <div className="mt-8">
                   <div className="rounded-lg overflow-hidden shadow-lg">
                     <img 
                       src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                       alt="Elegant restaurant dining atmosphere"
                       className="w-full h-48 object-cover"
                     />
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 