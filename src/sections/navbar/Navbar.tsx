"use client"
import '../../../app/globals.css'; 
import { useState } from 'react';
import { NavbarItems } from './navbarItems/NavbarItems';

const Navbar: React.FC = ({ }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  
  const [isOpenGameModal, setOpenGameModal] = useState<boolean>(false);
  const toggleIsGameModalOpen = () => setOpenGameModal(!isOpenGameModal);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Eric's Portfolio
          </a>

          <button
            onClick={toggleIsOpen}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavbarItems onPlayGameClick={toggleIsGameModalOpen} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavbarItems onClick={toggleIsOpen} onPlayGameClick={toggleIsGameModalOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;