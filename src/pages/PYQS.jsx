import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const pyqs = [
  {
    year: 2024,
    type: 'Prelims',
    subject: 'Polity',
    question: 'Which of the following are fundamental duties under the Indian Constitution?\n1. To uphold and protect the sovereignty, unity and integrity of India.\n2. To provide opportunities for education to children from 6 to 14 years.\nSelect the correct answer using the code below: \nA) Only 1\nB) Only 2\nC) Both 1 and 2\nD) Neither 1 nor 2',
    answer: 'C) Both 1 and 2',
  },
  {
    year: 2023,
    type: 'Prelims',
    subject: 'Environment',
    question: 'With reference to the “New Development Bank”, consider the following statements:\n1. It has been established by ASEAN countries.\n2. India is one of the founding members.\nWhich of the statements is/are correct?\nA) 1 only\nB) 2 only\nC) Both 1 and 2\nD) Neither 1 nor 2',
    answer: 'B) 2 only',
  },
  {
    year: 2022,
    type: 'Mains',
    subject: 'GS II',
    question: 'Discuss the role of cooperative federalism in transforming India’s center-state relations, with relevant examples from recent years.',
    answer: 'Model answer: Cooperative federalism has encouraged collaboration between the Center and States. For instance, GST Council’s consensus-based decisions, and recent pandemic management strategies, have strengthened this relationship. However, challenges remain such as disagreements in resource sharing and policy implementation.'
  },
  {
    year: 2021,
    type: 'Mains',
    subject: 'GS III',
    question: 'Explain the significance of Pradhan Mantri Ujjwala Yojana in promoting social inclusion and environmental protection in rural India.',
    answer: 'Model answer: The scheme has empowered women by improving access to clean cooking fuel, reducing health hazards, and curbing deforestation. It also helps mitigate indoor air pollution and supports SDG targets.'
  },
];

const PYQS = () => {
  const [open, setOpen] = useState(null);
  const handleOpen = idx => setOpen(open === idx ? null : idx);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-between">
      <Header />
      <main className="flex flex-col items-center px-4 py-16 flex-1 w-full">
        <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-3">Previous Year Questions (PYQs)</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl text-center">Practice with real past UPSC questions to sharpen exam skills. Below are actual questions from recent years, designed for both Prelims and Mains, along with model answers.</p>
        <div className="w-full max-w-3xl space-y-5">
          {pyqs.map((q, idx) => (
            <div key={idx} className="bg-white/90 rounded-2xl shadow-lg border hover:shadow-2xl transition">
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => handleOpen(idx)}
                aria-expanded={open === idx}
                aria-controls={`pyq-panel-${idx}`}
              >
                <div>
                  <span className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-xl mr-2">{q.year}</span>
                  <span className="inline-block text-xs font-medium bg-green-100 text-green-800 px-3 py-1 rounded-xl mr-2">{q.type}</span>
                  <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-3 py-1 rounded-xl">{q.subject}</span>
                  <div className="mt-2 font-semibold text-gray-900">{q.question}</div>
                </div>
                <span className="ml-5 transform transition-transform" style={{ transform: open === idx ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                  <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7" /></svg>
                </span>
              </button>
              {open === idx && (
                <div className="px-6 pb-6 text-gray-800 text-base animate-fade-in border-t mt-2 whitespace-pre-line" id={`pyq-panel-${idx}`}> 
                  <strong>Answer:</strong> {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center max-w-xl">
          <span className="inline-block mb-2 text-xs font-medium text-indigo-600 bg-indigo-50 px-4 py-1 rounded-xl">Prep Reminder</span>
          <blockquote className="italic text-indigo-900 text-lg">“Solving PYQs regularly is the most effective way to align your prep with UPSC’s expectations.”</blockquote>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PYQS;
