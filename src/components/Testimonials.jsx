const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kiranraj Singh',
      text: 'Outstanding app. Provided material for gs modules is pointed and easy to understand. I don\'t get bored with small modules as it is easy to complete. Affordable and reasonable, value for money app. Current affairs are very easy and simplified to understand with mains answer writing questions on important topics. Weekly reports and daily notifications keeps me updated and active.',
      rating: 5
    },
    {
      name: 'Priya Chauhan',
      text: 'Feels like a study buddy who actually understands what students need. So glad I found this app! 😊📚✨',
      rating: 5
    },
    {
      name: 'Preet Kapoor',
      text: 'Great app for UPSC prep! The MCQs are well-designed, cover all key topics, and come with clear explanations. Topic-wise practice helps strengthen weak areas. Clean UI and helpful performance tracking make it a solid tool for serious aspirants.',
      rating: 5
    },
    {
      name: 'Ria',
      text: 'The way it urges me to attempt questions daily to maintain streaks. I have been practicing regardless of being wrong. And attempting regardless has made me better in the topics that I used to be weak in and skip them because I was scared to make mistakes. The answer evaluation is also so quick and effective with the feedback mechanism. My favourite accountability partner ♥️',
      rating: 5
    },
    {
      name: 'Vidhi',
      text: 'Brilliant app for upsc aspirants, I am motivated to maintain streaks 😉 and upgraded my upsc journey. Superkalam is helping me with this. Thank you superkalam for making my journey a bit easier. 😎😄🤗',
      rating: 5
    },
    {
      name: 'Nainesh',
      text: 'Very Useful App you will definitely boost your UPSC Preparation with the help of this App I was using Superkalam Web But now This app makes Study more handy. Great Help of MCQ, PYQ practice and Mains Answer Evaluation within a seconds 🫡💯',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-indigo-50/30 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          India's Most Disciplined Community
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-indigo-50/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-200 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                <span className="ml-2 text-gray-600">{testimonial.rating}.0 out of 5</span>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

