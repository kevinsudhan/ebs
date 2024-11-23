import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Secure Banking',
    description: 'Advanced encryption and security protocols to protect your financial data.',
    icon: ShieldCheckIcon,
    bgColor: 'bg-blue-600',
    align: 'right'
  },
  {
    name: 'Competitive Rates',
    description: 'Best-in-class interest rates for loans and deposits with transparent pricing.',
    icon: CurrencyDollarIcon,
    bgColor: 'bg-green-600',
    align: 'left'
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock customer service to assist you anytime, anywhere.',
    icon: ClockIcon,
    bgColor: 'bg-purple-600',
    align: 'right'
  },
  {
    name: 'Expert Team',
    description: 'Experienced financial advisors to guide your investment decisions.',
    icon: UserGroupIcon,
    bgColor: 'bg-red-600',
    align: 'left'
  },
];

const FeatureCard = ({ feature, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex items-center max-w-4xl mx-auto mb-12 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col`}
    >
      {/* Icon Section */}
      <div className="w-full md:w-1/3 flex justify-center md:px-4">
        <div className={`${feature.bgColor} w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-3`}>
          <feature.icon className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-2/3 md:px-4">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 backdrop-blur-sm">
          <div className="flex items-center mb-3">
            <h3 className="text-xl font-bold text-gray-900">
              {feature.name}
            </h3>
            <div className={`h-1 w-12 ${feature.bgColor} rounded-full ml-3`}></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {feature.description}
          </p>
          <div className="mt-4 flex items-center text-sm">
            <button className={`${feature.bgColor} text-white px-4 py-1.5 rounded-lg font-medium hover:opacity-90 transition-all duration-300 text-sm flex items-center group`}>
              Learn More
              <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Experience banking excellence with our comprehensive suite of services and dedicated support.
          </p>
        </motion.div>

        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.name} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center">
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
