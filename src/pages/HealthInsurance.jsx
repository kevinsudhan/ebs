import React from 'react';

const HealthInsurance = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#284a8c] mb-8">Health Insurance</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Comprehensive Health Coverage for You and Your Family
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Plan Benefits
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  Coverage up to ₹1 Crore
                </li>
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  Cashless treatment at 10,000+ network hospitals
                </li>
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  No medical check-up required up to 45 years
                </li>
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  100% coverage for COVID-19 treatment
                </li>
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  Day care procedures covered
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Additional Features
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  No claim bonus up to 100%
                </li>
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  Pre & post hospitalization expenses covered
                </li>
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  Annual health check-ups
                </li>
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  Tax benefits under Section 80D
                </li>
                <li className="flex items-start">
                  <span className="text-[#284a8c] mr-2">•</span>
                  24/7 customer support
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              Why Choose Our Health Insurance?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-[#284a8c] mb-2">98%</div>
                <div className="text-sm text-gray-600">Claim Settlement Ratio</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-[#284a8c] mb-2">30 min</div>
                <div className="text-sm text-gray-600">Claim Processing Time</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-[#284a8c] mb-2">10,000+</div>
                <div className="text-sm text-gray-600">Network Hospitals</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#284a8c] text-white px-8 py-3 rounded-lg hover:bg-[#1a3666] transition-colors duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
