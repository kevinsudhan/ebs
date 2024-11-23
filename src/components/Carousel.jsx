import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import creditCardImg from '../assets/images/backgrounds/Sitemap Whiteboard in Green Purple Basic Style.png';
import personalLoanImg from '../assets/images/backgrounds/10693051.jpg';
import homeLoanImg from '../assets/images/backgrounds/10693057.jpg';

const slides = [
  {
    mainText: "Empower Your Wallet, Unlock Your World!",
    subText: "Need a Credit Card? Contact Us Today for Tailored Solutions!",
    image: creditCardImg,
  },
  {
    mainText: "Your dreams, our trust. Personal loans made simple",
    subText: "Customizable repayment options and optimized interest rates to finance your next major purchase or planned travel.",
    image: personalLoanImg,
  },
  {
    mainText: "Building dreams, one home at a time",
    subText: "From application to approval, we streamline your journey to homeownership with competitive rates and expert guidance.",
    image: homeLoanImg,
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div className="relative h-[600px] overflow-hidden mt-16">
      {/* Slides */}
      <div
        className="h-full w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.mainText}
                className="w-full h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center max-w-4xl mx-auto px-8">
                <div className="backdrop-blur-md bg-black/30 p-8 rounded-2xl shadow-lg border border-white/10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                    {slide.mainText}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 drop-shadow-md">
                    {slide.subText}
                  </p>
                  <button className="mt-6 px-6 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-200 cursor-pointer z-20"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-4 w-4 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-200 cursor-pointer z-20"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-4 w-4 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
