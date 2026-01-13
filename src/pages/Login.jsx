import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const validatePhone = (phone) => /^\d{10}$/.test(phone);

const Login = () => {
  const [mode, setMode] = useState('email');
  const [formData, setFormData] = useState({ email: '', password: '', phone: '', otp: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpDemo, setOtpDemo] = useState('123456');
  const [phoneError, setPhoneError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [contact, setContact] = useState({ name: '', contact: '', message: '' });
  const [contactSuccess, setContactSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'phone') setPhoneError('');
    if (e.target.name === 'otp') setOtpError('');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
    // navigate('/');
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit number.');
      return;
    }
    setOtpSent(true);
    setPhoneError('');
    setFormData({ ...formData, otp: '' });
    setOtpDemo('123456');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (formData.otp === otpDemo) {
      setOtpError('');
      alert('Phone login successful!');
      // navigate('/');
    } else {
      setOtpError('Invalid OTP. (Try 123456 as demo)');
    }
  };

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSuccess(true);
    setContact({ name: '', contact: '', message: '' });
    setTimeout(() => setContactSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src={logo} alt="dreamtorank Logo" className="h-16 w-16 object-contain" />
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">dreamtorank</div>
                <div className="text-sm text-gray-500">Study Smarter, Rank Higher</div>
              </div>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Sign in to continue your UPSC journey</p>
        </div>
        {/* Login Mode Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-5 py-2 rounded-t-xl font-semibold focus:outline-none transition ${mode === 'email' ? 'bg-white shadow text-blue-700' : 'bg-blue-100 text-gray-600'}`}
            onClick={() => {setMode('email'); setOtpSent(false); setPhoneError(''); setOtpError('');}}
          >Email Login</button>
          <button
            className={`px-5 py-2 rounded-t-xl font-semibold focus:outline-none transition ml-2 ${mode === 'phone' ? 'bg-white shadow text-blue-700' : 'bg-blue-100 text-gray-600'}`}
            onClick={() => {setMode('phone'); setOtpSent(false); setPhoneError(''); setOtpError('');}}
          >Mobile Login</button>
        </div>
        {/* Login Forms */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          {mode === 'email' && !otpSent && (
            <form className="space-y-6" onSubmit={handleEmailSubmit}>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" placeholder="Enter your email" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required value={formData.password} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none pr-12" placeholder="Enter your password" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0L3 3m3.29 3.29L3 3" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                </div>
                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">Forgot password?</Link>
                </div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Sign In
              </button>
            </form>
          )}
          {mode === 'phone' && !otpSent && (
            <form className="space-y-6" onSubmit={handlePhoneSubmit}>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                <input id="phone" name="phone" type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} autoComplete="tel" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" placeholder="Enter your 10-digit mobile number" />
                {phoneError && <div className="text-red-500 mt-2 text-xs">{phoneError}</div>}
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Send OTP</button>
            </form>
          )}
          {mode === 'phone' && otpSent && (
            <form className="space-y-6" onSubmit={handleOtpSubmit}>
              <div>
                <label htmlFor="otp" className="block text-sm font-semibold text-gray-700 mb-2">Enter OTP (demo: 123456)</label>
                <input id="otp" name="otp" type="text" inputMode="numeric" maxLength={6} autoComplete="one-time-code" required value={formData.otp} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" placeholder="Enter 6-digit OTP" />
                {otpError && <div className="text-red-500 mt-2 text-xs">{otpError}</div>}
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Verify OTP</button>
              <button type="button" className="w-full mt-2 text-sm text-blue-600 hover:underline" onClick={() => setOtpSent(false)}>
                Edit Mobile Number
              </button>
            </form>
          )}
          {(!otpSent || mode === 'email') && (
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-500">Sign up for free</Link>
            </p>
          )}
        </div>
        {/* Contact Us Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
          <p className="mb-4 text-gray-600 text-sm">Have a question or feedback? Reach out to the dreamtorank team.</p>
          {contactSuccess && (
            <div className="bg-green-100 text-green-700 rounded px-4 py-2 mb-4 text-sm text-center">Thank you! Your message was sent.</div>
          )}
          <form className="space-y-5" onSubmit={handleContactSubmit}>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
              <input id="contact-name" name="name" type="text" required value={contact.name} onChange={handleContactChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="contact-contact" className="block text-sm font-semibold text-gray-700 mb-2">Email / Phone</label>
              <input id="contact-contact" name="contact" type="text" required value={contact.contact} onChange={handleContactChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Enter your email or phone number" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea id="contact-message" name="message" required value={contact.message} onChange={handleContactChange} className="w-full px-4 py-3 h-24 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder="Type your message here..." />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

