import NavLink from '../common/NavLink';
import NavButton from '../buttons/NavButton';

const MobileMenu = ({ menuItems, activeMenu, onMenuClick }) => (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
      {Object.entries(menuItems).map(([menu, items]) => (
        <div key={menu} className="space-y-1">
          <NavButton
            onClick={() => onMenuClick(menu)}
            className="w-full text-left"
          >
            {menu}
          </NavButton>
          
          {activeMenu === menu && (
            <div className="pl-4 space-y-1">
              {items.map((item) => (
                <NavLink
                  key={item}
                  to={`/${menu.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block py-2"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default MobileMenu;
