"usr client"

import { navbarLinks } from "./data";
import { NavLink, NavbarItemsProps } from "./types";


export const NavbarItems: React.FC<NavbarItemsProps> = ({ onClick , onPlayGameClick }) => (
    <ul className="nav-ul">
      {navbarLinks.map((item: NavLink) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a" onClick={onClick}>
            {item.name}
          </a>
        </li>
      ))}
      
      <li className="nav-li">
        <button
          onClick={onPlayGameClick}
          className="nav-li_a text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Play Game
        </button>
      </li>
    </ul>
  );