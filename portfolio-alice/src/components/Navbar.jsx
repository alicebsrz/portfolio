import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { texts, toggleLanguage, lang } = useLanguage();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  if (!texts) return null;

  return (
    <header className="header-wrapper">
      <nav className="navbar-container">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#projetos" className="nav-item" onClick={closeMenu}>{texts.navbar.projects}</a>
          </li>

          <li>
            <a href="#sobre-mim" className="nav-item" onClick={closeMenu}>{texts.navbar.about}</a>
          </li>
          
          <li>
            <a href="#faculdade" className="nav-item" onClick={closeMenu}>{texts.navbar.college}</a>
          </li>
          <li>
            <a href="#contato" className="nav-item" onClick={closeMenu}>{texts.navbar.contact}</a>
          </li>
        </ul>

        <button onClick={toggleLanguage} className="lang-btn-side" title="Mudar idioma">
          <Heart size={14} fill={lang === 'pt' ? "#000" : "#FFC0CB"} stroke="none" />
          <span className={lang === 'pt' ? 'lang-active' : 'lang-inactive'}>PT</span>
          <span className="lang-sep">|</span>
          <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;