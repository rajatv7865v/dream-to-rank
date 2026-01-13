const Features = () => {
  const features = [
    {
      title: 'Instant Mains Evaluation',
      description: 'Get instant feedback on your handwritten answers',
      icon: '⚡'
    },
    {
      title: 'UPSC Syllabus coverage',
      description: 'Comprehensive coverage of entire UPSC syllabus',
      icon: '📚'
    },
    {
      title: '24x7 Doubt Resolution',
      description: 'Get your doubts resolved anytime, anywhere',
      icon: '💬'
    },
    {
      title: 'Current Affairs coverage',
      description: 'Stay updated with latest current affairs',
      icon: '📰'
    },
    {
      title: 'Practice - MCQs & PYQs',
      description: 'Practice with previous year questions and MCQs',
      icon: '✍️'
    },
    {
      title: 'Progress Reports',
      description: 'Track your progress with detailed analytics',
      icon: '📊'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          dreamtorank builds accountability
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          unlike ChatGPT or Coaching Institutes
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:-translate-y-1">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

