import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  User,
  Code,
  Terminal,
  Cpu,
  Database,
  Layout,
  Server,
  Sparkles,
  Sprout,
  Heart,
  Brain,
  Zap,
  Users,
  CheckCircle2,
  Lightbulb,
  Star,
  Briefcase,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import './About.css';
import myPhoto from '../assets/alice-photo.jpg';

const About = () => {
  const { texts, lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!texts) return null;

  const TitleIcon = ({ icon: Icon }) => (
    <Icon size={32} strokeWidth={2.5} style={{ display: 'inline', marginBottom: '6px', marginRight: '10px', color: '#D38AA3' }} />
  );

  const slides = [
    {
      id: 0,
      title: (
        <>
          <TitleIcon icon={User} /> {texts.about.slide1.title}
        </>
      ),
      content: (
        <>
          <p className="slide-text">
            {lang === 'pt' ? (
              <>
                <strong>Sou Alice Barbosa</strong>, estudante de <strong>Engenharia de Computação na UERJ</strong>, apaixonada por tecnologia, inovação e criação de soluções que unem lógica, design e experiência do usuário.
                <br /><br />
                Atuo no desenvolvimento <strong>Full Stack</strong>, com foco crescente em interfaces interativas e arquitetura de software. Sou movida por desafios e busco sempre construir produtos que realmente façam a diferença, aplicando minha visão técnica e artística.
              </>
            ) : (
              <>
                <strong>I'm Alice Barbosa</strong>, a <strong>Computer Engineering student at UERJ</strong>, passionate about technology, innovation, and creating solutions that unite logic, design, and user experience.
                <br /><br />
                I work in <strong>Full Stack</strong> development, with growing focus on interactive interfaces and software architecture. I'm driven by challenges and always seek to build products that really make a difference, applying my technical and artistic vision.
              </>
            )}
          </p>
        </>
      ),
    },
    {
      id: 1,
      title: (
        <>
          <TitleIcon icon={Wrench} /> {texts.about.slide2.title}
        </>
      ),
      content: (
        <div style={{ width: '100%' }}>
          <div className="skill-category">
            <h4><Layout size={20} className="text-[#D38AA3]" style={{ display: 'inline', verticalAlign: 'middle' }} /> {texts.about.slide2.frontend}</h4>
            <div className="skills-grid">
              <span className="skill-badge">HTML5/CSS3</span>
              <span className="skill-badge">JavaScript (ES6+)</span>
              <span className="skill-badge">React & Vite</span>
              <span className="skill-badge">Context API</span>
              <span className="skill-badge">Tailwind</span>
              <span className="skill-badge">UI/UX Design</span>
            </div>
          </div>

          <div className="skill-category">
            <h4><Server size={20} className="text-[#D38AA3]" style={{ display: 'inline', verticalAlign: 'middle' }} /> {texts.about.slide2.backend}</h4>
            <div className="skills-grid">
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express</span>
              <span className="skill-badge">Python (Flask)</span>
              <span className="skill-badge">C / C++</span>
            </div>
          </div>

          <div className="skill-category">
            <h4><Database size={20} className="text-[#D38AA3]" style={{ display: 'inline', verticalAlign: 'middle' }} /> {texts.about.slide2.data} & Tools</h4>
            <div className="skills-grid">
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">Git/GitHub</span>
              <span className="skill-badge">Figma</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: (
        <>
          <TitleIcon icon={Sprout} /> {texts.about.slide3.title}
        </>
      ),
      content: (
        <div className="list-grid">
          <div className="list-item"><Users size={20} color="#D38AA3" /> {lang === 'pt' ? 'Comunicação & Equipe' : 'Communication & Teamwork'}</div>
          <div className="list-item"><CheckCircle2 size={20} color="#D38AA3" /> {lang === 'pt' ? 'Organização & Proatividade' : 'Organization & Proactivity'}</div>
          <div className="list-item"><Zap size={20} color="#D38AA3" /> {lang === 'pt' ? 'Aprendizado Rápido' : 'Fast Learning'}</div>
          <div className="list-item"><Lightbulb size={20} color="#D38AA3" /> {lang === 'pt' ? 'Criatividade' : 'Creativity'}</div>
          <div className="list-item"><Brain size={20} color="#D38AA3" /> {lang === 'pt' ? 'Resolução de Problemas' : 'Problem Solving'}</div>
          <div className="list-item"><Heart size={20} color="#D38AA3" /> {lang === 'pt' ? 'Compromisso com Metas' : 'Goal Commitment'}</div>
        </div>
      ),
    },
    {
      id: 3,
      title: (
        <>
          <TitleIcon icon={Sparkles} /> {texts.about.slide4.title}
        </>
      ),
      content: (
        <>
          <div className="skill-category">
            <h4><Star size={18} className="text-[#D38AA3]" style={{ display: 'inline' }} /> {lang === 'pt' ? 'Interesses' : 'Interests'}</h4>
            <div className="skills-grid">
              <span className="skill-badge">{lang === 'pt' ? 'Engenharia de Software' : 'Software Engineering'}</span>
              <span className="skill-badge">{lang === 'pt' ? 'Inovação Tecnológica' : 'Tech Innovation'}</span>
              <span className="skill-badge">{lang === 'pt' ? 'Sistemas Embarcados' : 'Embedded Systems'}</span>
              <span className="skill-badge">{lang === 'pt' ? 'Projetos Multidisciplinares' : 'Multidisciplinary Projects'}</span>
            </div>
          </div>

          <div style={{ marginTop: '30px', background: 'rgba(255,255,255,0.6)', padding: '20px', borderRadius: '15px', border: '2px dashed #D38AA3' }}>
            <h4 style={{ fontFamily: 'Jersey 10', fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Briefcase size={24} color="#D38AA3" /> {lang === 'pt' ? 'Disponibilidade' : 'Availability'}
            </h4>
            <p className="slide-text" style={{ fontSize: '1rem' }}>
              {lang === 'pt' ? (
                <>
                  Aberta a oportunidades de freelance e projetos nas áreas de desenvolvimento de software, front-end, back-end, UI/UX e aplicações interativas.
                  <br /><strong>Vamos criar algo juntos?</strong>
                </>
              ) : (
                <>
                  Open to freelance opportunities and projects in software development, front-end, back-end, UI/UX, and interactive applications.
                  <br /><strong>Let's create something together?</strong>
                </>
              )}
            </p>
          </div>
        </>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="sobre-mim" className="about-section">
      <h2 className="about-title">{lang === 'pt' ? 'Sobre Mim' : 'About Me'}</h2>

      <div className="about-card">
        <div className="about-photo-container">
          <img src={myPhoto} alt="Foto da Alice" className="about-photo" />
        </div>

        <button className="about-arrow left" onClick={prevSlide}>
          <ChevronLeft size={28} color="#000" />
        </button>
        <button className="about-arrow right" onClick={nextSlide}>
          <ChevronRight size={28} color="#000" />
        </button>

        <div className="slide-content">
          <h3 className="slide-title">{slides[currentSlide].title}</h3>
          {slides[currentSlide].content}
        </div>

        <div className="dots-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;