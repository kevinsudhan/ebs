import React from 'react';

const PersonalLoan = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#284a8c] mb-8">Personal Loans</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get Personal Loans at Competitive Interest Rates
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Key Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Competitive interest rates starting from 10.49%</li>
                <li>• Loan amount up to ₹40 Lakhs</li>
                <li>• Flexible tenure options from 12 to 60 months</li>
                <li>• Quick disbursement within 24 hours</li>
                <li>• Minimal documentation required</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Eligibility Criteria
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Age: 21-58 years</li>
                <li>• Minimum monthly income: ₹25,000</li>
                <li>• Employment: Salaried with min. 2 years experience</li>
                <li>• Credit Score: 700+</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-[#284a8c] text-white px-6 py-3 rounded-lg hover:bg-[#1a3666] transition-colors duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoan;
