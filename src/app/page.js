import { client } from '../../sanity/lib/client'

import Packages from './Packages'
import ContactUs from './ContactUs'

export const revalidate = 60 // revalidate every 60 seconds

export default async function Home() {
  const brand = await client.fetch(`*[_type == "brand"][0]`) || {};
  const services = await client.fetch(`*[_type == "service"]`) || [];
  const founder = await client.fetch(`*[_type == "founder"][0]`) || {};
  const contact = await client.fetch(`*[_type == "contact"][0]`) || {};
  const gallery = await client.fetch(`*[_type == "gallery"]`) || [];
  
  const { urlFor } = await import('../../sanity/lib/image');

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl text-orange-900 tracking-tight flex items-center gap-3">
            {brand.logo ? (
              <img src={urlFor(brand.logo).width(200).url()} alt="Logo" className="h-16 w-auto object-contain" />
            ) : (
              brand.name || 'Counselling and Mentoring'
            )}
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">Services</a>
            <a href="#packages" className="text-gray-600 hover:text-orange-600 transition-colors">Packages</a>
            <a href="#gallery" className="text-gray-600 hover:text-orange-600 transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
            {brand.tagline || 'We have the SOLUTION'}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {brand.about}
          </p>
          <div className="mt-10">
            <a href="#contact" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-orange-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="w-64 h-64 mx-auto md:w-96 md:h-96 bg-gray-200 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center text-gray-500 relative">
              {founder.photo ? (
                <img src={urlFor(founder.photo).width(800).url()} alt={founder.fullName || 'Founder'} className="w-full h-full object-cover" />
              ) : (
                <span>[Founder Photo Placeholder]</span>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet {founder.fullName || 'Dr P Vishwas'}</h2>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {founder.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-orange-50 border border-orange-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm font-medium text-orange-600 flex justify-between">
                  <span>For: {service.targetAudience}</span>
                  <span className="bg-white px-3 py-1 rounded-full border border-orange-200">{service.mode}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Packages phone={contact.phone} />

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((item, idx) => (
              item.image ? (
                <div key={item._id || idx} className="bg-gray-200 h-64 rounded-xl shadow overflow-hidden relative group">
                  <img src={urlFor(item.image).width(600).url()} alt={item.caption || 'Gallery Image'} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">{item.caption}</p>
                    </div>
                  )}
                </div>
              ) : null
            ))}
            {gallery.length === 0 && (
              <>
                <div className="bg-gray-200 h-64 rounded-xl shadow flex items-center justify-center text-gray-500">[Gallery Photo Placeholder]</div>
                <div className="bg-gray-200 h-64 rounded-xl shadow flex items-center justify-center text-gray-500">[Gallery Photo Placeholder]</div>
                <div className="bg-gray-200 h-64 rounded-xl shadow flex items-center justify-center text-gray-500">[Gallery Photo Placeholder]</div>
              </>
            )}
          </div>
        </div>
      </section>

      <ContactUs contactData={contact} />

      <footer className="bg-gray-900 text-gray-300 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} {brand.name || 'Counselling and Mentoring'}. All rights reserved.</p>
      </footer>
    </main>
  );
}
