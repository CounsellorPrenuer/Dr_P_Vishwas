'use client';

import React, { useState } from 'react';

const Phone = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Mail = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPin = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function ContactUs({ contactData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'Career Counselling & Psychometric Testing',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate lead submission or API call
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        purpose: 'Career Counselling & Psychometric Testing',
        message: ''
      });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm bg-orange-100 px-4 py-1.5 rounded-full inline-block mb-4">Start Today</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-serif">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form Side */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Send Us a Message</h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-2xl text-center font-semibold border border-green-200 transition-all transform scale-100 duration-300">
                Thank you! We&apos;ve received your query and will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50"
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50"
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Contact Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50"
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="purpose" className="block text-sm font-semibold text-gray-700 mb-2">Purpose of Inquiry</label>
                  <select 
                    id="purpose" 
                    name="purpose" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50"
                    value={formData.purpose}
                    onChange={handleInputChange}
                  >
                    <option value="Career Counselling & Psychometric Testing">Psychometric Testing & Career Counselling</option>
                    <option value="Mentoria Program">Mentoria Package</option>
                    <option value="Customizable Plan">Customisable Plan</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50 min-h-[120px] resize-none"
                    placeholder="Tell us more about what you're looking for..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button 
                  type="submit" 
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all transform ${loading ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-200 hover:-translate-y-0.5'}`} 
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="lg:col-span-2">
            <div className="bg-orange-50 rounded-3xl p-8 shadow-sm border border-orange-100 h-full flex flex-col justify-center">
              <h4 className="text-xl font-bold text-gray-900 mb-8 font-serif">Get in Touch Directly</h4>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full text-orange-600 shadow-sm mr-5 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold mb-1">Phone / WhatsApp</strong>
                    <span className="text-gray-600">{contactData?.phone || '+91 9822870474'}</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full text-orange-600 shadow-sm mr-5 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold mb-1">Email Address</strong>
                    <span className="text-gray-600">{contactData?.email || 'manikj61@gmail.com'}</span>
                  </div>
                </div>

                {(contactData?.location || true) && (
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full text-orange-600 shadow-sm mr-5 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold mb-1">Office Location</strong>
                      <span className="text-gray-600 leading-relaxed">{contactData?.location || 'Pune, India'}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
