function Subscribe() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white rounded-full"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Connected with Our Artisans</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
          Get updates on new crafts, artisan stories, and exclusive offers directly from Rwanda's weaving communities.
        </p>
        <div className="max-w-md mx-auto flex bg-white rounded-xl shadow-2xl overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-4 font-semibold hover:from-blue-800 hover:to-purple-800 transition-all duration-300">
            Subscribe
          </button>
        </div>
        <p className="text-blue-200 text-sm mt-4">
          No spam, just beautiful craftsmanship updates
        </p>
      </div>
    </section>
  );
}

export default Subscribe;