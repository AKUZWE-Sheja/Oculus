import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto pt-8 pb-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-300">Contact Us</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center max-w-md mx-auto">
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          <strong>Email:</strong> info@oculus.rw<br />
          <strong>Phone:</strong> +250788123456
        </p>
      </div>
    </div>
  );
}

export default Contact;