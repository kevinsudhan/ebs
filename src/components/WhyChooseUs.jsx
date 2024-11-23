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
    textColor: 'text-blue-600',
  },
  {
    name: 'Competitive Rates',
    description: 'Best-in-class interest rates for loans and deposits with transparent pricing.',
    icon: CurrencyDollarIcon,
    bgColor: 'bg-green-600',
    textColor: 'text-green-600',
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock customer service to assist you anytime, anywhere.',
    icon: ClockIcon,
    bgColor: 'bg-purple-600',
    textColor: 'text-purple-600',
  },
  {
    name: 'Expert Team',
    description: 'Experienced financial advisors to guide your investment decisions.',
    icon: UserGroupIcon,
    bgColor: 'bg-red-600',
    textColor: 'text-red-600',
  },
];

const RoadmapPoint = ({ feature, index, total }) => {
  const isLast = index === total - 1;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Connection Line */}
      {!isLast && (
        <div 
          className={`absolute top-24 ${isEven ? 'left-[calc(50%-1px)]' : 'left-[calc(50%-1px)]'} w-0.5 h-24`}
          style={{
            background: 'linear-gradient(to bottom, #CBD5E1, transparent)',
          }}
        />
      )}
      
      <div className={`flex items-center gap-8 mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Content Side */}
        <div className={`w-1/2 ${isEven ? 'text-right' : 'text-left'} px-4`}>
          <div className={`inline-block bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 ${isEven ? 'ml-auto' : 'mr-auto'}`}>
            <h3 className={`text-lg font-bold ${feature.textColor} mb-2`}>
              {feature.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Icon Side */}
        <div className="w-24 flex justify-center">
          <div className={`relative flex-shrink-0 w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
            <feature.icon className="w-8 h-8 text-white" />
            <div className="absolute -right-1 -top-1 w-6 h-6 rounded-full bg-white text-sm font-bold flex items-center justify-center shadow-sm">
              {index + 1}
            </div>
          </div>
        </div>

        {/* Empty Side for Balance */}
        <div className="w-1/2 px-4" />
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Journey Together
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Follow our roadmap to financial success with comprehensive banking solutions tailored for you.
          </p>
        </motion.div>

        <div className="relative">
          {features.map((feature, index) => (
            <RoadmapPoint 
              key={feature.name} 
              feature={feature} 
              index={index}
              total={features.length}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto group">
            Start Your Journey
            <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
