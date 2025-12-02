import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: '', contact: '', message: '' });
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-between">
      <Header />
      <main className="flex flex-col items-center px-4 py-16 flex-1 w-full">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-2">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl text-center">We're here to help. Reach out with questions, feedback, or partnership opportunities!</p>
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          {success && (
            <div className="bg-green-100 text-green-700 rounded px-4 py-2 mb-4 text-sm text-center">Thank you! Your message was sent.</div>
          )}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
              <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="contact-contact" className="block text-sm font-semibold text-gray-700 mb-2">Email / Phone</label>
              <input id="contact-contact" name="contact" type="text" required value={form.contact} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Enter your email or phone number" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea id="contact-message" name="message" required value={form.message} onChange={handleChange} className="w-full px-4 py-3 h-24 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder="Type your message here..." />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Send Message</button>
          </form>
        </div>
        <div className="mt-10 text-center max-w-xl">
          <div className="mb-1 text-gray-500 font-medium">Direct support:</div>
          <div className="text-indigo-700 font-semibold">Email: ask@dreamtorank.com</div>
          <div className="text-indigo-700 font-semibold">WhatsApp: +91 9319720944</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
