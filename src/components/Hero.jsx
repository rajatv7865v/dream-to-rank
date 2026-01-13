const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image - Students preparing for UPSC/Civil Services */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        {/* Overlay for better text readability - lighter to show students more */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-900/50 to-purple-900/60"></div>
      </div>
      
      {/* Satya Mev Jayate (State Emblem) */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 md:top-12">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/512px-Emblem_of_India.svg.png" 
          alt="State Emblem of India - Satya Mev Jayate" 
          className="w-16 h-16 md:w-20 md:h-20 opacity-90 drop-shadow-2xl"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Everything you need for UPSC Preparation
          </h1>
          <p className="text-xl text-blue-50 mb-8 drop-shadow-md">
            Your Personal AI Mentor that teaches, instantly evaluates Handwritten Answers & builds Daily Discipline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              Start Now
            </button>
            <button type="button" className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl border-2 border-blue-300 hover:border-blue-400 hover:-translate-y-0.5">
              Download App
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-blue-100">
            <span>Backed by</span>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-white">Y Combinator</span>
              <span className="font-semibold text-white">Google for Startups</span>
            </div>
          </div>
          <div className="mt-16 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-white/40 hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2 text-sm md:text-base font-medium uppercase tracking-wide">In last 30 days, students practiced</p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-16 mb-6">
              {/* MCQs Stat */}
              <div className="text-center flex-1 max-w-xs group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl mb-2">📝</div>
                  </div>
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight">
                  +10K
                </div>
                <div className="text-lg md:text-xl font-bold text-gray-800 mb-2">MCQs</div>
                <div className="text-gray-600 text-sm md:text-base">Practice Questions</div>
              </div>
              
              {/* Divider */}
              <div className="hidden sm:flex flex-col items-center gap-2">
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-indigo-300 to-transparent"></div>
              </div>
              
              {/* Mains Answers Stat */}
              <div className="text-center flex-1 max-w-xs group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-indigo-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl mb-2">✍️</div>
                  </div>
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 leading-tight">
                  +5K
                </div>
                <div className="text-lg md:text-xl font-bold text-gray-800 mb-2">Mains Answers</div>
                <div className="text-gray-600 text-sm md:text-base">Evaluated</div>
              </div>
            </div>
            
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-semibold text-base md:text-lg">
                on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-xl md:text-2xl">dreamtorank</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

