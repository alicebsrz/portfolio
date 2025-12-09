import React, { useState } from 'react';
import { Star } from 'lucide-react'; 
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { texts, toggleLanguage, lang } = useLanguage();
  // 1. Estado para controlar se o menu mobile está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  if (!texts) return null; 

  // Função para abrir/fechar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-wrapper">
      
      {/* 2. Botão Hamburguer (Só aparece no mobile via CSS) */}
      <button 
        className="menu-toggle" 
        onClick={toggleMenu} 
        aria-label="Abrir menu"
      >
        {/* As 3 listras do ícone */}
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* A Pílula Bege (Navbar) */}
      <nav className="navbar-container">
        {/* 3. Adicionamos a classe 'active' se o estado isOpen for true */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          
          {/* Ao clicar num link, fechamos o menu automaticamente */}
          <li><a href="#projetos" className="nav-item" onClick={() => setIsOpen(false)}>{texts.navbar.projects}</a></li>
          <li><a href="#sobre-mim" className="nav-item" onClick={() => setIsOpen(false)}>{texts.navbar.about}</a></li>
          <li><a href="#faculdade" className="nav-item" onClick={() => setIsOpen(false)}>{texts.navbar.college}</a></li>
          <li><a href="#contato" className="nav-item" onClick={() => setIsOpen(false)}>{texts.navbar.contact}</a></li>
        </ul>

        {/* O Botão de Idioma Lateral */}
        <button onClick={toggleLanguage} className="lang-btn-side" title="Mudar idioma">
          <Star size={14} fill={lang === 'pt' ? "#FFF" : "none"} stroke={lang === 'pt' ? "none" : "currentColor"} /> 
          <div className="lang-text">
            <span className={lang === 'pt' ? 'lang-active' : 'lang-inactive'}>PT</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
          </div>
        </button>
      </nav>

    </header>
  );
};

export default Navbar;