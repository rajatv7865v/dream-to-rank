const FeatureShowcase = () => {
  const features = [
    {
      title: 'Mains Evaluator',
      description: 'Evaluate your Mains answers with UPSC Level Feedback within 60s.',
      icon: '📝',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'UPSC GPT',
      description: 'AI trained on UPSC material to pull PYQs, summarize current affairs, and answer smartly.',
      icon: '🤖',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Test Generator',
      description: 'AI-powered test generator to create personalized mock tests based on your preparation level.',
      icon: '📊',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Current Affairs',
      description: 'Read all the important UPSC relevant current affairs at one place only.',
      icon: '📰',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          See dreamtorank in Action
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Experience the power of AI-driven UPSC preparation with our comprehensive suite of tools
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;

