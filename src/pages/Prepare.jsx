import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const tools = [
  {
    title: 'Daily Current Affairs',
    description: 'Stay updated with daily curated news and analysis relevant for UPSC. Essential for mains and prelims GS.',
    action: {
      label: 'Read Today’s Affairs',
      url: '/daily-current-affairs',
    },
    gradient: 'from-blue-200 to-indigo-100',
  },
  {
    title: 'Monthly Compilations',
    description: 'Download PDF compilations of each month’s current affairs, sorted topic-wise for efficient revision.',
    action: {
      label: 'View Compilations',
      url: '/monthly-compilations',
    },
    gradient: 'from-purple-200 to-pink-100',
  },
  {
    title: 'Practice MCQs',
    description: 'Test your retention with daily and monthly MCQ quizzes on current events—perfect for quick assessment.',
    action: {
      label: 'Start Practice',
      url: '/practice-mcqs',
    },
    gradient: 'from-green-200 to-blue-100',
  },
];

const Prepare = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-between">
    <Header />
    <main className="flex flex-col items-center justify-center px-4 py-16 flex-1 w-full">
      <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-2">Current Affairs & UPSC Preparation</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">Boost your UPSC journey with daily updates, curated resources, and active practice. Use the resources below created specifically for Dream to Rank users.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-8">
        {tools.map((tool, i) => (
          <div key={i} className={`bg-gradient-to-br ${tool.gradient} rounded-3xl shadow-xl p-8 flex flex-col items-start backdrop-blur border hover:shadow-2xl transition duration-300`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{tool.title}</h2>
            <p className="text-gray-700 flex-1 mb-5">{tool.description}</p>
            <Link to={tool.action.url}
              className="mt-auto inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {tool.action.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center max-w-xl">
        <span className="inline-block mb-2 text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-1 rounded-xl">UPSC Success Tip</span>
        <blockquote className="italic text-indigo-900 text-lg">“Consistent revision and daily current affairs make the difference between average and top ranks. Make it a daily habit!”</blockquote>
      </div>
    </main>
    <Footer />
  </div>
);

export default Prepare;
