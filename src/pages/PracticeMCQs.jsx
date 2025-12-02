import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const mcqs = [
  {
    question: 'Which organization releases the Global Hunger Index?',
    options: ['UNICEF', 'WTO', 'IFPRI', 'World Bank'],
    answer: 2,
    explanation: 'The International Food Policy Research Institute (IFPRI) releases the Global Hunger Index.',
  },
  {
    question: 'India’s Gaganyaan Mission is associated with which field?',
    options: ['Nuclear Power', 'Space Exploration', 'E-Governance', 'Artificial Intelligence'],
    answer: 1,
    explanation: 'Gaganyaan is India’s first crewed space mission by ISRO.',
  },
  {
    question: 'What is the objective of the Pradhan Mantri Ujjwala Yojana?',
    options: ['Urban employment','Rural electrification','LPG connections to women','Internet access in schools'],
    answer: 2,
    explanation: 'The scheme targets providing clean LPG connections to women below the poverty line.',
  },
];

const PracticeMCQs = () => {
  const [selected, setSelected] = useState({});

  const handleSelect = (qIdx, oIdx) => {
    setSelected(s => ({ ...s, [qIdx]: oIdx }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-between">
      <Header />
      <main className="flex flex-col items-center px-4 py-16 flex-1 w-full">
        <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8">Practice Current Affairs MCQs</h1>
        <div className="space-y-10 w-full max-w-3xl">
          {mcqs.map((mcq, idx) => (
            <div key={idx} className="bg-white/90 border rounded-2xl shadow-lg p-6">
              <div className="text-lg font-semibold mb-3 text-indigo-900">{mcq.question}</div>
              <div className="space-y-2 mb-2">
                {mcq.options.map((opt, oIdx) => (
                  <label key={oIdx} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name={`mcq-${idx}`}
                      checked={selected[idx] === oIdx}
                      onChange={() => handleSelect(idx, oIdx)}
                      className="form-radio text-indigo-600 mr-3"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
              {selected[idx] !== undefined && (
                <div className={`mt-2 p-3 rounded-lg ${selected[idx] === mcq.answer ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}> 
                  {selected[idx] === mcq.answer ? 'Correct!' : 'Incorrect!'} <span className="ml-2 text-sm text-gray-600">{mcq.explanation}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center max-w-xl">
          <span className="inline-block mb-2 text-xs font-medium text-indigo-600 bg-indigo-50 px-4 py-1 rounded-xl">Self-Test Reminder</span>
          <blockquote className="italic text-indigo-900 text-lg">“Practicing MCQs daily is the most effective way to master current affairs for Prelims.”</blockquote>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeMCQs;
