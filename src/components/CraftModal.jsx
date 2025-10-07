import React from 'react';
import { Dialog } from '@headlessui/react';
import { cooperatives } from '../utils/constants';

function CraftModal({ craft, isOpen, setIsOpen }) {
  if (!craft) return null;

  const cooperative = cooperatives[craft.prefix];
  
  // Add error handling in case cooperative data is missing
  if (!cooperative) {
    return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
              Error
            </Dialog.Title>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Cooperative information not found.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    );
  }

  const { name, location, contact, description } = cooperative;

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Image Section */}
          <div className="relative">
            <img 
              src={craft.src} 
              alt={craft.filename} 
              className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ×
            </button>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {name}
            </Dialog.Title>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
                {location}
              </span>
            </div>

            <Dialog.Description className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {description}
            </Dialog.Description>

            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">Contact:</strong> {contact}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
              <a
                href={`https://wa.me/${contact.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center flex items-center justify-center space-x-2"
              >
                <span>Contact via WhatsApp</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.189-3.553-8.449"/>
                </svg>
              </a>
              
              <button
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default CraftModal;