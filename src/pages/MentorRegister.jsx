import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

function MentorRegister() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    examSpecialization: '',
    experienceYears: '',
    achievements: '',
    availability: '',
    preferredMode: 'online',
    whatsappNumber: '',
    about: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCloseModal = () => {
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook this up to backend / Google Sheet / email service
    console.log('1:1 Mentor Registration', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <Header />

      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 py-10 md:py-16">
          <div className="max-w-2xl mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-blue-500 uppercase mb-3">
              Become a 1:1 Mentor
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Guide serious aspirants on their journey from{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dream to Rank
              </span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Join our handpicked pool of mentors who have cracked top government exams or have deep
              experience guiding aspirants. Tell us about your journey and availability so we can
              match you with the right students for focused 1:1 mentorship.
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs md:text-sm">
              <div className="rounded-xl bg-white/80 border border-slate-100 px-3 py-2">
                <p className="font-semibold text-slate-900">3000+</p>
                <p className="text-slate-500">Aspirants mentored</p>
              </div>
              <div className="rounded-xl bg-white/80 border border-slate-100 px-3 py-2">
                <p className="font-semibold text-slate-900">15+</p>
                <p className="text-slate-500">Exams covered</p>
              </div>
              <div className="rounded-xl bg-white/80 border border-slate-100 px-3 py-2">
                <p className="font-semibold text-slate-900">1:1</p>
                <p className="text-slate-500">Personalised plans</p>
              </div>
              <div className="rounded-xl bg-white/80 border border-slate-100 px-3 py-2">
                <p className="font-semibold text-slate-900">Pan India</p>
                <p className="text-slate-500">Mentor network</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Highlights */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                  Why mentor with Dream to Rank?
                </h2>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>Impact high-intent aspirants preparing for top competitive exams.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    <span>Flexible slots – you choose your availability and mode of interaction.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Dedicated support from our team to structure sessions & resources.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Option for paid mentorship based on profile and student demand.</span>
                  </li>
                </ul>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=120"
                    alt="Mentor guiding aspirant"
                    className="h-12 w-12 rounded-full object-cover border border-slate-200 shadow-sm"
                  />
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      “Mentoring through Dream to Rank lets me give back and stay connected to the exam ecosystem.”
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">— Ananya, UPSC CSE Mentor</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Who can apply?</h3>
                <p className="text-sm text-blue-50 mb-3">
                  We welcome:
                </p>
                <ul className="space-y-1.5 text-sm text-blue-50/90">
                  <li>• Selected/appeared candidates in top government exams (UPSC, State PCS, SSC, Banking, etc.)</li>
                  <li>• Subject experts & senior aspirants with strong exam strategy</li>
                  <li>• Coaching faculty or professionals with mentoring experience</li>
                </ul>
                <p className="mt-4 text-xs text-blue-100/90">
                  Your application helps us verify your profile. Our team will reach out within 3–5 working days.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  How 1:1 mentorship works
                </h3>
                <ol className="space-y-2 text-xs text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white">
                      1
                    </span>
                    <span>Submit this form with your profile, achievements and availability.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-semibold text-white">
                      2
                    </span>
                    <span>Our team verifies your details and onboards you as a mentor.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[11px] font-semibold text-white">
                      3
                    </span>
                    <span>We match you with aspirants whose goals and exam stage fit your expertise.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-semibold text-white">
                      4
                    </span>
                    <span>You conduct structured 1:1 sessions, track progress and share feedback.</span>
                  </li>
                </ol>
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                    i
                  </span>
                  <p className="text-[11px] text-slate-500">
                    You&apos;ll get a simple dashboard (coming soon) to see upcoming sessions and student details.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-1">
                1:1 Mentor Registration Form
              </h2>
              <p className="text-xs text-slate-500 mb-5">
                Fill in your details and we&apos;ll get back to you with the next steps.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-700">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-slate-50/60"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-700">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-slate-50/60"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-700">
                    Exam / Subject Specialization<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="examSpecialization"
                    required
                    value={formData.examSpecialization}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-slate-50/60"
                    placeholder="e.g. UPSC CSE, SSC CGL (Quant), Banking PO, State PCS, etc."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-slate-700">
                      Mentoring / Exam Experience (Years)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      name="experienceYears"
                      required
                      value={formData.experienceYears}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-slate-50/60"
                      placeholder="e.g. 2"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-slate-700">
                      Preferred Mode<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="preferredMode"
                      required
                      value={formData.preferredMode}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-slate-50/60"
                    >
                      <option value="online">Online (Zoom/Meet)</option>
                      <option value="phone">Phone</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-700">
                    Key Achievements (Selections / Ranks / Results)<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="achievements"
                    required
                    value={formData.achievements}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-slate-50/60 resize-none"
                    placeholder="Mention exam results, ranks, attempts, teaching/mentoring background, etc."
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-700">
                    Weekly Availability (Days / Time Slots)<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    rows={2}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-slate-50/60 resize-none"
                    placeholder="e.g. Mon–Fri: 7–9 PM, Sat–Sun: 11 AM–2 PM"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-700">
                    WhatsApp Number (with country code)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    required
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-slate-50/60"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-700">
                    Tell us how you like to mentor
                  </label>
                  <textarea
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-slate-50/60 resize-none"
                    placeholder="Share your mentoring style, focus areas (answer writing, strategy, revision plans, etc.)."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  Submit Mentor Application
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                <p className="text-[11px] text-slate-400 mt-2">
                  By submitting this form, you agree to be contacted by the Dream to Rank team for
                  verification and onboarding. Your details will be kept confidential and used only
                  for mentorship-related communication.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Thank You + QR Modal */}
      {submitted && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-white shadow-2xl border border-slate-100 p-6 md:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-3.5 top-3.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 text-xs font-semibold"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <span className="text-lg">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1.5">
                Thank you for registering as a mentor!
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Scan the QR code below to join our exclusive mentor WhatsApp group and complete your
                onboarding.
              </p>

              <div className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://dreamtorank.com/mentors"
                  alt="Dream to Rank mentor onboarding QR"
                  className="h-40 w-40 object-contain"
                />
              </div>

              <p className="text-[11px] text-slate-500 mb-4">
                If the QR doesn&apos;t open automatically, you can also visit the mentor onboarding link
                shared by our team on email.
              </p>

              <button
                type="button"
                onClick={handleCloseModal}
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default MentorRegister;


