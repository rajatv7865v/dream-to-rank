const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">dreamtorank</h3>
            <p className="text-gray-400">
              Your personal mentor for UPSC preparation, guiding you at every step of the exam journey.
            </p>
          </div>
          {/* <div>
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div> */}
          {/* <div>
            <h4 className="font-semibold mb-4">STUDY RESOURCES</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">UPSC Preparation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UPSC Prelims</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UPSC Mains</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Current Affairs</a></li>
            </ul>
          </div> */}
          <div>
            <h4 className="font-semibold mb-4">CONTACT US</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="block">Email</span>
                <a href="mailto:info@dreamtorank.com" className="hover:text-white transition-colors">info@dreamtorank.com</a>
              </li>
              <li>
                <span className="block">Chat on WhatsApp</span>
                <a href="https://wa.me/91966053244" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 966053244</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-2xl">🇮🇳</span>
              <p className="text-gray-400">State Emblem of India</p>
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="/terms-condition" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-4">
            ⓒ SN Traders
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

