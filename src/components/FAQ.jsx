// FAQ Component
const FAQ = () => {
  const faqs = [
    { q: 'What is the eligibility criteria for participating?', a: 'You must be a student or professional as per the event’s criteria. Teams should consist of 2-4 members.' },
    { q: 'Can I register for the hackathon on the spot?', a: 'No, there will be no on-spot registration. All participants must complete the online registration process before the deadline.' },
    { q: 'Can I change my team members after registration?', a: 'No, once the team registration is closed, no changes can be made to the team members.' },
    { q: 'What happens if my idea is shortlisted for the finals?', a: 'You will be notified to prepare a detailed presentation and demo of your project for the finals.' },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span></h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;