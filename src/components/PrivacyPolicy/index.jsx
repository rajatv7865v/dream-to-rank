const PrivacyPolicy = () => {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">🔒 Privacy Policy</h1>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> We collect personal details such as your name,
              email address, shipping address, phone number, and payment information when you make
              a purchase, create an account, or contact us.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> We may collect non-personal data such as
              browser type, operating system, and browsing behavior to improve our website and services.
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>To Process Orders:</strong> We use your personal information to process and fulfill your orders.</li>
            <li><strong>To Communicate:</strong> We use your contact information to send updates about your order and respond to inquiries.</li>
            <li><strong>To Improve Our Services:</strong> We analyze non-personal information to enhance our website’s performance.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Information Sharing</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with trusted third parties who assist in operating our website, processing payments, and delivering orders.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights.
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access and Correction:</strong> You have the right to access and correct your
              personal information through your account settings.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can unsubscribe from promotional emails using the
              unsubscribe link in our emails.
            </li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page, and the revised date will be indicated at the top of the policy.
          </p>
        </section>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  