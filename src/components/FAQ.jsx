import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How can Dream to Rank help me in my preparation?',
      answer: 'Dream to Rank provides comprehensive UPSC preparation with AI-powered features including instant mains evaluation, unlimited MCQs and PYQs practice, 24x7 doubt resolution, complete syllabus coverage, current affairs updates, and detailed progress tracking.'
    },
    {
      question: 'Is Dream to Rank free to use?',
      answer: 'Dream to Rank offers a premium plan at ₹5,699 till Mains, which provides unlimited access to all features. This is significantly more affordable than coaching institutes (₹1L+ per year) or ChatGPT Pro (₹20K+ per year).'
    },
    {
      question: 'How fast and accurate is the Mains Evaluation?',
      answer: 'Our AI-powered evaluation system provides instant feedback on your handwritten answers with high accuracy, helping you improve your answer writing skills quickly and effectively.'
    },
    {
      question: 'How can I access Dream to Rank? Is it available on all devices?',
      answer: 'Dream to Rank is available as a web application and mobile app. You can access it on all devices including desktop, tablet, and mobile phones for seamless learning experience.'
    },
    {
      question: 'How can I get unlimited access?',
      answer: 'Subscribe to our premium plan at ₹5,699 to get unlimited access to all features including MCQs, PYQs, mains evaluation, and more till your Mains exam.'
    },
    {
      question: 'I\'m a beginner or a working professional. Where should I start?',
      answer: 'Dream to Rank is designed for all levels - beginners can start with our structured modules and PYQs, while working professionals can benefit from flexible learning schedules and quick evaluation features.'
    },
    {
      question: 'How do I get my academic doubts or account issues resolved?',
      answer: 'You can reach out to us via WhatsApp at +91 9319720944, email at ask@dreamtorank.com for student queries, or hello@dreamtorank.com for general queries. Our support team is available 24x7.'
    },
    {
      question: 'Does Dream to Rank support vernacular languages like Hindi, Tamil, Telugu, etc.?',
      answer: 'Yes, Dream to Rank supports multiple vernacular languages to make UPSC preparation accessible to students from all regions of India.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-blue-100 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                type="button"
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 py-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 text-gray-700" role="region">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-6 border border-blue-200 shadow-lg">
          <p className="text-gray-700 mb-4">Still have some doubts?</p>
          <p className="text-gray-600 mb-4">Reach out to us on WhatsApp to get instant help from the team</p>
          <a
            href="https://wa.me/919319720944"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

