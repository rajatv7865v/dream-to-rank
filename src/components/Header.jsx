import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/98 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gradient-to-r from-blue-100 via-indigo-100 to-purple-100">
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 md:space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img 
                src={logo} 
                alt="Dream to Rank Logo" 
                className="relative h-12 w-12 md:h-16 md:w-16 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dream to Rank
              </div>
              <div className="text-xs text-gray-500 font-medium">Study Smarter, Rank Higher</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/pyqs"
              className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-600 transition-all duration-300 group"
            >
              <span className="relative z-10">Previous Year Questions</span>
              <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link
              to="/prepare"
              className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-purple-600 transition-all duration-300 group"
            >
              <span className="relative z-10">Prepare</span>
              <span className="absolute inset-0 bg-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link
              to="/faq"
              className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-indigo-600 transition-all duration-300 group"
            >
              <span className="relative z-10">FAQs</span>
              <span className="absolute inset-0 bg-indigo-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link
              to="/testimonials"
              className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-pink-600 transition-all duration-300 group"
            >
              <span className="relative z-10">Testimonials</span>
              <span className="absolute inset-0 bg-pink-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link
              to="/pricing"
              className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-600 transition-all duration-300 group"
            >
              <span className="relative z-10">Pricing</span>
              <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link
              to="/contact"
              className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-green-600 transition-all duration-300 group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <Link
              to="/login"
              className="hidden md:block px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-600 transition-all duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="hidden md:block relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Sign Up
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
            
            <button 
              type="button"
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top duration-300">
            <Link
              to="/pyqs"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300"
            >
              Previous Year Questions
            </Link>
            <Link
              to="/prepare"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600 transition-all duration-300"
            >
              Prepare
            </Link>
            <Link
              to="/faq"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300"
            >
              FAQs
            </Link>
            <Link
              to="/testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-indigo-50 hover:text-pink-600 transition-all duration-300"
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-indigo-50 hover:text-green-600 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/signup"
              className="w-full mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 text-center block"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

