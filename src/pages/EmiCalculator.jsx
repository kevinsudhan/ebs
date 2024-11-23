import React, { useState } from 'react';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const numberOfPayments = loanTenure * 12;
    
    const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfPayments) / 
                (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);
    
    const totalAmount = emi * numberOfPayments;
    const totalInterest = totalAmount - principal;
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
    };
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const { emi, totalAmount, totalInterest } = calculateEMI();

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#284a8c] mb-8">EMI Calculator</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Calculate Your EMI
            </h2>

            <div className="space-y-6">
              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-lg font-semibold text-[#284a8c] mt-2">
                  {formatCurrency(loanAmount)}
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (% per annum)
                </label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-lg font-semibold text-[#284a8c] mt-2">
                  {interestRate}%
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Tenure (years)
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-lg font-semibold text-[#284a8c] mt-2">
                  {loanTenure} years
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Loan Summary
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Monthly EMI</div>
                <div className="text-3xl font-bold text-[#284a8c]">
                  {formatCurrency(emi)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Total Interest</div>
                  <div className="text-xl font-semibold text-[#284a8c]">
                    {formatCurrency(totalInterest)}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Total Amount</div>
                  <div className="text-xl font-semibold text-[#284a8c]">
                    {formatCurrency(totalAmount)}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-[#284a8c] text-white px-6 py-3 rounded-lg hover:bg-[#1a3666] transition-colors duration-300">
                  Apply for Loan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            How EMI is Calculated?
          </h2>
          <div className="prose text-gray-600">
            <p>
              EMI (Equated Monthly Installment) is calculated using the following formula:
            </p>
            <pre className="bg-gray-50 p-4 rounded-lg mt-4">
              EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
            </pre>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>P = Principal loan amount</li>
              <li>r = Interest rate per month [Annual rate ÷ (12 × 100)]</li>
              <li>n = Total number of months (Tenure × 12)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
