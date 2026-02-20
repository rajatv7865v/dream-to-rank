import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Prepare from './pages/Prepare';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import PYQS from './pages/PYQS';
import DailyCurrentAffairs from './pages/DailyCurrentAffairs';
import MonthlyCompilations from './pages/MonthlyCompilations';
import PracticeMCQs from './pages/PracticeMCQs';
import Contact from './pages/Contact';
import MentorRegister from './pages/MentorRegister';
import WhatsAppButton from './components/WhatsAppButton';
import TermsAndConditions from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/prepare" element={<Prepare />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pyqs" element={<PYQS />} />
        <Route path="/daily-current-affairs" element={<DailyCurrentAffairs />} />
        <Route path="/monthly-compilations" element={<MonthlyCompilations />} />
        <Route path="/practice-mcqs" element={<PracticeMCQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentor-register" element={<MentorRegister />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
}

export default App;
