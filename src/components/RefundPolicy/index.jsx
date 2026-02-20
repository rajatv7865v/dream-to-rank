const RefundPolicy = () => {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">💳 Refund Policy</h1>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Order Cancellation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Courses cannot be cancelled after purchase.
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Refund Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All refund-related requests are subject to approval by our internal team.
            </li>
            <li>
              Approved refunds will be processed and credited within 7–14 business days to the original payment method.
            </li>
          </ul>
        </section>
  
        <section>
          <p className="text-sm text-gray-500">
            For any refund-related inquiries, please contact our support team.
          </p>
        </section>
      </div>
    );
  };
  
  export default RefundPolicy;
  