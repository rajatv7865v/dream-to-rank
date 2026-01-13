const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Affordable Pricing
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 rounded-2xl shadow-2xl p-8 text-center border border-blue-100">
            <div className="mb-6">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                BEST VALUE
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">dreamtorank Premium</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-blue-600">₹5,699</span>
              <span className="text-gray-600 ml-2">till Mains</span>
            </div>
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unlimited MCQs & PYQs</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unlimited Mains Answer Evaluation</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>24x7 Doubt Resolution</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Complete UPSC Syllabus Coverage</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Current Affairs Updates</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Progress Reports & Analytics</span>
              </li>
            </ul>
            <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              Get Started Now
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Compare: Coaching Institutes ₹1L+ per year | ChatGPT Pro ₹20K+ per year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

