import React, { useState, useRef } from 'react';
import { X, ExternalLink, Github, Layers, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import './Projects.css';

// --- SEUS DADOS ---
const projectsData = [
  {
    id: 1,
    title: "Athenia",
    category: "Hub Literário Full Stack",
    mainImage: "/img/athenia/main.png",
    galleryImages: [
      "/img/athenia/galeria1.png",
      "/img/athenia/galeria2.png",
      "/img/athenia/galeria3.png"
    ],
    videoUrl: null,
    tags: ["Full Stack", "Google Books API", "Site de Livros", "Dashboard"],
    description: "Uma plataforma inspirada em Athena, a deusa da sabedoria. Funciona como um hub literário pessoal onde o leitor acompanha seu progresso, descobre novos títulos via API e desbloqueia conquistas. O projeto combate a desorganização literária com um dashboard gamificado.",
    objective: "Estimular o hábito da leitura através de organização visual e gamificação. O foco foi criar um sistema completo onde o usuário gerencia 'estantes virtuais' (Lendo, Quero Ler, Lidos) e visualiza estatísticas de leitura.",
    techs: ["React", "Node.js", "MongoDB", "Express", "JWT", "Chart.js"],
    challenges: "A integração entre Frontend (Vercel) e Backend (Render) gerou desafios complexos de CORS e Deploy, que foram resolvidos com configurações de proxy e headers seguros. Além disso, implementar a autenticação via JWT e a lógica de 'Badges' gamificadas exigiu um gerenciamento de estado avançado.",
    repoLink: "https://github.com/alicebsrz/athenia-v2",
    liveLink: "https://athenia-gamma.vercel.app/"
  },
  {
    id: 2,
    title: "EducaKids",
    category: "Plataforma Educacional Interativa",
    mainImage: "/img/educakids/main.png",
    galleryImages: [
      "/img/educakids/galeria1.png",
      "/img/educakids/galeria2.png",
      "/img/educakids/galeria3.png"
    ],
    videoUrl: null,
    tags: ["React", "JavaScript", "Design Lúdico", "Gamificação", "Site Infantil", "UI/UX"],
    description: "Plataforma educativa criada do zero, unindo animações, design infantil e jogos interativos para tornar o aprendizado mais divertido. Inclui três jogos completos — memória, matemática e quiz histórico — com progressão, placares, mascotes e feedback em tempo real. Interface inspirada em livros de recortes e totalmente responsiva.",
    objective: "Transformar conteúdos educacionais em experiências lúdicas e intuitivas, acessíveis para crianças em fase de alfabetização.",
    techs: ["React", "JavaScript (ES6+)", "CSS3 (Flexbox, Grid, animações)", "HTML5", "Node.js", "Express.js", "API REST", "SPA Architecture"],
    challenges: "Criar uma interface intuitiva para crianças que ainda não leem fluentemente, implementar lógica de jogos em JavaScript e garantir responsividade com muitos elementos visuais e animações.",
    repoLink: "https://github.com/alicebsrz/educakids",
    liveLink: "https://educakids.me/"
  },
  {
    id: 3,
    title: "Aderia Cosméticos",
    category: "E-commerce Full Stack",
    mainImage: "/img/aderia/main.png",
    galleryImages: [
      "/img/aderia/galeria1.png",
      "/img/aderia/galeria2.png",
      "/img/aderia/galeria3.png",
      "/img/aderia/galeria4.png"
    ],
    videoUrl: null,
    tags: ["MongoDB", "JWT Auth", "UI/UX", "Site Comercial", "E-commerce"],
    description: "Aplicação full-stack completa simulando um e-commerce premium de cosméticos. Construído do zero — do design no Figma ao deploy — com catálogo dinâmico, páginas de produto, filtros avançados, galeria de imagens, autenticação segura via JWT e carrinho persistente por usuário. Experiência moderna com animações suaves e interface responsiva.",
    objective: "Criar uma aplicação profissional de e-commerce que demonstrasse domínio de full-stack, UI/UX, gerenciamento global de estado e comunicação cliente-servidor.",
    techs: ["React", "React Router", "Context API", "Styled-components", "Axios", "Framer Motion", "Node.js", "Express.js", "MongoDB + Mongoose", "JWT", "Bcrypt", "Vite"],
    challenges: "Implementar autenticação segura, modelar o banco de dados, integrar filtros do catálogo ao backend e equilibrar animações com performance no carregamento de imagens.",
    repoLink: "https://github.com/alicebsrz/aderia",
    liveLink: "https://aderia.vercel.app/"
  },
  {
    id: 4,
    title: "FinWise Lite",
    category: "Dashboard Financeiro & Estoque (Full Stack)",
    mainImage: "/img/finwise/main.png",
    galleryImages: [
      "/img/finwise/galeria1.png",
      "/img/finwise/galeria2.png",
      "/img/finwise/galeria3.png",
      "/img/finwise/galeria4.png",
      "/img/finwise/galeria5.png",
      "/img/finwise/galeria6.png"
    ],
    videoUrl: null,
    tags: ["TypeScript", "Prisma", "Dashboards", "Estoque", "Site Financeiro"],
    description: "Sistema completo de gestão financeira, estoque e análise logística. Desenvolvido como um monorepo full-stack em TypeScript, com dashboards analíticos, CRUDs completos, módulo de mensagens (CRM simulado), curva ABC automatizada e auditoria de movimentações. Estrutura pronta para multi-empresa (CompanyId).",
    objective: "Praticar arquitetura full-stack escalável, tipagem forte de ponta a ponta, modelagem de dados complexa e interação entre múltiplos módulos de negócio.",
    techs: ["React 18", "TypeScript", "Tailwind CSS", "Recharts", "React Router v6", "Axios", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "JWT Auth", "BCrypt.js", "Render", "Vercel", "Neon Tech"],
    challenges: "Implementar curva ABC com algoritmo próprio, modelar estoque com transações atômicas no Prisma, lidar com multi-tenancy (CompanyId), construir uma UI otimizada e resolver problemas de integração entre Render + Vercel + Postgres serverless.",
    repoLink: "https://github.com/alicebsrz/finwise",
    liveLink: "https://finwise-pearl-eta.vercel.app"
  }
];

const Projects = () => {
  const { texts, lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  if (!texts) return null;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="projetos" className="projects-section">
      
      {/* 1. Cabeçalho da Seção */}
      <div className="section-header">
        <Sparkles 
          className="absolute top-0 left-[20%] text-[#D38AA3] animate-bounce" 
          size={32} 
          style={{ animationDuration: '3s' }}
        />
        <h2 className="section-title">{lang === 'pt' ? 'Meus Projetos' : 'My Projects'}</h2>
        <Sparkles 
          className="absolute bottom-0 right-[20%] text-[#D38AA3] animate-pulse" 
          size={24} 
        />
        <p className="section-subtitle">Code • Design • Innovation</p>
      </div>

      {/* 2. Carrossel de Cards */}
      <div className="carousel-wrapper">
        <button className="nav-btn left" onClick={scrollLeft} aria-label="Anterior">
          <ChevronLeft size={32} color="#000" />
        </button>

        <div className="carousel-container" ref={carouselRef}>
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            {/* Imagem do Card */}
            <img src={project.mainImage} alt={project.title} className="card-image" />
            
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              
              {/* Chips de Tags */}
              <div className="card-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <button className="card-btn">{lang === 'pt' ? 'Ver +' : 'View +'}</button>
            </div>
          </div>
        ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight} aria-label="Próximo">
          <ChevronRight size={32} color="#000" />
        </button>
      </div>

      {/* 3. Modal de Detalhes (Aparece só se selectedProject existir) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              <X size={32} />
            </button>

            {/* Conteúdo do Modal */}
            <div className="modal-header">
              <img 
                src={selectedProject.mainImage} 
                alt={selectedProject.title} 
                className="modal-main-img" 
              />
              <h2>{selectedProject.title}</h2>
              <p className="modal-text" style={{ fontSize: '1.2rem', color: '#6B4F4F' }}>
                {texts.projects.projectsData[selectedProject.id - 1].description}
              </p>
            </div>

            {/* Seção de Vídeo (se existir) */}
            {selectedProject.videoUrl && (
              <div className="modal-section media-section">
                <h3>{lang === 'pt' ? '📽️ Vídeo de Demonstração' : '📽️ Demo Video'}</h3>
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="500"
                    src={selectedProject.videoUrl}
                    title={`${selectedProject.title} - ${lang === 'pt' ? 'Vídeo' : 'Video'}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* Seção de Galeria (se houver imagens) */}
            {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
              <div className="modal-section media-section">
                <h3>{lang === 'pt' ? '🖼️ Galeria' : '🖼️ Gallery'}</h3>
                <div className="gallery-grid">
                  {selectedProject.galleryImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`${selectedProject.title} - ${idx + 1}`} className="gallery-img" />
                  ))}
                </div>
              </div>
            )}

            <div className="modal-grid">
              <div className="modal-section">
                <h3><Layers size={20} style={{display:'inline', marginRight:'8px'}}/>{texts.projects.objective}</h3>
                <p className="modal-text">{texts.projects.projectsData[selectedProject.id - 1].objective}</p>
              </div>

              <div className="modal-section">
                <h3>🛠 {texts.projects.techs}</h3>
                <div className="card-tags" style={{ marginTop: '10px' }}>
                  {selectedProject.techs.map(tech => (
                    <span key={tech} className="tag" style={{ background: '#F3D0D7', color: '#6B4F4F' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section" style={{ gridColumn: '1 / -1' }}>
                <h3>{lang === 'pt' ? 'Desafios & Soluções' : 'Challenges & Solutions'}</h3>
                <p className="modal-text">{texts.projects.projectsData[selectedProject.id - 1].challenges}</p>
              </div>
            </div>

            {/* Links de Ação */}
            <div style={{ marginTop: '40px', display: 'flex', gap: '15px' }}>
              {selectedProject.id !== 1 && (
                <a href={selectedProject.liveLink} className="card-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ExternalLink size={18} /> {texts.projects.liveProject}
                </a>
              )}
              <a href={selectedProject.repoLink} className="card-btn" style={{ background: 'transparent', border: '2px solid #C04C78', color: '#C04C78', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Github size={18} /> {texts.projects.repository}
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;