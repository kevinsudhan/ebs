import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import companyLogo from "../assets/images/backgrounds/Untitled_2.png";

const menuItems = [
  {
    name: "Loans",
    href: "#",
    submenu: [
      { name: "Personal Loans", href: "#" },
      { name: "Business Loan", href: "#" },
      { name: "Home Loan", href: "#" },
      { name: "Home Loan Balance Transfer", href: "#" },
      { name: "Loan Against Property", href: "#" },
      { name: "Gold Loan", href: "#" },
    ],
  },
  {
    name: "Insurance",
    href: "#",
    submenu: [
      { name: "Health Insurance", href: "#" },
      { name: "Life Insurance", href: "#" },
    ],
  },
  {
    name: "EMI Calculator",
    href: "#",
    submenu: [
      { name: "Home Loan EMI Calculator", href: "#" },
      { name: "Personal Loan EMI Calculator", href: "#" },
      { name: "Business Loan EMI Calculator", href: "#" },
      { name: "Compound Interest Calculator", href: "#" },
      { name: "Loan Prepayment Calculator", href: "#" },
      { name: "RD Calculator", href: "#" },
      { name: "FD Calculator", href: "#" },
    ],
  },
  {
    name: "Credit Cards",
    href: "#",
    submenu: [
      { name: "Axis Bank Credit Card", href: "#" },
      { name: "HDFC Credit Card", href: "#" },
      { name: "SBI Card", href: "#" },
      { name: "IDFC Bank Credit Card", href: "#" },
      { name: "American Express Credit Card", href: "#" },
      { name: "AU Bank Credit Card", href: "#" },
      { name: "HSBC Credit card", href: "#" },
      { name: "ICICI Bank Credit Card", href: "#" },
      { name: "Yes Bank Credit Card", href: "#" },
    ],
  },
  {
    name: "Credit Score",
    href: "#",
  },
  {
    name: "Blogs",
    href: "#",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <nav className="bg-[#284a8c] fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              className="h-8 w-auto"
              src={companyLogo}
              alt="EBS Logo"
            />
            <span className="text-white font-semibold text-lg">
              Everyday Banking Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {menuItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => toggleMenu(index)}
                    className="flex items-center text-white hover:text-opacity-80 py-2 text-sm font-medium transition-all duration-200 bg-transparent"
                  >
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:text-opacity-80 py-2 text-sm font-medium transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.submenu && activeMenu === index && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#284a8c] transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Sign In Button */}
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border-2 border-white text-sm font-medium rounded-lg text-white hover:text-[#284a8c] transition-all duration-300 bg-transparent"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-opacity-80 transition-colors duration-200 bg-transparent"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10">
            <div className="px-4 py-3 space-y-3">
              {menuItems.map((item, index) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleMenu(index)}
                        className="flex items-center justify-between w-full text-white hover:text-opacity-80 text-base font-medium bg-transparent"
                      >
                        {item.name}
                        <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${activeMenu === index ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeMenu === index && (
                        <div className="mt-2 pl-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block py-2 text-sm text-white/80 hover:text-white transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-white hover:text-opacity-80 text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Sign In Button */}
              <Link
                to="/login"
                className="block w-full mt-4 px-4 py-2.5 text-center text-sm font-medium text-[#284a8c] bg-transparent hover:bg-white hover:text-[#284a8c] transition-all duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
