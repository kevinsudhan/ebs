import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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

  // Pie chart data
  const chartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#284a8c', '#4CAF50'],
        borderColor: ['#1a3666', '#388E3C'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.raw;
            return ` ${context.label}: ${formatCurrency(value)}`;
          },
        },
      },
    },
  };

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

              {/* Pie Chart */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Loan Breakdown
                </h3>
                <div className="h-[400px] mb-8">
                  <Pie data={chartData} options={chartOptions} />
                </div>
              </div>

              <div className="mt-2">
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

        {/* Contact Form */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Need Help with Your Loan?
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Preferred Loan Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Loan Amount
                </label>
                <input
                  type="number"
                  name="loanAmount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                  placeholder="Enter preferred amount"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Comments
              </label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                placeholder="Any specific requirements or questions?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#284a8c] text-white px-6 py-3 rounded-lg hover:bg-[#1a3666] transition-colors duration-300"
              >
                Request Loan Consultation
              </button>
            </div>

            {/* Privacy Note */}
            <p className="text-sm text-gray-500 mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
              Your information will be kept confidential and secure.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
