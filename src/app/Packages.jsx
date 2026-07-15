'use client';

import React, { useState } from 'react';

const Check = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Packages({ phone }) {
  const [activeCategory, setActiveCategory] = useState('mentoria');
  const [activeSubgroup, setActiveSubgroup] = useState('8-9 students');

  const packages = [
    {
      "_id": "plan-pkg-1",
      "title": "Discover",
      "price": 5500,
      "category": "mentoria",
      "subgroup": "8-9 students",
      "isPopular": false,
      "features": [
        "Psychometric assessment to measure your interests",
        "1 career counselling session with Mentoria’s expert career coaches",
        "Lifetime access to Knowledge Gateway",
        "Invites to live webinars by industry experts"
      ]
    },
    {
      "_id": "plan-pkg-2",
      "title": "Discover Plus+",
      "price": 15000,
      "category": "mentoria",
      "subgroup": "8-9 students",
      "isPopular": true,
      "features": [
        "Psychometric assessments to measure your interests, personality and abilities",
        "8 career counselling sessions (1 every year) with Mentoria’s expert career coaches until graduation",
        "Lifetime access to Knowledge Gateway",
        "Invites to live webinars by industry experts",
        "Customised reports after each session with education pathways",
        "Guidance on studying abroad",
        "CV building during internships/graduation"
      ]
    },
    {
      "_id": "plan-pkg-3",
      "title": "Achieve Online",
      "price": 5999,
      "category": "mentoria",
      "subgroup": "10-12 students",
      "isPopular": false,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "1 career counselling session ",
        "Lifetime access to Knowledge Gateway",
        "Pre-recorded webinars by industry experts"
      ]
    },
    {
      "_id": "plan-pkg-4",
      "title": "Achieve Plus+",
      "price": 10599,
      "category": "mentoria",
      "subgroup": "10-12 students",
      "isPopular": true,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "4 career counselling sessions",
        "Lifetime access to Knowledge Gateway",
        "Attend live webinars by industry experts",
        "Customised reports after each session with education pathways",
        "Guidance on studying abroad",
        "CV reviews during internships/graduation"
      ]
    },
    {
      "_id": "plan-pkg-5",
      "title": "Ascend Online",
      "price": 6499,
      "category": "mentoria",
      "subgroup": "graduates",
      "isPopular": false,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "1 career counselling session",
        "Lifetime access to Knowledge Gateway",
        "Pre-recorded webinars by industry experts"
      ]
    },
    {
      "_id": "plan-pkg-6",
      "title": "Ascend Plus+",
      "price": 10599,
      "category": "mentoria",
      "subgroup": "graduates",
      "isPopular": true,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "3 career counselling sessions",
        "Lifetime access to Knowledge Gateway",
        "Attend live webinars by industry experts",
        "Customised reports after each session with information on certificate/online courses",
        "Guidance on studying abroad",
        "CV reviews for job application"
      ]
    },
    {
      "_id": "plan-mp-3",
      "title": "Ascend Online",
      "price": 6499,
      "category": "mentoria",
      "subgroup": "working professionals",
      "isPopular": false,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "1 career counselling session ",
        "Lifetime access to Knowledge Gateway",
        "Pre-recorded webinars by industry experts"
      ]
    },
    {
      "_id": "plan-mp-2",
      "title": "Ascend Plus+",
      "price": 10599,
      "category": "mentoria",
      "subgroup": "working professionals",
      "isPopular": true,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "3 career counselling sessions",
        "Lifetime access to Knowledge Gateway",
        "Attend live webinars by industry experts",
        "Customised reports after each session with information on certificate/online courses",
        "Guidance on studying abroad",
        "CV reviews for job application"
      ]
    },
    {
      "_id": "plan-career-report",
      "title": "Career Report",
      "price": 1500,
      "category": "mentoria-custom",
      "description": "Get a detailed report of your psychometric assessment for a scientific analysis of your interests. Find out where your interests lie and which future paths you can potentially consider."
    },
    {
      "_id": "plan-career-report-counselling",
      "title": "Career Report + Career Counselling",
      "price": 3000,
      "category": "mentoria-custom",
      "description": "Connect with India's top career coaches to analyse your psychometric report and shortlist the top three career paths you're most likely to enjoy and excel at."
    },
    {
      "_id": "plan-knowledge-gateway",
      "title": "Knowledge Gateway + Career Helpline Access",
      "price": 100,
      "category": "mentoria-custom",
      "duration": "1 Month",
      "description": "Unlock holistic information on your career paths and get direct access to Mentoria's experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love."
    },
    {
      "_id": "plan-one-to-one-session",
      "title": "One-to-One Session with a Career Expert",
      "price": 3500,
      "category": "mentoria-custom",
      "duration": "1 Hour",
      "description": "Resolve your career queries and glimpse into your future life with India's top career coaches."
    }
  ];

  const mentoriaPackages = packages.filter(pkg => pkg.category === 'mentoria');
  const customisablePackages = packages.filter(pkg => pkg.category === 'mentoria-custom');
  const subgroups = ['8-9 students', '10-12 students', 'graduates', 'working professionals'];

  return (
    <section id="packages" className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm bg-orange-100 px-4 py-1.5 rounded-full inline-block mb-4">Plans & Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-serif">Packages from Mentoria</h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-gray-100 mb-10 w-full max-w-md">
            <button 
              className={`flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-all ${activeCategory === 'mentoria' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-600 hover:text-orange-600'}`}
              onClick={() => setActiveCategory('mentoria')}
            >
              Mentoria Plans
            </button>
            <button 
              className={`flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-all ${activeCategory === 'mentoria-custom' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-600 hover:text-orange-600'}`}
              onClick={() => setActiveCategory('mentoria-custom')}
            >
              Customisable Plans
            </button>
          </div>

          {activeCategory === 'mentoria' && (
            <div className="flex flex-wrap justify-center gap-3 w-full mb-12">
              {subgroups.map(sub => (
                <button
                  key={sub}
                  className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${activeSubgroup === sub ? 'bg-orange-100 text-orange-800 border-2 border-orange-500' : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-300'}`}
                  onClick={() => setActiveSubgroup(sub)}
                  style={{ textTransform: 'capitalize' }}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8 w-full max-w-5xl">
            {activeCategory === 'mentoria' ? (
              mentoriaPackages
                .filter(pkg => pkg.subgroup === activeSubgroup)
                .map(pkg => (
                  <div key={pkg._id} className={`bg-white rounded-3xl p-8 border ${pkg.isPopular ? 'border-orange-500 shadow-xl shadow-orange-100 relative' : 'border-gray-100 shadow-lg'}`}>
                    {pkg.isPopular && <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl tracking-wide uppercase shadow-sm">Most Popular</div>}
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                    <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wide">Complete Program</p>
                    
                    <div className="flex items-end gap-2 mb-8">
                      <span className="text-4xl font-extrabold text-orange-600">₹{pkg.price}</span>
                      <span className="text-gray-500 font-medium mb-1">/ total</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features && pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <Check size={20} className="text-orange-500 mr-3 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={`https://wa.me/${phone}?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package`} target="_blank" rel="noreferrer" className={`block text-center w-full py-4 rounded-2xl font-bold transition-all ${pkg.isPopular ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-0.5' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'}`}>
                      Enroll Now
                    </a>
                  </div>
                ))
            ) : (
              customisablePackages.map(pkg => (
                <div key={pkg._id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                    {pkg.duration && <span className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full mb-4">{pkg.duration}</span>}
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-extrabold text-gray-900">₹{pkg.price}</span>
                      <span className="text-gray-500 font-medium mb-1">{pkg.duration ? '/ session' : '/ service'}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {pkg.description}
                  </p>

                  <a href={`https://wa.me/${phone}?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20customisable%20package`} target="_blank" rel="noreferrer" className="block text-center w-full py-3.5 rounded-2xl font-bold bg-gray-50 text-gray-900 hover:bg-gray-100 transition-colors border border-gray-200">
                    Inquire Now
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
