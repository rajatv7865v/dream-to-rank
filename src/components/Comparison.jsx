const Comparison = () => {
  const comparisonData = [
    {
      feature: 'Practice - MCQs & PYQs',
      dreamToRank: 'UNLIMITED',
      coaching: 'LIMITED',
      chatgpt: 'Not UPSC standard'
    },
    {
      feature: 'Instant Mains Evaluation',
      dreamToRank: 'UNLIMITED',
      coaching: '₹1L+ per year',
      chatgpt: 'Not UPSC standard'
    },
    {
      feature: 'UPSC Syllabus coverage',
      dreamToRank: 'UNLIMITED',
      coaching: 'Not UPSC standard',
      chatgpt: 'Not UPSC standard'
    },
    {
      feature: '24x7 Doubt Resolution',
      dreamToRank: 'UNLIMITED',
      coaching: 'Not UPSC standard',
      chatgpt: 'Not UPSC standard'
    },
    {
      feature: 'Current Affairs coverage',
      dreamToRank: 'UNLIMITED',
      coaching: 'Not UPSC standard',
      chatgpt: 'Not UPSC standard'
    },
    {
      feature: 'Progress Reports',
      dreamToRank: 'UNLIMITED',
      coaching: 'Not UPSC standard',
      chatgpt: 'Not UPSC standard'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose dreamtorank?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-xl border border-blue-100">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-4 text-left">Features</th>
                <th className="px-6 py-4 text-center">dreamtorank</th>
                <th className="px-6 py-4 text-center">Coaching Institutes</th>
                <th className="px-6 py-4 text-center">ChatGPT</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-blue-50/50' : 'bg-white'}>
                  <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                      {row.dreamToRank}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">{row.coaching}</td>
                  <td className="px-6 py-4 text-center text-gray-600">{row.chatgpt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">dreamtorank:</span> ₹5,699 till Mains
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">ChatGPT Pro:</span> ₹20K+ per year
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

