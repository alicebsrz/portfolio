import React from 'react';
import { Paperclip, Recycle, Cpu, FileText, Globe, Video, Camera } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import './College.css';

const College = () => {
  const { texts, lang } = useLanguage();

  if (!texts) return null;

  return (
    <section id="faculdade" className="college-section">
      <div className="college-header">
        <h2 className="college-title">{texts.college.title}</h2>
      </div>

      <div className="college-content">
        {/* ESQUERDA: RELATÓRIO (Texto) */}
        <div className="text-block">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span className="role-tag">{texts.college.role}</span>
            <Recycle size={28} color="#D38AA3" />
          </div>

          <h3 style={{ fontFamily: 'Jersey 10', fontSize: '2rem', marginBottom: '20px' }}>{texts.college.projectAbout}</h3>

          <p style={{ marginBottom: '20px' }}>
            {texts.college.projectDesc1}
          </p>

          <p style={{ marginBottom: '20px' }}>
            {texts.college.projectDesc2}
          </p>

          <h3 style={{ fontFamily: 'Jersey 10', fontSize: '1.6rem', marginTop: '30px', marginBottom: '15px' }}>{texts.college.myContributions}</h3>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>
              <Globe size={16} style={{ display: 'inline', marginRight: '8px', color: '#D38AA3' }} />
              {texts.college.contrib1}
            </li>
            <li>
              <Cpu size={16} style={{ display: 'inline', marginRight: '8px', color: '#D38AA3' }} />
              {texts.college.contrib2}
            </li>
            <li>
              <FileText size={16} style={{ display: 'inline', marginRight: '8px', color: '#D38AA3' }} />
              {texts.college.contrib3}
            </li>
          </ul>

          <div className="tech-list">
            <span className="tech-pill">HTML/CSS/JS</span>
            <span className="tech-pill">Arduino & IoT</span>
            <span className="tech-pill">{lang === 'pt' ? 'Sustentabilidade' : 'Sustainability'}</span>
          </div>
        </div>

        {/* DIREITA: MURAL DE EVIDÊNCIAS (FOTOS E VÍDEO) */}
        <div className="postit-stack">
          {/* 1. O VÍDEO (Estilo Tela Colada) */}
          <div className="video-frame">
            <div style={{ color: '#FFF', fontFamily: 'Jersey 10', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Video size={16} /> {texts.college.videoTitle}
            </div>
            <video controls>
              <source src="/img/ecoarduino/video-1.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>

          {/* 2. LINK DO SITE (Post-it Amarelo) */}
          <a href="https://ecoarduino.netlify.app" target="_blank" rel="noopener noreferrer" className="postit-item">
            <Paperclip className="paperclip-icon" size={24} />
            <div className="postit-title"><Globe size={20} /> {texts.college.siteLink}</div>
            <p style={{ fontSize: '0.9rem' }}>
              {texts.college.siteDesc}
            </p>
          </a>

          {/* 3. GALERIA DE POLAROIDS (Fotos) */}
          <div style={{ marginTop: '10px' }}>
            <h4 style={{ fontFamily: 'Caveat', fontSize: '1.8rem', color: '#6B4F4F', textAlign: 'center', marginBottom: '10px' }}>
              <Camera size={20} style={{ display: 'inline' }} /> {texts.college.behind}
            </h4>

            <div className="polaroid-gallery">
              <div className="polaroid">
                <img src="/img/ecoarduino/foto-1.jpg" alt="Protótipo 1" />
                <span>{texts.college.label1}</span>
              </div>
              <div className="polaroid">
                <img src="/img/ecoarduino/foto-2.jpg" alt="Protótipo 2" />
                <span>{texts.college.label2}</span>
              </div>
              <div className="polaroid">
                <img src="/img/ecoarduino/foto-3.jpg" alt="Protótipo 3" />
                <span>{texts.college.label3}</span>
              </div>
              <div className="polaroid">
                <img src="/img/ecoarduino/foto-4.jpg" alt="Protótipo 4" />
                <span>{texts.college.label4}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default College;
