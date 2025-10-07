import React, { useState } from 'react';
import CraftCard from '../components/CraftCard';
import CraftModal from '../components/CraftModal';
import { crafts, cooperatives } from '../utils/constants';
import { Link } from 'react-router-dom';

function Home() {
  const [selectedCraft, setSelectedCraft] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCraftClick = (craft) => {
    setSelectedCraft(craft);
    setIsModalOpen(true);
  };

  return (
    <div className="font-playfair min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Oculus
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Where Rwandan tradition meets contemporary design. Discover handcrafted beauty woven with heritage and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to='/artisans' className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              Meet Artisans
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl md:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-2">{crafts.length}+</div>
              <div className="text-gray-600 dark:text-gray-300">Unique Crafts</div>
            </div>
            <div className="p-6">
              <div className="text-5xl md:text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2">{Object.keys(cooperatives).length}</div>
              <div className="text-gray-600 dark:text-gray-300">Cooperatives</div>
            </div>
            <div className="p-6">
              <div className="text-5xl md:text-4xl font-bold text-teal-600 dark:text-teal-300 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Skilled Artisans</div>
            </div>
            <div className="p-6">
              <div className="text-5xl md:text-4xl font-bold text-orange-600 dark:text-orange-300 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Handmade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featuring Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Crafts</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each piece tells a story of Rwandan heritage, meticulously woven by skilled artisans from our partner cooperatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {crafts.map((craft, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CraftCard 
                  craft={craft} 
                  onClick={() => handleCraftClick(craft)} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperatives Showcase */}
      <section className="py-10 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Cooperatives</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Partnering with talented artisan communities across Rwanda to preserve traditional craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(cooperatives).map(([key, cooperative]) => (
              <div 
                key={key}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    {cooperative.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cooperative.name}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {cooperative.location}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {cooperative.description}
                    </p>
                    <a 
                      href={`https://wa.me/${cooperative.contact.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 font-semibold transition-colors"
                    >
                      Contact Cooperative
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Modal */}
      <CraftModal 
        craft={selectedCraft}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </div>
  );
}

export default Home;