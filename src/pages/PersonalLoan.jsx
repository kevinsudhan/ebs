import React from 'react';
import personalLoanBg from '../assets/images/backgrounds/personalloan.jpeg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PersonalLoan = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalCards = 7;
  const cardWidth = 477;
  const containerWidth = 960;
  const cardsToShow = 2;

  React.useEffect(() => {
    // Auto-play functionality
    const interval = setInterval(() => {
      const container = document.querySelector('.scroll-container');
      if (container) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + cardsToShow) % totalCards;
          const scrollAmount = containerWidth;
          
          if (prevIndex + cardsToShow >= totalCards) {
            // When reaching the end, first scroll to the cloned cards
            container.scrollBy({ 
              left: scrollAmount, 
              behavior: 'smooth',
              duration: 1300,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
            
            // Then quickly jump back to the start after animation
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: 'auto' });
            }, 1300);
          } else {
            container.scrollBy({ 
              left: scrollAmount, 
              behavior: 'smooth',
              duration: 1300,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
          }
          
          return nextIndex;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (direction) => {
    const container = document.querySelector('.scroll-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;
      
      setCurrentIndex((prevIndex) => {
        let nextIndex;
        if (direction === 'left') {
          nextIndex = prevIndex - cardsToShow;
          if (nextIndex < 0) {
            // When going left from the start
            nextIndex = totalCards + nextIndex;
            // First jump to the end
            container.scrollTo({ 
              left: container.scrollWidth - containerWidth * 2, 
              behavior: 'auto' 
            });
            // Then scroll one position left
            setTimeout(() => {
              container.scrollBy({ 
                left: scrollAmount,
                behavior: 'smooth',
                duration: 1300,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
              });
            }, 50);
          } else {
            container.scrollBy({ 
              left: scrollAmount,
              behavior: 'smooth',
              duration: 1300,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
          }
        } else {
          nextIndex = (prevIndex + cardsToShow) % totalCards;
          if (prevIndex + cardsToShow >= totalCards) {
            // When reaching the end, first scroll to cloned cards
            container.scrollBy({ 
              left: scrollAmount,
              behavior: 'smooth',
              duration: 1300,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
            // Then quickly jump back to start
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: 'auto' });
            }, 1300);
          } else {
            container.scrollBy({ 
              left: scrollAmount,
              behavior: 'smooth',
              duration: 1300,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
          }
        }
        return nextIndex;
      });
    }
  };

  // Create array with original cards plus cloned cards for smooth transition
  const cards = [
    ...Array(totalCards).keys(),
    0, 1 // Clone first two cards
  ];

  const sampleLoans = [
    {
      name: "Starter Loan",
      amount: "Up to ₹5 Lakhs",
      interestRate: "10.49%",
      tenure: "12-36 months",
      emi: "₹11,111",
      features: ["Quick approval", "Minimal documentation", "No collateral"]
    },
    {
      name: "Premium Loan",
      amount: "Up to ₹20 Lakhs",
      interestRate: "11.49%",
      tenure: "12-48 months",
      emi: "₹22,222",
      features: ["Flexible repayment", "Higher limits", "Special benefits"]
    },
    {
      name: "Elite Loan",
      amount: "Up to ₹40 Lakhs",
      interestRate: "12.49%",
      tenure: "12-60 months",
      emi: "₹33,333",
      features: ["Best rates", "Maximum flexibility", "Priority processing"]
    }
  ];

  const commonUses = [
    {
      title: "Debt Consolidation",
      description: "Combine multiple high-interest debts into a single, manageable monthly payment with potentially lower interest rates.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Home Improvements",
      description: "Transform your living space with renovations, repairs, or upgrades that add value to your property.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Medical Expenses",
      description: "Cover unexpected medical costs, planned procedures, or healthcare expenses not covered by insurance.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Education",
      description: "Invest in your future through education, professional development courses, or skill enhancement programs.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: "Wedding",
      description: "Plan your dream wedding without compromise, covering venue, catering, decorations, and other celebrations.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Business",
      description: "Grow your business with inventory purchases, equipment upgrades, or working capital for operations.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Overview Section */}
      <section 
        className="min-h-[600px] relative flex items-center justify-center py-24"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.8)), url(${personalLoanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl font-light text-white mb-3 tracking-tight">
                Personal <span className="font-medium">Loan</span>
              </h1>
              <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                Streamlined financing for life's important moments, tailored to your needs
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-light hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[200px]">
                Start Application
              </button>
              <button className="bg-transparent text-white px-8 py-3 rounded-lg text-lg font-light border border-white/30 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm min-w-[200px]">
                Learn More
              </button>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-white/90 font-medium">Quick Approval</p>
                <p className="text-white/70 text-sm">Within 24 hours</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-white/90 font-medium">Flexible Terms</p>
                <p className="text-white/70 text-sm">Up to 60 months</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-white/90 font-medium">Competitive Rates</p>
                <p className="text-white/70 text-sm">Starting at 8.99%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gray-900"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-light text-white mb-8 text-center"
          >
            Common <span className="font-medium">Uses</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonUses.map((use, index) => {
              const [ref, inView] = useInView({
                threshold: 0.2,
                triggerOnce: true
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {use.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{use.title}</h3>
                  <p className="text-gray-400 mb-3">{use.description}</p>
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                      <span>Lower overall interest rates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                      <span>Simplified monthly payments</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Popular Loan Offers Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-light text-white mb-8 text-center">Popular Loan Offers</h2>
          
          {/* Slider Container */}
          <div className="relative px-4">
            {/* Scrollable Container */}
            <div 
              className="scroll-container overflow-x-hidden flex gap-6 py-4 snap-x snap-mandatory mx-auto"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth',
                width: containerWidth + 'px',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
                scrollSnapAlign: 'start',
                transition: 'all 1300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {cards.map((cardIndex, index) => (
                <div 
                  key={index}
                  className="flex-none snap-center"
                  style={{ 
                    width: cardWidth + 'px',
                    scrollSnapAlign: 'start',
                    transition: 'transform 1300ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl transform transition-all duration-1300 hover:scale-[1.02] hover:shadow-2xl h-full">
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-light text-white">Loan Title</h3>
                        <p className="text-blue-400 text-base mt-1">Subtitle here</p>
                      </div>
                      <div className="bg-blue-600/20 rounded-full p-3">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Loan Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-base">Amount Range</span>
                        <span className="text-white font-medium text-base">₹5L - ₹40L</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-base">Interest Rate</span>
                        <span className="text-white font-medium text-base">10.5% p.a</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-base">Tenure</span>
                        <span className="text-white font-medium text-base">1 - 5 Years</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-300 text-base">
                        <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Quick Approval
                      </div>
                      <div className="flex items-center text-gray-300 text-base">
                        <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Minimal Documentation
                      </div>
                      <div className="flex items-center text-gray-300 text-base">
                        <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Flexible Repayment
                      </div>
                    </div>

                    {/* Apply Button */}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-lg text-base font-medium">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button 
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 transition-all duration-300 group"
                onClick={() => handleScroll('left')}
              >
                <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 transition-all duration-300 group"
                onClick={() => handleScroll('right')}
              >
                <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Inquiry Form Section */}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-light text-white mb-4">
                    Unlock Your Financial
                    <br />
                    <span className="font-medium">Possibilities Today</span>
                  </h2>
                  <p className="text-blue-200 text-lg mb-8">
                    Get personalized loan offers tailored to your needs in just a few minutes
                  </p>
                  <ul className="space-y-3 text-blue-200">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Quick approval process
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Competitive interest rates
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Flexible repayment options
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Section - Form */}
              <div className="bg-white p-12">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-light text-blue-900 mb-2">Find Your Best Offer</h3>
                  <p className="text-blue-600 mb-8">Fill in your details below</p>

                  <form className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-blue-900 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-blue-900 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    {/* Loan Amount */}
                    <div>
                      <label htmlFor="loanAmount" className="block text-sm font-medium text-blue-900 mb-1">
                        Required Loan Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-blue-700">₹</span>
                        <input
                          type="number"
                          id="loanAmount"
                          name="loanAmount"
                          className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="Enter amount"
                          min="50000"
                          max="4000000"
                          required
                        />
                      </div>
                      <p className="mt-1 text-xs text-blue-600">Min: ₹50,000 - Max: ₹40,00,000</p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-sm hover:shadow-md"
                    >
                      Get Loan Offers
                    </button>

                    {/* Privacy Note */}
                    <p className="text-xs text-center text-blue-700">
                      By submitting this form, you agree to our{' '}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
                      <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Personal Loans Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-white mb-12 text-center">Sample Loan Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleLoans.map((loan, index) => (
              <div key={index} className="w-full">
                <div className="h-full bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group flex flex-col">
                  {/* Loan Amount */}
                  <div className="relative mb-6">
                    <div className="absolute -top-3 left-0 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      Sample Plan {index + 1}
                    </div>
                    <div className="flex items-baseline mt-4">
                      <span className="text-3xl font-bold text-white">₹500000</span>
                      <span className="ml-1 text-gray-400 text-sm">Lakhs</span>
                    </div>
                  </div>

                  {/* Loan Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-800/50">
                      <span className="text-gray-400 text-sm">Interest Rate</span>
                      <span className="text-white font-semibold text-sm">{loan.interestRate}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-800/50">
                      <span className="text-gray-400 text-sm">Tenure</span>
                      <span className="text-white font-semibold text-sm">{loan.tenure}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-800/50">
                      <span className="text-gray-400 text-sm">EMI</span>
                      <span className="text-white font-semibold text-sm">{loan.emi}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-center text-gray-300 text-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 group-hover:bg-blue-500/20 transition-colors duration-300">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      Quick Processing
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 group-hover:bg-blue-500/20 transition-colors duration-300">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Minimal Documentation
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 group-hover:bg-blue-500/20 transition-colors duration-300">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Flexible Repayment
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm font-semibold tracking-wide transform hover:-translate-y-0.5 mt-6">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8">Apply now and get your loan approved within 24 hours</p>
          <button className="bg-white text-blue-600 px-10 py-3 rounded-lg text-lg font-light hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md">
            Apply Now
          </button>
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
                <li><a href="#" className="hover:text-white transition-colors">Personal Loans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Loans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home Loans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education Loans</a></li>
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

export default PersonalLoan;
