import NavLink from '../common/NavLink';

const DropdownMenu = ({ items, parentMenu, onItemClick }) => (
  <div className="absolute left-0 mt-0 w-64 bg-white z-50">
    <div className="py-1">
      {items.map((item) => (
        <NavLink
          key={item}
          to={`/${parentMenu.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
          className="block px-4 py-2"
          onClick={onItemClick}
        >
          {item}
        </NavLink>
      ))}
    </div>
  </div>
);

export default DropdownMenu;
