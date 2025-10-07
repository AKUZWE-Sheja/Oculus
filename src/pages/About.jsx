import React from 'react';
import { artisans, cooperatives } from '../utils/constants';

function About() {
  return (
    <div className="font-playfair min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Weaving traditions into tomorrow, connecting Rwanda's finest artisans with the world
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Oculus is dedicated to connecting Rwanda's finest artisans with global audiences. Our mission is to promote 
                  the artistry of local weavers, showcasing their woven crafts that blend tradition with modern design.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We aim to preserve cultural heritage while empowering artisans through sustainable craftsmanship, creating 
                  economic opportunities that honor traditional skills while embracing contemporary markets.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-300">Handmade</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-300 mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-300">Fair Trade</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  To create a world where traditional craftsmanship thrives alongside modern innovation, where every artisan 
                  can sustain their livelihood while preserving cultural heritage for future generations.
                </p>
                <div className="mt-6 flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Cultural Preservation
                </div>
                <div className="mt-3 flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Economic Empowerment
                </div>
                <div className="mt-3 flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Sustainable Innovation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Testimonials */}
      <section className="py-10 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Voices from Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Community</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear directly from the talented artisans who bring these beautiful crafts to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan, index) => {
              const cooperative = cooperatives[artisan.prefix];
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <img 
                        src={artisan.src} 
                        alt={artisan.filename} 
                        className="w-16 h-16 object-cover rounded-2xl shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Artisan</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-300">{cooperative.name}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6">
                    "Joining {cooperative.name} has transformed my life, allowing me to share my craft with the world while preserving our cultural heritage."
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {cooperative.location}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Values</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cultural Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We honor and preserve traditional Rwandan weaving techniques while adapting to contemporary design sensibilities.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Community First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our artisans receive fair compensation and support, ensuring sustainable livelihoods for their families and communities.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We connect Rwandan craftsmanship with international markets, creating cultural exchange and economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;