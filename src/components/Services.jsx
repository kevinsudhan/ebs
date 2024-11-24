import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CreditCardIcon, 
  HomeIcon, 
  BriefcaseIcon, 
  UserIcon, 
  ClockIcon,
  GiftIcon,
  BuildingOfficeIcon,
  ArrowPathIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "Personal Loan",
    description: "Quick personal loans with competitive interest rates",
    icon: UserIcon,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    category: "loans",
    href: "/personal-loan"
  },
  {
    title: "Credit Card",
    description: "Exclusive rewards and benefits with our credit cards",
    icon: CreditCardIcon,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    category: "cards"
  },
  {
    title: "Business Loan",
    description: "Empower your business growth with flexible financing",
    icon: BriefcaseIcon,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    category: "loans"
  },
  {
    title: "Short Term Personal Loan",
    description: "Quick funds for immediate needs",
    icon: ClockIcon,
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=800&q=80",
    category: "loans"
  },
  {
    title: "Home Loan",
    description: "Make your dream home a reality",
    icon: HomeIcon,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    category: "loans"
  },
  {
    title: "Gold Loan",
    description: "Instant loans against your gold assets",
    icon: GiftIcon,
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    category: "loans"
  },
  {
    title: "Loan Against Property",
    description: "Leverage your property for financial flexibility",
    icon: BuildingOfficeIcon,
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80",
    category: "loans"
  },
  {
    title: "Home Loan Balance Transfer",
    description: "Switch to better rates and save more",
    icon: ArrowPathIcon,
    image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=800&q=80",
    category: "loans"
  },
  {
    title: "Health Insurance",
    description: "Comprehensive coverage for you and your family",
    icon: HeartIcon,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    category: "insurance",
    href: "/health-insurance"
  },
  {
    title: "Life Insurance",
    description: "Secure your family's future",
    icon: UserGroupIcon,
    image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&w=800&q=80",
    category: "insurance"
  }
];

const ServiceCard = ({ service, index }) => {
  const CardContent = () => (
    <>
      <div className="relative h-36 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3 bg-white/90 p-1.5 rounded-lg">
          <service.icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      
      <div className="p-4 bg-gray-50">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">
          {service.title}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-2">
          {service.description}
        </p>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {service.href ? (
        <Link to={service.href} className="block">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </motion.div>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'loans', name: 'Loans' },
    { id: 'cards', name: 'Cards' },
    { id: 'insurance', name: 'Insurance' }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Comprehensive financial solutions tailored to your needs
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
