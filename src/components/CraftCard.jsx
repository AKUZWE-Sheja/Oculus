import React from 'react';
import { cooperatives } from '../utils/constants';

function CraftCard({ craft, onClick }) {
  const cooperative = cooperatives[craft.prefix];
  
  return (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-700"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={craft.src} 
          alt={craft.filename} 
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
            {cooperative.location}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {cooperative.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {cooperative.description}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-600 dark:text-blue-300 font-semibold">
            Contact Artisan
          </span>
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
            <span className="text-blue-500 group-hover:text-white transition-colors duration-300">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CraftCard;