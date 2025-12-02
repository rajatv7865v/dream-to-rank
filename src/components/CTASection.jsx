const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Crack UPSC with your Personal AI Mentor
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          An AI-powered ecosystem to learn, practice, and evaluate with discipline
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button type="button" className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
            Start Now
          </button>
          <button type="button" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
            Download App
          </button>
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <div className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Get it on Google Play
            </div>
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <div className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Download on the App Store
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

