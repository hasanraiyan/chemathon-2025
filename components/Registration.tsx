import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="register" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="text-sm font-bold text-blue-600 mb-4 mono tracking-wider">
                REGISTRATION
              </div>
              <h2 className="text-5xl font-black mb-6 leading-tight">
                Ready to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Innovate?
                </span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-2xl text-green-500 mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Team of 4-5 Members</h4>
                    <p className="text-gray-600">
                      Including 1 mentor and 1 mandatory female participant
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-2xl text-green-500 mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">All Inclusive Package</h4>
                    <p className="text-gray-600">
                      Kit, meals, accommodation, and participation certificates
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-2xl text-green-500 mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Open to All Engineering Students</h4>
                    <p className="text-gray-600">UG, PG, and Research Scholars welcome</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Prize Distribution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-2xl">🥇</span>
                      <span className="font-semibold">First Prize</span>
                    </span>
                    <span className="text-2xl font-black">₹1,00,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-2xl">🥈</span>
                      <span className="font-semibold">Second Prize</span>
                    </span>
                    <span className="text-2xl font-black">₹50,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-2xl">🥉</span>
                      <span className="font-semibold">Third Prize</span>
                    </span>
                    <span className="text-2xl font-black">₹30,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                <h3 className="text-2xl font-bold mb-6">Registration Fees</h3>

                <table className="w-full mb-8">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 font-bold">Category</th>
                      <th className="text-left py-3 font-bold">IIChE Member</th>
                      <th className="text-left py-3 font-bold">Non-Member</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4">UG/PG Student</td>
                      <td className="py-4 font-bold text-blue-600">₹750</td>
                      <td className="py-4 font-bold text-blue-600">₹1,000</td>
                    </tr>
                    <tr>
                      <td className="py-4">Research Scholar</td>
                      <td className="py-4 font-bold text-blue-600">₹1,000</td>
                      <td className="py-4 font-bold text-blue-600">₹1,500</td>
                    </tr>
                  </tbody>
                </table>

                <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-100">
                  <p className="text-sm text-gray-700 mb-3">
                    <i className="fas fa-info-circle text-blue-600 mr-2"></i>
                    Registration includes kit, all meals, accommodation, and participation
                    certificate
                  </p>
                  <p className="text-sm text-gray-700">
                    <i className="fas fa-exclamation-circle text-yellow-600 mr-2"></i>
                    No spot registration available
                  </p>
                </div>

                <a
                  href="#"
                  className="block w-full bg-black text-white text-center py-4 rounded-xl font-bold hover:bg-gray-800 transition"
                >
                  Register Your Team Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
