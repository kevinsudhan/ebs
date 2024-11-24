import React from 'react';

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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Overview Section */}
      <section className="pt-16 pb-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-white mb-3">Personal Loan</h1>
            <p className="text-lg text-gray-300 font-light mb-8">Streamlined financing for life's important moments</p>
            <button className="bg-blue-600 text-white px-10 py-3 rounded-lg text-lg font-light hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md">
              Start Application
            </button>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-gray-700 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-medium text-white mb-2">Simple Process</h3>
              <p className="text-sm text-gray-300">Digital application with minimal docs</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-medium text-white mb-2">24hr Approval</h3>
              <p className="text-sm text-gray-300">Quick fund disbursement</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-medium text-white mb-2">Flexible Terms</h3>
              <p className="text-sm text-gray-300">Customizable repayment options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-8">
            <h2 className="text-2xl font-light text-white mb-6">Common Uses</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Debt consolidation
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Home improvements
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Medical expenses
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Education funding
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Wedding expenses
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Business expansion
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-white mb-8 text-center">Sample Loan Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter Loan",
                amount: "Up to ₹5 Lakhs",
                interest: "10.49%",
                tenure: "12-36 months",
                features: ["Quick approval", "Minimal documentation", "No collateral"]
              },
              {
                name: "Premium Loan",
                amount: "Up to ₹20 Lakhs",
                interest: "11.49%",
                tenure: "12-48 months",
                features: ["Flexible repayment", "Higher limits", "Special benefits"]
              },
              {
                name: "Elite Loan",
                amount: "Up to ₹40 Lakhs",
                interest: "12.49%",
                tenure: "12-60 months",
                features: ["Best rates", "Maximum flexibility", "Priority processing"]
              }
            ].map((loan, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 overflow-hidden">
                <div className="bg-blue-600 text-white p-4 text-center">
                  <h3 className="text-xl font-medium">{loan.name}</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-light text-white mb-1">{loan.amount}</div>
                    <div className="text-sm text-blue-200">Starting at {loan.interest} p.a.</div>
                  </div>
                  <div className="text-sm text-blue-200 mb-4">
                    <div className="mb-2">Tenure: {loan.tenure}</div>
                    <ul className="space-y-1">
                      {loan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
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
