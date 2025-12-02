import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const dailyAffairs = [
  {
    date: '1 December 2025',
    title: 'Supreme Court Issues Landmark Ruling on Environmental Protection',
    points: [
      'The Supreme Court of India delivered a precedent-setting judgment reinforcing strict implementation of environmental impact assessment norms.',
      'The court directed all states to ensure public participation and transparency in all new project clearances.',
    ],
  },
  {
    date: '1 December 2025',
    title: 'Government Launches New Scheme for Women Entrepreneurs',
    points: [
      'Ministry of MSME announced a new initiative supporting women-led startups with low-interest loans and mentorship.',
      'The move is expected to increase female participation in the formal economy by 10% over the next 5 years.',
    ],
  },
  {
    date: '30 November 2025',
    title: 'India-Japan Climate Partnership Signed',
    points: [
      'India and Japan will cooperate on technology sharing, climate financing and joint development of green infrastructure.',
      'Focus sectors include renewable energy, smart grids, and disaster resilience.',
    ],
  },
];

const DailyCurrentAffairs = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-between">
    <Header />
    <main className="flex flex-col items-center px-4 py-16 flex-1 w-full">
      <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8">Daily Current Affairs</h1>
      <div className="space-y-8 w-full max-w-3xl">
        {dailyAffairs.map((item, idx) => (
          <div key={idx} className="bg-white/80 border rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <span className="text-sm text-indigo-600 font-semibold">{item.date}</span>
              <span className="font-bold text-lg text-gray-900 mt-2 md:mt-0">{item.title}</span>
            </div>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center max-w-xl">
        <span className="inline-block mb-2 text-xs font-medium text-indigo-600 bg-indigo-50 px-4 py-1 rounded-xl">Prep Motivation</span>
        <blockquote className="italic text-indigo-900 text-lg">“Small, steady progress every day leads to milestone achievements in UPSC.”</blockquote>
      </div>
    </main>
    <Footer />
  </div>
);

export default DailyCurrentAffairs;
