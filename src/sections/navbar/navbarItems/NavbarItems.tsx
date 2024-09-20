"use client";

import { memo, useMemo } from 'react';
import { navbarLinks } from "./data";
import { NavLink, NavbarItemsProps } from "./types";

const NavbarItems: React.FC<NavbarItemsProps> = ({ onClick, onPlayGameClick }) => {

  /* eslint-disable react-hooks/exhaustive-deps */
  const navItems = useMemo(() => (
    <>
      {navbarLinks.map((item: NavLink) => (
        <li key={item.id} className="nav-li" onClick={onClick}>
          <a
            href={item.href}
            className="nav-li_a"
          >
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
    </>
      // eslint-disable-next-line react-hooks/exhaustive-deps
  ), []);

  return (
    <ul className="nav-ul">
      {navItems}
    </ul>
  );
};

export default memo(NavbarItems);
