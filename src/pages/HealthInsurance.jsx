import React, { useState } from 'react';
import healthInsuranceBg from '../assets/images/backgrounds/helthinsurance.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HealthInsurance = () => {
  const [faqForm, setFaqForm] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleFaqSubmit = (e) => {
    e.preventDefault();
    console.log('FAQ Form submitted:', faqForm);
  };

  const whyChooseUs = [
    {
      title: '98% Claim Settlement Ratio',
      description: 'One of the highest in the industry, ensuring your claims are processed reliably',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: '10,000+ Network Hospitals',
      description: 'Wide network of hospitals across India for cashless treatment',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: '45+ Critical Illnesses',
      description: 'Comprehensive coverage for wide range of critical illnesses',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance through phone, email, and chat',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Overview Section */}
      <section 
        className="min-h-[600px] relative flex items-center justify-center py-24 bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.8)), url(${healthInsuranceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-100"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl font-light text-white mb-3 tracking-tight">
                Health <span className="font-medium">Insurance</span>
              </h1>
              <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                Comprehensive coverage for your peace of mind, securing your family's health
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-light hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[200px]">
                Get a Quote
              </button>
              <button className="bg-transparent text-white px-8 py-3 rounded-lg text-lg font-light border border-white/30 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm min-w-[200px]">
                View Plans
              </button>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-white/90 font-medium">Coverage</p>
                <p className="text-white/70 text-sm">Up to ₹1 Crore</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-white/90 font-medium">Network Hospitals</p>
                <p className="text-white/70 text-sm">10,000+ Hospitals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-white/90 font-medium">Claim Settlement</p>
                <p className="text-white/70 text-sm">Within 30 Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-12 text-center">Our Insurance Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Plan Benefits Card */}
            <div className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Plan Benefits</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                {[
                  "Coverage up to ₹1 Crore",
                  "Cashless treatment at 10,000+ hospitals",
                  "No medical check-up required up to 45 years",
                  "100% coverage for COVID-19 treatment",
                  "Day care procedures covered"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2.5"></span>
                    <span className="group-hover:text-white transition-colors duration-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Features Card */}
            <div className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Additional Features</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                {[
                  "No claim bonus up to 100%",
                  "Pre & post hospitalization expenses covered",
                  "Annual health check-ups",
                  "Tax benefits under Section 80D",
                  "24/7 customer support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2.5"></span>
                    <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us Timeline */}
          <div className="relative max-w-2xl mx-auto pt-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl font-light text-white mb-12 text-center"
            >
              Why Choose Our Health Insurance?
            </motion.h2>
            
            {/* Vertical Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-transparent"
              style={{ transformOrigin: "top" }}
            ></motion.div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Item 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </motion.div>
                <div className="flex items-center justify-end pr-8 md:w-1/2">
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-400 mb-2">98%</div>
                    <div className="text-gray-300">Claim Settlement Ratio</div>
                    <p className="text-sm text-gray-400 mt-2">One of the highest in the industry, ensuring your claims are processed reliably</p>
                  </div>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </motion.div>
                <div className="flex items-center justify-start pl-8 md:w-1/2 md:ml-auto">
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-400 mb-2">10,000+</div>
                    <div className="text-gray-300">Network Hospitals</div>
                    <p className="text-sm text-gray-400 mt-2">Wide network of hospitals across India for cashless treatment</p>
                  </div>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </motion.div>
                <div className="flex items-center justify-end pr-8 md:w-1/2">
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-400 mb-2">45+</div>
                    <div className="text-gray-300">Critical Illnesses</div>
                    <p className="text-sm text-gray-400 mt-2">Comprehensive coverage for wide range of critical illnesses</p>
                  </div>
                </div>
              </motion.div>

              {/* Item 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </motion.div>
                <div className="flex items-center justify-start pl-8 md:w-1/2 md:ml-auto">
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-gray-300">Customer Support</div>
                    <p className="text-sm text-gray-400 mt-2">Round-the-clock assistance through phone, email, and chat</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Mission Content */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                  <h2 className="text-3xl font-light text-white mb-6 pl-4">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed pl-4">
                    To provide accessible and comprehensive health insurance solutions that protect families across India. 
                    We strive to make quality healthcare affordable and ensure financial security during medical emergencies.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-400 mb-2">1M+</div>
                    <div className="text-gray-300">Lives Insured</div>
                  </div>
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-400 mb-2">₹500Cr+</div>
                    <div className="text-gray-300">Claims Settled</div>
                  </div>
                </div>
              </div>

              {/* Vision Content */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                  <h2 className="text-3xl font-light text-white mb-6 pl-4">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed pl-4">
                    To become India's most trusted health insurance provider by delivering innovative solutions, 
                    exceptional service, and unwavering support to our customers in their time of need.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300">
                    <h3 className="text-xl font-medium text-white mb-4">Our Values</h3>
                    <ul className="space-y-3">
                      {[
                        "Customer-First Approach",
                        "Transparency in Operations",
                        "Innovation in Solutions",
                        "Reliability in Service"
                      ].map((value, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-16 grid md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Years of Excellence" },
                { number: "100+", label: "Cities Covered" },
                { number: "4.8/5", label: "Customer Rating" },
                { number: "30min", label: "Avg. Claim Processing" }
              ].map((stat, index) => (
                <div key={index} 
                  className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 
                            hover:bg-gray-800/80 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Form Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Section - Image and Tagline */}
              <div className="bg-blue-900 p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="mb-6">
                    <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4">Have Questions?</h3>
                  <p className="text-blue-200">
                    Our team is here to help you understand your health insurance options better. Ask us anything!
                  </p>
                </div>
              </div>

              {/* Right Section - Form */}
              <div className="p-12">
                <form onSubmit={handleFaqSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-blue-900 mb-1">Your Question</label>
                    <textarea
                      id="question"
                      name="question"
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                      placeholder="Type your question here..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    Submit Question
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="/health-checkup.jpg" 
                  alt="Annual Health Checkup" 
                  className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-2">Understanding Annual Health Checkups</h3>
                <p className="text-gray-400 mb-4">Learn about the importance of regular health checkups and how they contribute to preventive healthcare.</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm">5 min read</span>
                  <button className="text-white/80 hover:text-white transition-colors duration-200">Read More →</button>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="/family-coverage.jpg" 
                  alt="Family Health Coverage" 
                  className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-2">Family Health Coverage Guide</h3>
                <p className="text-gray-400 mb-4">Discover how to choose the right health insurance plan that protects your entire family.</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm">7 min read</span>
                  <button className="text-white/80 hover:text-white transition-colors duration-200">Read More →</button>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="/claim-process.jpg" 
                  alt="Claim Process" 
                  className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-2">Simplified Claim Process</h3>
                <p className="text-gray-400 mb-4">Step-by-step guide to filing and tracking your health insurance claims efficiently.</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm">4 min read</span>
                  <button className="text-white/80 hover:text-white transition-colors duration-200">Read More →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Products</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Health Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Life Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Car Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Insurance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>1800-123-4567</li>
                <li>support@ebs.com</li>
                <li>Mon-Sat: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 EBS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthInsurance;
