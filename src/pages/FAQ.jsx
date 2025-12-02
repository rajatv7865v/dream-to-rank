import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    q: 'What is Dream to Rank?',
    a: 'Dream to Rank is an exam prep platform designed to guide UPSC aspirants with resources like previous year questions, curated study materials, detailed analysis, and personalized mentoring.'
  },
  {
    q: 'What exams do you support?',
    a: 'Currently, Dream to Rank is focused on UPSC exam preparation (Prelims & Mains), with plans to expand to other competitive exams soon.'
  },
  {
    q: 'How can I access Previous Year Questions (PYQs)?',
    a: 'PYQs are available for all registered users. Simply sign up for a free or paid plan and navigate to the PYQS section.'
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes! The Free plan gives you access to basic features like PYQs, limited mock tests, and community support.'
  },
  {
    q: 'How do I upgrade to Pro or Premium?',
    a: 'After signing in, visit the Pricing page and select your preferred plan to start enjoying advanced features like unlimited mock tests, mentoring, and more.'
  },
  {
    q: 'Do you offer personalized study plans?',
    a: 'Yes, our Premium plan includes access to personalized study plans tailored to your preparation needs.'
  },
  {
    q: 'Who can I contact for support?',
    a: 'You can email ask@dreamtorank.com for student queries or hello@dreamtorank.com for general queries. WhatsApp support is also available.'
  },
  {
    q: 'Can I use Dream to Rank on mobile?',
    a: 'Absolutely! Dream to Rank works smoothly on both mobile and desktop devices.'
  }
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = idx => setOpen(open === idx ? null : idx);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-between">
      <Header />
      <main className="flex flex-col items-center justify-center px-4 py-16 flex-1 w-full">
        <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-2">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-10">Get answers to your most common doubts about Dream to Rank.</p>
        <div className="w-full max-w-2xl space-y-5">
          {faqs.map((f, idx) => (
            <div key={idx} className="bg-white/90 rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition">
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => handleOpen(idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="font-medium text-gray-900 text-lg">{f.q}</span>
                <span className="ml-5 transform transition-transform" style={{ transform: open === idx ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                  <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7" /></svg>
                </span>
              </button>
              {open === idx && (
                <div className="px-6 pb-6 text-gray-700 text-base animate-fade-in border-t" id={`faq-panel-${idx}`}> {f.a} </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
