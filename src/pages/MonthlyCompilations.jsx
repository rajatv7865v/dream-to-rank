import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const compilations = [
  {
    month: 'November 2025',
    topics: [
      'COP30 & India’s Commitments',
      'New Education Policies Announced',
      'Significant Supreme Court Judgments',
      'WTO Conference Outcomes',
    ],
  },
  {
    month: 'October 2025',
    topics: [
      'Global Hunger Index Report & India’s Rank',
      'National River Water Agreement',
      'Election Commission Reforms',
      'UN General Assembly Highlights',
    ],
  },
  {
    month: 'September 2025',
    topics: [
      'Space Mission: Gaganyaan',
      'India-Africa Summit','Revised Health Policy',
      'Important Bills Passed in Parliament',
    ],
  },
];

const MonthlyCompilations = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-between">
    <Header />
    <main className="flex flex-col items-center px-4 py-16 flex-1 w-full">
      <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8">Monthly Compilations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {compilations.map((item, idx) => (
          <div key={idx} className="bg-white/90 border rounded-2xl shadow-xl p-8 flex flex-col">
            <div className="text-2xl font-bold text-gray-800 mb-2">{item.month}</div>
            <ul className="list-disc pl-5 mb-2 text-gray-700 space-y-1">
              {item.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
            <button className="mt-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-5 py-2 rounded-xl font-semibold shadow hover:shadow-xl transition hover:scale-105">Download PDF</button>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center max-w-xl">
        <span className="inline-block mb-2 text-xs font-medium text-indigo-600 bg-indigo-50 px-4 py-1 rounded-xl">Pro Tip</span>
        <blockquote className="italic text-indigo-900 text-lg">“Revise at the end of each month to master facts and develop perspective for Mains.”</blockquote>
      </div>
    </main>
    <Footer />
  </div>
);

export default MonthlyCompilations;
