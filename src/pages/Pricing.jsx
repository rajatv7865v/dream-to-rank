import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/mo',
    features: [
      'Access to PYQs',
      'Basic Study Materials',
      'Community Support',
      'Limited Mock Tests',
    ],
    featured: false,
    cta: 'Get Started',
    highlightColor: 'from-blue-100 to-blue-200',
    btnColor: 'bg-blue-600',
  },
  {
    name: 'Pro',
    price: '₹299',
    period: '/mo',
    features: [
      'All Free Features',
      'Unlimited Mock Tests',
      'Rank Prediction',
      'Doubt Resolution',
      'Download Notes PDF',
    ],
    featured: true,
    cta: 'Start Pro',
    highlightColor: 'from-indigo-200 to-purple-200',
    btnColor: 'bg-indigo-600',
  },
  {
    name: 'Premium',
    price: '₹599',
    period: '/mo',
    features: [
      'All Pro Features',
      '1-on-1 Mentoring',
      'Personalized Study Plans',
      'Early Access to New Features',
      'Priority Support',
    ],
    featured: false,
    cta: 'Go Premium',
    highlightColor: 'from-purple-100 to-pink-100',
    btnColor: 'bg-purple-600',
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-between">
      <Header />
      <main className="flex flex-col items-center justify-center px-4 py-16 flex-1">
        <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-2">Choose Your Plan</h1>
        <p className="text-lg text-gray-600 mb-10">Affordable options to help every student succeed.</p>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl shadow-xl ${
                plan.featured ? 'ring-2 ring-indigo-500 scale-105 z-10' : 'ring-1 ring-gray-200'
              } bg-gradient-to-br ${plan.highlightColor} p-8 flex-1 max-w-sm min-w-[260px] transition-transform duration-300`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">Most Popular</div>
              )}
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{plan.name}</h2>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 ">
                    <span className="inline-flex w-5 h-5 rounded-full bg-green-100 text-green-600 justify-center items-center">
                      <svg fill="none" viewBox="0 0 16 16" className="w-3 h-3"><path stroke="currentColor" strokeWidth="2" d="M4 8l3 3l5-5"/></svg>
                    </span>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full ${plan.btnColor} text-white text-lg font-semibold rounded-xl py-2.5 transition hover:scale-105 shadow-lg hover:shadow-xl mb-2`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
