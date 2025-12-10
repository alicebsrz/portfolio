# 🌸 **Portfólio — Alice Barbosa**  
### _Meu espaço digital para mostrar quem eu sou, o que construo e como penso tecnologia._

🔗 **Acesse o portfólio online:** https://aliceportfolio-dev.netlify.app/

---

## 🌐 **Visão Geral**
Este é o repositório do meu **portfólio profissional**, desenvolvido como uma **Single Page Application (SPA)** utilizando **React + Vite**, com foco na criação de uma experiência elegante, fluida e acolhedora.

Todo o design foi construído com **CSS Puro**, explorando animações, texturas e uma estética **cozy retro** — inspirada em papel, marca-texto e elementos minimalistas.

O objetivo é apresentar meus principais projetos, minhas habilidades técnicas e minha trajetória acadêmica de forma clara e interativa.

---

## ✨ **Principais Funcionalidades**
- Navegação suave com scroll e transições visuais  
- Carrossel infinito de projetos (scroll snapping + loop matemático)  
- Seção “Sobre Mim” com slides laterais  
- Tradução global PT/EN utilizando React Context API  
- Layouts avançados somente com CSS  
- Design coerente, estético e altamente responsivo  
- Formulário funcional de contato  

---

# 🛠️ **Tecnologias & Habilidades Utilizadas**

## 🎯 **1. Front-end (Core)**
- **React 18** — componentes funcionais, reutilizáveis e modulares  
- **Vite** — ambiente otimizado e rápido  
- **React Hooks**:
  - `useState` — modal, menu mobile, carrossel do Sobre Mim, idioma  
  - `useRef` — controle matemático do scroll no carrossel de projetos  
  - `useContext` — sistema de tradução global (i18n)  
- **JSX** — estrutura semântica integrada à lógica

---

## 🎨 **2. CSS Avançado (Zero Frameworks)**
- **CSS Variables** para centralizar paleta e design system  
- **Flexbox & CSS Grid** para layouts modernos  
- **CSS Scroll Snap** para carrosséis suaves  
- **Pseudo-elementos** (`::before`, `::after`)  
- **Animações com keyframes** e micro-interações  
- **Responsividade completa** com media queries (mobile first)  
- Criação de:
  - textura de papel  
  - linhas de caderno  
  - cards com sombra dura (soft brutalism)  
  - destaques com marca-texto  

---

## 🧠 **3. Arquitetura & Lógica**
- **Context API** — i18n sem prop drilling  
- **Renderização condicional** — modais e galerias inteligentes  
- **Manipulação de arrays** com `.map()`  
- **Algoritmo de loop infinito** para carrossel  
- Organização limpa em componentes e dados externos  

---

## 🚀 **4. Deploy & DevOps**
- **Git & GitHub** — versionamento e commits semânticos  
- **Netlify (CI/CD)** — deploy automático e otimizado  
- Resolução de erros comuns de build (ENOENT, caminhos relativos/absolutos)  
- Configuração de `_redirects` para SPA

---

## 🎨 **5. UI/UX – Estética Cozy Retro**
- Identidade visual baseada em:
  - rosa claro + bege  
  - sombras marcadas  
  - texturas de papel  
  - marca-texto  
- Micro-interações suaves  
- Acessibilidade: contraste adequado, tipografia legível  
- Experiência visual consistente e harmônica  

---

# 📌 **Resumo do Projeto**
O **Portfólio Interativo** demonstra:

- domínio de **React e CSS avançado**  
- capacidade de criar experiências visuais únicas sem frameworks  
- senso estético forte e coerente  
- responsabilidade com arquitetura, organização e deploy  
- visão completa de Front-end + UI/UX  

Ele é mais que uma vitrine:  
é uma demonstração clara de como eu penso, estruturo e construo interfaces.

---

# 📁 **Estrutura Geral (Simplificada)**
src/
├── assets/ # imagens, icons, vídeos
├── components/ # Navbar, Hero, Projects, Footer, etc.
├── context/ # i18n (Context API)
├── data/ # dados dos projetos, skills, etc.
├── styles/ # css global e variáveis
└── App.jsx # estrutura principal da SPA


---

# 🚀 **Como Rodar o Projeto**

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/seu-portfolio.git

# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev

# Build de produção
npm run build

🌸 Deploy

O projeto está hospedado no Netlify com deploy contínuo:
https://aliceportfolio-dev.netlify.app/
