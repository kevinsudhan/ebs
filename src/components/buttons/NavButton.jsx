const ChevronDownIcon = () => (
  <svg 
    className="w-3 h-3 ml-1 inline-block transition-transform duration-200" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19 9l-7 7-7-7" 
    />
  </svg>
);

const NavButton = ({ children, onClick, showChevron = true, className = '' }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center px-3 py-2 text-sm font-medium text-secondary hover:text-opacity-70 transition-colors duration-200 bg-white ${className}`}
  >
    {children}
    {showChevron && <ChevronDownIcon />}
  </button>
);

export default NavButton;
