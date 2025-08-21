import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';
import Button from './ui/Button';

const Registration = () => {
  return (
    <Section id="registrations" background="bg-gray-100 dark:bg-gray-900">
      <Container className="text-center">
        <h2 className="text-4xl font-bold mb-12">Registration <span className="text-blue-600 dark:text-blue-400">Desk</span></h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Button
              href="https://forms.gle/jxpmH1FBL9BkRGd36"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="text-xl shadow-lg hover:shadow-primary/50"
            >
              Register Now
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Registration Fees</h3>
            <table className="w-full text-left responsive-table">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr className="border-b dark:border-gray-700">
                  <th className="p-4 font-semibold uppercase text-sm">Participants</th>
                  <th className="p-4 font-semibold uppercase text-sm">IIChE Member</th>
                  <th className="p-4 font-semibold uppercase text-sm">Non-IIChE Member</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700 md:even:bg-gray-50 dark:md:even:bg-gray-800/50">
                  <td data-label="Participants" className="md:p-4">Student (UG/PG)</td>
                  <td data-label="IIChE Member" className="md:p-4">Rs. 750</td>
                  <td data-label="Non-IIChE Member" className="md:p-4">Rs. 1000</td>
                </tr>
                <tr>
                  <td data-label="Participants" className="md:p-4">Research Scholar</td>
                  <td data-label="IIChE Member" className="md:p-4">Rs. 1000</td>
                  <td data-label="Non-IIChE Member" className="md:p-4">Rs. 1500</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-6 text-gray-600 dark:text-gray-400">No Spot Registration. Prelims will be conducted online.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Registration;