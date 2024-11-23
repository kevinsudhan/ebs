import { Link } from 'react-router-dom';

const NavLink = ({ to, children, className = '', onClick }) => (
  <Link
    to={to}
    className={`text-sm font-medium text-secondary hover:text-opacity-70 transition-colors duration-200 bg-white ${className}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default NavLink;
