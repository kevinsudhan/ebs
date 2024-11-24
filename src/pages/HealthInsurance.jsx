import React, { useState } from 'react';
import doctorImage from '../assets/images/doctor-filling-up-life-insurance-form.jpg';
import sideDesign from '../assets/images/Sitemap Whiteboard in Green Purple Basic Style (7).png';

const HealthInsurance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      message: ''
    });
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden animate-fade-in">
        <img
          src={doctorImage}
          alt="Doctor filling up life insurance form"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-delay">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Insurance</h1>
            <p className="text-xl md:text-2xl">Secure your family's health with our comprehensive coverage</p>
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
            {/* Glassmorphism overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                backdropFilter: 'blur(1.5px)',
                WebkitBackdropFilter: 'blur(1.5px)',
                borderRight: '1px solid rgba(255, 255, 255, 0.03)',
                boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.08)',
              }}
            ></div>
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
            {/* Glassmorphism overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                backdropFilter: 'blur(1.5px)',
                WebkitBackdropFilter: 'blur(1.5px)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.03)',
                boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.08)',
              }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Blog Content */}
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Our Health Insurance?</h2>
                <p className="text-gray-600 leading-relaxed">
                  In today's uncertain times, having comprehensive health insurance isn't just an option – it's a necessity. 
                  Our health insurance plans are designed to provide you and your family with complete protection against 
                  medical emergencies, offering extensive coverage and peace of mind.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Comprehensive coverage for medical expenses</li>
                  <li>Cashless treatment at 5000+ network hospitals</li>
                  <li>No claim bonus up to 50%</li>
                  <li>Pre and post hospitalization coverage</li>
                  <li>24/7 customer support</li>
                  <li>Quick claim settlement</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coverage Options</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose from our range of plans starting from ₹5 lakhs to ₹1 crore coverage. 
                  Our plans include individual, family floater, and senior citizen specific policies, 
                  ensuring that everyone gets the protection they deserve.
                </p>
              </section>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Get Your Free Quote Today</h3>
              <p className="text-gray-600 text-center mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                    placeholder="25"
                    min="1"
                    max="100"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#284a8c] focus:border-transparent transition-colors bg-white"
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 font-medium text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Get Your Free Quote
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Your information is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
