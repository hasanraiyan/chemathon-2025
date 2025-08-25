import Section from './ui/Section';
import Container from './ui/Container';
import ScrollReveal from './ui/ScrollReveal';

// Sponsors Component
const Sponsors = () => {
  const sponsors = [
    { category: 'Diamond', amount: 'Rs. 3,00,000' },
    { category: 'Platinum', amount: 'Rs. 2,00,000' },
    { category: 'Gold', amount: 'Rs. 1,00,000' },
    { category: 'Silver', amount: 'Rs. 75,000' },
  ];

  return (
    <Section id="sponsors" background="bg-white dark:bg-gray-800">
      <Container className="text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12">Our <span className="text-blue-600 dark:text-blue-400">Sponsors</span></h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <table className="w-full text-left bg-gray-50 dark:bg-gray-800/50 rounded-lg shadow-lg responsive-table overflow-hidden">
              <thead className="bg-gray-100 dark:bg-gray-900">
                <tr className="border-b dark:border-gray-700">
                  <th className="p-4 font-semibold uppercase text-sm">Category</th>
                  <th className="p-4 font-semibold uppercase text-sm">Amount</th>
                </tr>
              </thead>
              <tbody>
                {sponsors.map((sponsor, index) => (
                  <tr key={index} className="border-b last:border-b-0 dark:border-gray-700 md:even:bg-gray-100 dark:md:even:bg-gray-900/50">
                    <td data-label="Category" className="md:p-4">{sponsor.category}</td>
                    <td data-label="Amount" className="md:p-4">{sponsor.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};

export default Sponsors;