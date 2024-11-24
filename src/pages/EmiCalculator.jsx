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
    
    // Calculate additional metrics
    const interestRatio = (totalInterest / totalAmount) * 100;
    const monthlyInterestPayment = (principal * ratePerMonth).toFixed(2);
    const annualPayment = emi * 12;
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      interestRatio: Math.round(interestRatio),
      monthlyInterestPayment,
      annualPayment: Math.round(annualPayment)
    };
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const { emi, totalAmount, totalInterest, interestRatio, monthlyInterestPayment, annualPayment } = calculateEMI();

  const pieChartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#3B82F6', '#1D4ED8'],
        borderColor: ['#2563EB', '#1E40AF'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#9CA3AF',
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-light text-white mb-3">
            EMI <span className="font-medium">Calculator</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Plan your loan with our easy-to-use EMI calculator and make informed financial decisions
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Calculator Inputs */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-5 border border-gray-700">
              <h2 className="text-xl font-light text-white mb-6">
                Calculate Your EMI
              </h2>

              <div className="space-y-6">
                {/* Loan Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-base font-medium text-blue-400 mt-1">
                    {formatCurrency(loanAmount)}
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-base font-medium text-blue-400 mt-1">
                    {interestRate}%
                  </div>
                </div>

                {/* Loan Tenure */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Loan Tenure (years)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-base font-medium text-blue-400 mt-1">
                    {loanTenure} years
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-5 border border-gray-700">
              <h2 className="text-xl font-light text-white mb-6">
                Loan Analysis
              </h2>

              <div className="space-y-4">
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700">
                    <div className="text-sm text-gray-400">Monthly EMI</div>
                    <div className="text-lg font-medium text-blue-400">
                      {formatCurrency(emi)}
                    </div>
                  </div>

                  <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700">
                    <div className="text-sm text-gray-400">Annual Payment</div>
                    <div className="text-lg font-medium text-blue-400">
                      {formatCurrency(annualPayment)}
                    </div>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700">
                  <h3 className="text-sm font-medium text-white mb-2">Cost Breakdown</h3>
                  <div className="h-40">
                    <Pie data={pieChartData} options={chartOptions} />
                  </div>
                </div>

                {/* Technical Details */}
                <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700">
                  <h3 className="text-sm font-medium text-white mb-2">Technical Details</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div>
                      <div className="text-gray-400">Interest Ratio</div>
                      <div className="text-blue-400">{interestRatio}%</div>
                    </div>
                    
                    <div>
                      <div className="text-gray-400">Monthly Interest</div>
                      <div className="text-blue-400">₹{monthlyInterestPayment}</div>
                    </div>
                    
                    <div>
                      <div className="text-gray-400">Total Interest</div>
                      <div className="text-blue-400">{formatCurrency(totalInterest)}</div>
                    </div>
                    
                    <div>
                      <div className="text-gray-400">Total Amount</div>
                      <div className="text-blue-400">{formatCurrency(totalAmount)}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-medium shadow-sm text-sm">
                    Apply for Loan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-white text-center mb-12">
            Why Use Our <span className="font-medium">EMI Calculator?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accurate Calculations",
                description: "Get precise EMI calculations based on your loan amount, interest rate, and tenure",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Easy to Use",
                description: "Simple sliders make it easy to adjust values and see results instantly",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )
              },
              {
                title: "Transparent Results",
                description: "View detailed breakdown of your EMI, total interest, and total amount payable",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formula Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-700">
            <h2 className="text-2xl font-light text-white mb-6">
              How EMI is Calculated?
            </h2>
            <div className="prose text-gray-300 max-w-none">
              <p>
                EMI (Equated Monthly Installment) is calculated using the following formula:
              </p>
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700 font-mono text-blue-400 my-4">
                EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
              </div>
              <p>
                Where:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>P = Principal loan amount</li>
                <li>r = Interest rate per month [Annual rate ÷ (12 × 100)]</li>
                <li>n = Total number of months (Tenure × 12)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Ready to <span className="font-medium">Get Started?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Apply now and get instant approval on your loan application
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 font-medium shadow-sm">
              Apply Now
            </button>
            <button className="px-8 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors duration-300 font-medium shadow-sm border border-gray-700">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmiCalculator;
