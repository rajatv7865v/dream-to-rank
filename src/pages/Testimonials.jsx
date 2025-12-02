import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'UPSC Topper, AIR 15',
    text: 'Dream to Rank transformed my preparation. The mock tests and study plans were spot on for actual exams!',
  },
  {
    name: 'Rahul Verma',
    role: 'UPSC Aspirant',
    text: 'The Previous Year Questions and mentoring helped me identify my weaknesses and work on them. Highly recommend!',
  },
  {
    name: 'Priya Singh',
    role: 'Rank Predictor User',
    text: 'Rank prediction feature was so accurate and motivating. Loved the personalized approach!',
  },
  {
    name: 'Amit Kumar',
    role: 'Working Professional, Aspirant',
    text: 'Balancing job and study became possible with Dream to Rank’s resources and community support.',
  },
  {
    name: 'Sneha Patil',
    role: 'Mock Test Taker',
    text: 'The variety and quality of mock tests boosted my confidence for the Prelims more than anything else has.',
  },
  {
    name: 'Devansh Mehra',
    role: 'Early User',
    text: 'I saw my test scores improve week by week. The doubt-solving support is incredibly quick and helpful!',
  },
  {
    name: 'Tanvi Chauhan',
    role: 'Aspirant from Rajasthan',
    text: 'The community here makes preparing less lonely. Shared strategies and advice kept me motivated!',
  },
  {
    name: 'Akash S.',
    role: 'Studied while working',
    text: 'Being able to access everything on my schedule made all the difference. Thank you Dream to Rank! Highly recommended.',
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-between">
      <Header />
      <main className="flex flex-col items-center justify-center px-4 py-16 flex-1">
        <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-2">What Our Users Say</h1>
        <p className="text-lg text-gray-600 mb-10">Stories from real students and top performers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/80 rounded-3xl shadow-xl p-8 flex flex-col items-center backdrop-blur border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition transform duration-300">
              <blockquote className="text-gray-700 text-base mb-5 text-center">“{t.text}”</blockquote>
              <div className="flex flex-col items-center mt-auto">
                <span className="font-bold text-gray-900 text-lg">{t.name}</span>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
