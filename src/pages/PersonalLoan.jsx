import React, { useState } from 'react';
import handshakeImage from '../assets/images/business-people-shaking-hands-finishing-up-meeting.jpg';
import sideDesign from '../assets/images/Sitemap Whiteboard in Green Purple Basic Style (10).png';

const PersonalLoan = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    tenure: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden animate-fade-in">
        <img
          src={handshakeImage}
          alt="Business people shaking hands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-delay">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Loan</h1>
            <p className="text-xl md:text-2xl">Quick and flexible financing solutions for your needs</p>
          </div>
        </div>
      </div>

      {/* Content Section with Side Designs */}
      <div className="relative min-h-screen">
        {/* Left Side Design */}
        <div className="hidden xl:block fixed left-0 top-0 bottom-0 w-[200px] h-full animate-fade-in-slide-left">
          <div className="relative w-full h-full">
            <img
              src={sideDesign}
              alt="Left design"
              className="w-full h-full object-cover"
              style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '200px' }}
            />
          </div>
        </div>

        {/* Right Side Design */}
        <div className="hidden xl:block fixed right-0 top-0 bottom-0 w-[200px] h-full animate-fade-in-slide-right">
          <div className="relative w-full h-full">
            <img
              src={sideDesign}
              alt="Right design"
              className="w-full h-full object-cover"
              style={{ 
                position: 'fixed', 
                right: 0, 
                top: 0, 
                bottom: 0, 
                width: '200px',
                transform: 'scaleX(-1)' // Mirror the image for the right side
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features Section */}
            <div className="space-y-8 animate-fade-in-slide-left">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose Our Personal Loan?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#284a8c] rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Competitive Interest Rates</h3>
                    <p className="mt-2 text-gray-600">Get access to personal loans with interest rates starting from 10.99% per annum.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#284a8c] rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Quick Disbursement</h3>
                    <p className="mt-2 text-gray-600">Get your loan amount disbursed within 24 hours of approval.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#284a8c] rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Minimal Documentation</h3>
                    <p className="mt-2 text-gray-600">Simple documentation process with minimal paperwork required.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-slide-right">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#284a8c] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#284a8c] focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#284a8c] focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#284a8c] focus:border-transparent"
                    placeholder="Enter loan amount"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="tenure" className="block text-sm font-medium text-gray-700">
                    Loan Tenure (in months)
                  </label>
                  <select
                    id="tenure"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#284a8c] focus:border-transparent"
                    required
                  >
                    <option value="">Select tenure</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                  </select>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#284a8c] hover:bg-[#1a3666] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#284a8c] transition-colors duration-200"
                  >
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoan;
