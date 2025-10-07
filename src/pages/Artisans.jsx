import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { crafts, cooperatives } from '../utils/constants';

function Artisans({ setSelectedCraft }) {
  const [activeCooperative, setActiveCooperative] = useState(Object.keys(cooperatives)[0]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-white/50 rounded-full transition-all duration-300"></div>
    ),
    appendDots: dots => (
      <div className="bg-black/30 rounded-full p-4">
        <ul className="m-0 flex space-x-2">{dots}</ul>
      </div>
    ),
  };

  const cooperativeEntries = Object.entries(cooperatives);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Master Artisans
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Meet the skilled hands and creative minds behind Rwanda's most exquisite woven crafts
          </p>
        </div>
      </section>

      {/* Cooperative Navigation */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {cooperativeEntries.map(([prefix, cooperative]) => (
              <button
                key={prefix}
                onClick={() => setActiveCooperative(prefix)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCooperative === prefix
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {cooperative.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperative Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {cooperativeEntries.map(([prefix, cooperative]) => (
            <div
              key={prefix}
              className={`transition-all duration-500 ${
                activeCooperative === prefix ? 'block animate-fade-in' : 'hidden'
              }`}
            >
              {/* Cooperative Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {cooperative.name}
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {cooperative.location}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {cooperative.contact}
                  </div>
                </div>
              </div>

              {/* Craft Carousel */}
              <div className="mb-12">
                <Slider {...sliderSettings}>
                  {crafts
                    .filter((craft) => craft.prefix === prefix)
                    .map((craft, index) => (
                      <div key={index} className="px-4">
                        <div 
                          className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500"
                          onClick={() => setSelectedCraft(craft)}
                        >
                          <img 
                            src={craft.src} 
                            alt={craft.filename} 
                            className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <h4 className="text-2xl font-bold mb-2">View Craft Details</h4>
                              <p className="text-blue-200">Click to explore this beautiful creation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>

              {/* Cooperative Details */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-600">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    About the Cooperative
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {cooperative.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
                      <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                        <p className="text-gray-600 dark:text-gray-300">{cooperative.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-green-50 dark:bg-green-900/30 rounded-2xl">
                      <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Contact</h4>
                        <p className="text-gray-600 dark:text-gray-300">{cooperative.contact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={`https://wa.me/${cooperative.contact.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
                      </svg>
                      Contact via WhatsApp
                    </a>
                    <button className="border-2 border-blue-500 text-blue-500 dark:text-blue-300 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                      View All Crafts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Artisans;